
import { useState } from 'react';
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
      <section className="relative pt-24 pb-16 bg-gradient-to-br from-purple-900 via-blue-900 to-black">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Get In 
              <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                Touch
              </span>
            </h1>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
              Ready to take your business to the next level? Let's start a conversation about 
              how SummitUSA can help you achieve your goals.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-24 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div className="bg-gradient-to-br from-purple-900/30 to-black p-12 rounded-3xl border border-purple-500/20">
              <h2 className="text-3xl font-bold text-white mb-8">Send us a Message</h2>
              
              {isSubmitted ? (
                <div className="text-center py-12">
                  <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">Message Sent!</h3>
                  <p className="text-gray-300">Thank you for contacting us. We'll get back to you within 24 hours.</p>
                </div>
              ) : (
                <form id="contact-summit" onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-white font-semibold mb-2">Full Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:border-purple-500 focus:outline-none transition-colors text-sm"
                      placeholder="Enter your full name"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-white font-semibold mb-2">Email Address</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:border-purple-500 focus:outline-none transition-colors text-sm"
                      placeholder="Enter your email address"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="company" className="block text-white font-semibold mb-2">Company</label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:border-purple-500 focus:outline-none transition-colors text-sm"
                      placeholder="Enter your company name"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-white font-semibold mb-2">Message</label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      maxLength={500}
                      rows={6}
                      className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:border-purple-500 focus:outline-none transition-colors text-sm resize-none"
                      placeholder="Tell us about your project or how we can help..."
                    />
                    <p className="text-gray-400 text-sm mt-2">{formData.message.length}/500 characters</p>
                  </div>
                  
                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-purple-500/25 whitespace-nowrap cursor-pointer"
                  >
                    Send Message
                  </button>
                </form>
              )}
            </div>
            
            {/* Contact Information */}
            <div className="space-y-8">
              <div className="bg-gradient-to-br from-blue-900/30 to-black p-8 rounded-2xl border border-blue-500/20">
                <h3 className="text-2xl font-bold text-white mb-6">Contact Information</h3>
                <div className="space-y-6">
                  <div>
                    <h4 className="text-lg font-semibold text-blue-400 mb-2">Office Address</h4>
                    <p className="text-gray-300">
                      1234 Summit Street<br />
                      New York, NY 10001<br />
                      United States
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="text-lg font-semibold text-blue-400 mb-2">Phone</h4>
                    <p className="text-gray-300">+1 (555) 123-4567</p>
                  </div>
                  
                  <div>
                    <h4 className="text-lg font-semibold text-blue-400 mb-2">Email</h4>
                    <p className="text-gray-300">info@summitusa.com</p>
                  </div>
                  
                  <div>
                    <h4 className="text-lg font-semibold text-blue-400 mb-2">Business Hours</h4>
                    <p className="text-gray-300">
                      Monday - Friday: 9:00 AM - 6:00 PM<br />
                      Saturday: 10:00 AM - 4:00 PM<br />
                      Sunday: Closed
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="bg-gradient-to-br from-purple-900/30 to-black p-8 rounded-2xl border border-purple-500/20">
                <h3 className="text-2xl font-bold text-white mb-6">Follow Us</h3>
                <div className="space-y-4">
                  <a href="#" className="block text-gray-300 hover:text-purple-400 transition-colors cursor-pointer">
                    Facebook - Stay updated with our latest insights
                  </a>
                  <a href="#" className="block text-gray-300 hover:text-purple-400 transition-colors cursor-pointer">
                    LinkedIn - Connect with our professional network
                  </a>
                  <a href="#" className="block text-gray-300 hover:text-purple-400 transition-colors cursor-pointer">
                    Twitter - Follow our industry commentary
                  </a>
                </div>
              </div>
              
              <div className="bg-gradient-to-br from-blue-900/30 to-black p-8 rounded-2xl border border-blue-500/20">
                <h3 className="text-2xl font-bold text-white mb-4">Quick Response</h3>
                <p className="text-gray-300 leading-relaxed">
                  We typically respond to all inquiries within 24 hours. For urgent matters, 
                  please call us directly at +1 (555) 123-4567.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 bg-gradient-to-br from-purple-900/20 to-blue-900/20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">Visit Our Office</h2>
            <p className="text-xl text-gray-300">Located in the heart of New York City</p>
          </div>
          
          <div className="rounded-2xl overflow-hidden shadow-2xl">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.681139661165!2d-73.98731968459394!3d40.75889897932686!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25855c6480299%3A0x55194ec5a1ae072e!2sTimes%20Square!5e0!3m2!1sen!2sus!4v1635959384843!5m2!1sen!2sus"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
