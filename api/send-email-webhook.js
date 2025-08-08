export default async function handler(req, res) {
  // Enable CORS
  res.setHeader('Access-Control-Allow-Credentials', true);
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,DELETE,PATCH,POST,PUT');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
  );

  // Handle preflight requests
  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  // Only allow POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ success: false, message: 'Method not allowed' });
  }

  try {
    const { name, email, company, message } = req.body;

    // Validate required fields
    if (!name || !email || !message) {
      return res.status(400).json({ 
        success: false, 
        message: 'Name, email, and message are required' 
      });
    }

    // Try to forward to local server if available
    try {
      const localResponse = await fetch('http://192.168.0.126:3001/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, company, message }),
        signal: AbortSignal.timeout(5000) // 5 second timeout
      });

      if (localResponse.ok) {
        const result = await localResponse.json();
        return res.status(200).json(result);
      }
    } catch (localError) {
      console.log('Local server not available, using fallback:', localError.message);
    }

    // Fallback: Log the submission
    console.log('Contact form submission (webhook fallback):', {
      name,
      email,
      company,
      message,
      timestamp: new Date().toISOString(),
      source: 'Vercel Webhook API'
    });

    res.status(200).json({ 
      success: true, 
      message: 'Message received successfully. We will contact you soon.',
      messageId: `webhook-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`
    });

  } catch (error) {
    console.error('Error processing contact form:', error);
    res.status(500).json({ 
      success: false, 
      message: 'Failed to process message. Please try again later.',
      error: error.message
    });
  }
} 