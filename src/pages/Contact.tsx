import { useState, useEffect, useRef } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState('');
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
      }
    );

    const elements = document.querySelectorAll('.scroll-animate, .scroll-animate-left, .scroll-animate-right, .scroll-animate-scale');
    elements.forEach((el) => {
      el.classList.remove('animate-in');
      observerRef.current?.observe(el);
    });

    return () => {
      observerRef.current?.disconnect();
    };
  }, []);

  useEffect(() => {
    const style = document.createElement('style');
    style.textContent = `
      .scroll-animate,
      .scroll-animate-left,
      .scroll-animate-right,
      .scroll-animate-scale {
        opacity: 0;
        transition: all 0.8s cubic-bezier(0.4, 0, 0.2, 1);
      }

      .scroll-animate {
        transform: translateY(50px);
      }

      .scroll-animate-left {
        transform: translateX(-50px);
      }

      .scroll-animate-right {
        transform: translateX(50px);
      }

      .scroll-animate-scale {
        transform: scale(0.9);
      }

      .scroll-animate.animate-in,
      .scroll-animate-left.animate-in,
      .scroll-animate-right.animate-in,
      .scroll-animate-scale.animate-in {
        opacity: 1;
        transform: none;
      }
    `;
    document.head.appendChild(style);

    return () => {
      document.head.removeChild(style);
    };
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (formData.message.length > 500) {
      setSubmitError('Message must be 500 characters or less');
      return;
    }
    
    setIsSubmitting(true);
    setSubmitError('');
    
    try {
      // Use relative URL to work across different devices
      let apiUrl;
      
      // Check if we're on the deployed Vercel site
      if (window.location.hostname.includes('vercel.app') || window.location.hostname.includes('summit-usa-website')) {
        // Use the deployed API endpoint
        apiUrl = '/api/send-email';
      } else if (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1') {
        apiUrl = 'http://localhost:3001/api/send-email';
      } else if (window.location.hostname.includes('192.168.0.126')) {
        apiUrl = 'http://192.168.0.126:3001/api/send-email';
      } else {
        // For network access, try to use the same hostname but different port
        apiUrl = `${window.location.protocol}//${window.location.hostname}:3001/api/send-email`;
      }
      
      console.log('Attempting to send email to:', apiUrl);
      console.log('Form data:', formData);
      
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 10000); // 10 second timeout
      
      let response;
      try {
        response = await fetch(apiUrl, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
          signal: controller.signal,
        });
      } catch (fetchError) {
        console.log('First attempt failed, trying fallback URL...');
        // Try fallback URL if first attempt fails
        let fallbackUrl;
        if (window.location.hostname.includes('vercel.app') || window.location.hostname.includes('summit-usa-website')) {
          fallbackUrl = '/api/send-email';
        } else if (window.location.hostname === 'localhost') {
          fallbackUrl = 'http://192.168.0.126:3001/api/send-email';
        } else {
          fallbackUrl = 'http://localhost:3001/api/send-email';
        }
        
        console.log('Trying fallback URL:', fallbackUrl);
        response = await fetch(fallbackUrl, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
          signal: controller.signal,
        });
      }
      
      clearTimeout(timeoutId);
      
      console.log('Response status:', response.status);
      console.log('Response headers:', response.headers);
      
      const result = await response.json();
      
      if (result.success) {
        setIsSubmitted(true);
        setFormData({ name: '', email: '', company: '', message: '' });
      } else {
        setSubmitError(result.message || 'Failed to send message. Please try again.');
      }
    } catch (error) {
      console.error('Error sending email:', error);
      
      if (error.name === 'AbortError') {
        setSubmitError('Request timed out. Please try again.');
      } else if (error.message.includes('Failed to fetch')) {
        setSubmitError('Cannot connect to server. Please check your connection and try again.');
      } else {
        setSubmitError('Network error. Please check your connection and try again.');
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-black">
      <Header />
      
      {/* Hero Section */}
      <section className="relative pt-20 sm:pt-24 pb-12 sm:pb-16 bg-gradient-to-br from-orange-600 via-blue-900 to-black overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <img 
            src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
            alt="Contact background" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
          <div className="text-center scroll-animate">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6">
              Get In 
              <span className="bg-gradient-to-r from-orange-400 to-blue-400 bg-clip-text text-transparent">
                Touch
              </span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed px-4">
              Ready to take your business to the next level? Let's start a conversation about 
              how Summit Services Corporation can help you achieve your goals.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-12 sm:py-16 md:py-24 bg-gradient-to-b from-black to-gray-900 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <img 
            src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
            alt="Office background" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16">
            {/* Contact Form */}
            <div className="bg-gradient-to-br from-orange-900/30 to-black p-6 sm:p-8 md:p-12 rounded-2xl sm:rounded-3xl border border-orange-500/20 scroll-animate-left overflow-hidden relative">
              <div className="absolute top-4 right-4 opacity-15">
                <img 
                  src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80" 
                  alt="Contact form" 
                  className="w-24 h-24 object-cover rounded-xl"
                />
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6 sm:mb-8 relative z-10">Send us a Message</h2>
              
              {isSubmitted ? (
                <div className="text-center py-8 sm:py-12">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
                    <svg className="w-6 h-6 sm:w-8 sm:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4">Message Sent!</h3>
                  <p className="text-sm sm:text-base text-gray-300 px-4">Thank you for contacting us. We'll get back to you within 24 hours.</p>
                </div>
              ) : (
                <form id="contact-summit" onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-white font-semibold mb-2 text-sm sm:text-base">Full Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-3 sm:px-4 py-3 sm:py-4 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:border-orange-500 focus:outline-none transition-colors text-sm sm:text-base touch-manipulation"
                      placeholder="Enter your full name"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-white font-semibold mb-2 text-sm sm:text-base">Email Address</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-3 sm:px-4 py-3 sm:py-4 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:border-orange-500 focus:outline-none transition-colors text-sm sm:text-base touch-manipulation"
                      placeholder="Enter your email address"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="company" className="block text-white font-semibold mb-2 text-sm sm:text-base">Company</label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-3 sm:px-4 py-3 sm:py-4 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:border-orange-500 focus:outline-none transition-colors text-sm sm:text-base touch-manipulation"
                      placeholder="Enter your company name"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-white font-semibold mb-2 text-sm sm:text-base">Message</label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      maxLength={500}
                      rows={5}
                      className="w-full px-3 sm:px-4 py-3 sm:py-4 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:border-orange-500 focus:outline-none transition-colors text-sm sm:text-base resize-none touch-manipulation"
                      placeholder="Tell us about your project or how we can help..."
                    />
                    <p className="text-gray-400 text-xs sm:text-sm mt-2">{formData.message.length}/500 characters</p>
                  </div>
                  
                  {submitError && (
                    <div className="bg-red-900/30 border border-red-500/50 text-red-200 px-4 py-3 rounded-lg text-sm">
                      {submitError}
                    </div>
                  )}
                  
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-orange-600 to-blue-600 hover:from-orange-700 hover:to-blue-700 disabled:from-gray-600 disabled:to-gray-700 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 disabled:transform-none shadow-lg hover:shadow-orange-500/25 text-sm sm:text-base touch-manipulation min-h-[48px] flex items-center justify-center"
                  >
                    {isSubmitting ? (
                      <>
                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Sending...
                      </>
                    ) : (
                      'Send Message'
                    )}
                  </button>
                </form>
              )}
            </div>
            
            {/* Contact Information */}
            <div className="space-y-6 sm:space-y-8 scroll-animate-right">
              <div className="bg-gradient-to-br from-blue-900/30 to-black p-6 sm:p-8 rounded-2xl border border-blue-500/20 scroll-animate-scale overflow-hidden relative">
                <div className="absolute top-4 right-4 opacity-15">
                  <img 
                    src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80" 
                    alt="Contact info" 
                    className="w-20 h-20 object-cover rounded-xl"
                  />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-4 sm:mb-6 relative z-10">Contact Information</h3>
                <div className="space-y-4 sm:space-y-6 relative z-10">
                  <div>
                    <h4 className="text-base sm:text-lg font-semibold text-blue-400 mb-2">Office Address</h4>
                    <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
                      Summit Services Corporation<br />
                      20511 61st Place West<br />
                      Lynnwood, WA 98036 (U.S.A)
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="text-base sm:text-lg font-semibold text-blue-400 mb-2">Phone</h4>
                    <a href="tel:+12068410601" className="text-gray-300 hover:text-blue-400 transition-colors text-sm sm:text-base">
                      1-206-841-0601 Extension 101 (Voice)
                    </a>
                  </div>
                  
                  <div>
                    <h4 className="text-base sm:text-lg font-semibold text-blue-400 mb-2">Fax</h4>
                    <p className="text-gray-300 text-sm sm:text-base">1-206-339-4838</p>
                  </div>
                  
                  <div>
                    <h4 className="text-base sm:text-lg font-semibold text-blue-400 mb-2">SIP</h4>
                    <a href="sip:101@Sip.SummitUSA.com" className="text-gray-300 hover:text-blue-400 transition-colors text-sm sm:text-base break-all">
                      101@Sip.SummitUSA.com
                    </a>
                  </div>
                  
                  <div>
                    <h4 className="text-base sm:text-lg font-semibold text-blue-400 mb-2">Business Hours</h4>
                    <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
                      Monday - Friday: 9:00 AM - 6:00 PM<br />
                      Saturday: 10:00 AM - 4:00 PM<br />
                      Sunday: Closed
                    </p>
                  </div>
                </div>
              </div>
              
              
              <div className="bg-gradient-to-br from-blue-900/30 to-black p-6 sm:p-8 rounded-2xl border border-blue-500/20 scroll-animate-scale overflow-hidden relative">
                <div className="absolute top-4 right-4 opacity-15">
                  <img 
                    src="https://images.unsplash.com/photo-1483058712412-4245e9b90334?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80" 
                    alt="Quick response" 
                    className="w-20 h-20 object-cover rounded-xl"
                  />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4 relative z-10">Quick Response</h3>
                <p className="text-gray-300 leading-relaxed text-sm sm:text-base relative z-10">
                  We typically respond to all inquiries within 24 hours. For urgent matters, 
                  please call us directly at 1-206-841-0601 Extension 101.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>


      <Footer />
    </div>
  );
}
