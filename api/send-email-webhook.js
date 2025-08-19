import nodemailer from "nodemailer";

// SMTP Configuration
const transporter = nodemailer.createTransporter({
  host: "mxout.summitusa.com",
  port: 8115,
  secure: false, // true for 465, false for other ports
  auth: {
    user: "mailsender",
    pass: "muji2315",
  },
  tls: {
    rejectUnauthorized: false,
  },
});

export default async function handler(req, res) {
  // Enable CORS
  res.setHeader("Access-Control-Allow-Credentials", true);
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET,DELETE,PATCH,POST,PUT");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version"
  );

  // Handle preflight requests
  if (req.method === "OPTIONS") {
    res.status(200).end();
    return;
  }

  // Only allow POST requests
  if (req.method !== "POST") {
    return res
      .status(405)
      .json({ success: false, message: "Method not allowed" });
  }

  try {
    const { name, email, company, message } = req.body;

    // Validate required fields
    if (!name || !email || !message) {
      return res.status(400).json({
        success: false,
        message: "Name, email, and message are required",
      });
    }

    // Try to forward to local server if available
    try {
      const localResponse = await fetch(
        "https://summit-scroll-motion-react.onrender.com/api/send-email",
        // "http://192.168.0.126:3001/api/send-email",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ name, email, company, message }),
          signal: AbortSignal.timeout(5000), // 5 second timeout
        }
      );

      if (localResponse.ok) {
        const result = await localResponse.json();
        return res.status(200).json(result);
      }
    } catch (localError) {
      console.log(
        "Local server not available, using SMTP fallback:",
        localError.message
      );
    }

    // Fallback: Send email directly via SMTP
    try {
      const mailOptions = {
        from: "mailsender@summitusa.com",
        to: "info@summitusa.com", // Change this to your desired recipient
        subject: `New Contact Form Submission from ${name}`,
        html: `
          <h2>New Contact Form Submission</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Company:</strong> ${company || "Not provided"}</p>
          <p><strong>Message:</strong></p>
          <p>${message.replace(/\n/g, "<br>")}</p>
          <hr>
          <p><small>Sent from Summit USA Contact Form (Webhook)</small></p>
        `,
        text: `
          New Contact Form Submission
          
          Name: ${name}
          Email: ${email}
          Company: ${company || "Not provided"}
          Message: ${message}
          
          Sent from Summit USA Contact Form (Webhook)
        `,
      };

      const info = await transporter.sendMail(mailOptions);

      console.log("Email sent successfully via webhook SMTP:", info.messageId);

      return res.status(200).json({
        success: true,
        message: "Email sent successfully",
        messageId: info.messageId,
      });
    } catch (smtpError) {
      console.error("SMTP error in webhook:", smtpError);

      // Final fallback: Log the submission
      console.log("Contact form submission (final fallback):", {
        name,
        email,
        company,
        message,
        timestamp: new Date().toISOString(),
        source: "Vercel Webhook API - SMTP Failed",
      });

      res.status(200).json({
        success: true,
        message: "Message received successfully. We will contact you soon.",
        messageId: `webhook-fallback-${Date.now()}-${Math.random()
          .toString(36)
          .substr(2, 9)}`,
      });
    }
  } catch (error) {
    console.error("Error processing contact form:", error);
    res.status(500).json({
      success: false,
      message: "Failed to process message. Please try again later.",
      error: error.message,
    });
  }
}
