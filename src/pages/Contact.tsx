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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (formData.message.length > 500) {
      alert('Message must be 500 characters or less');
      return;
    }
    
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: '', email: '', company: '', message: '' });
    }, 3000);
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
                  
                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-orange-600 to-blue-600 hover:from-orange-700 hover:to-blue-700 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-orange-500/25 text-sm sm:text-base touch-manipulation min-h-[48px]"
                  >
                    Send Message
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
              
              <div className="bg-gradient-to-br from-orange-900/30 to-black p-6 sm:p-8 rounded-2xl border border-orange-500/20 scroll-animate-scale overflow-hidden relative">
                <div className="absolute top-4 right-4 opacity-15">
                  <img 
                    src="https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80" 
                    alt="Social" 
                    className="w-20 h-20 object-cover rounded-xl"
                  />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-4 sm:mb-6 relative z-10">Follow Us</h3>
                <div className="space-y-3 sm:space-y-4 relative z-10">
                  <a href="#" className="block text-gray-300 hover:text-orange-400 transition-colors cursor-pointer text-sm sm:text-base">
                    Facebook - Stay updated with our latest insights
                  </a>
                  <a href="#" className="block text-gray-300 hover:text-orange-400 transition-colors cursor-pointer text-sm sm:text-base">
                    LinkedIn - Connect with our professional network
                  </a>
                  <a href="#" className="block text-gray-300 hover:text-orange-400 transition-colors cursor-pointer text-sm sm:text-base">
                    Twitter - Follow our industry commentary
                  </a>
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

      {/* Map Section */}
      <section className="py-12 sm:py-16 bg-gradient-to-br from-orange-900/20 to-blue-900/20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <img 
            src="https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
            alt="Office location background" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
          <div className="text-center mb-8 sm:mb-12 scroll-animate">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-3 sm:mb-4">Visit Our Office</h2>
          </div>
          
          <div className="rounded-2xl overflow-hidden shadow-2xl scroll-animate-scale">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2682.4567!2d-122.315!3d47.821!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDfCsDQ5JzE1LjYiTiAxMjLCsDE4JzU0LjAiVw!5e0!3m2!1sen!2sus!4v1635959384843!5m2!1sen!2sus"
              width="100%"
              height="300"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="sm:h-[400px]"
            ></iframe>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
