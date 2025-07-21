
import { Link } from "react-router-dom";
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Index() {
  return (
    <div className="min-h-screen bg-black">
      <Header />
      
      {/* Hero Section */}
      <section className="relative pt-24 pb-16 bg-gradient-to-br from-purple-900 via-blue-900 to-black overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=\"60\" height=\"60\" viewBox=\"0 0 60 60\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cg fill=\"none\" fill-rule=\"evenodd\"%3E%3Cg fill=\"%239C92AC\" fill-opacity=\"0.05\"%3E%3Ccircle cx=\"30\" cy=\"30\" r=\"2\"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 leading-tight">
              Complete IT Solutions
              <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent block">
                For Modern Business
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 max-w-4xl mx-auto leading-relaxed mb-10">
              Transform your business with cutting-edge technology solutions, expert IT consulting, 
              and comprehensive managed services designed to drive growth and efficiency.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Link 
                to="/contact"
                className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-purple-500/25 whitespace-nowrap"
              >
                Free IT Consultation
              </Link>
              <Link 
                to="/services"
                className="border border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 whitespace-nowrap"
              >
                Our Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Key Metrics */}
      <section className="py-16 bg-gradient-to-r from-black via-purple-900/20 to-blue-900/20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center bg-gradient-to-br from-purple-900/30 to-black p-6 rounded-2xl border border-purple-500/20">
              <h3 className="text-4xl font-bold text-purple-400 mb-2">15+</h3>
              <p className="text-gray-300">Years Experience</p>
            </div>
            <div className="text-center bg-gradient-to-br from-blue-900/30 to-black p-6 rounded-2xl border border-blue-500/20">
              <h3 className="text-4xl font-bold text-blue-400 mb-2">1000+</h3>
              <p className="text-gray-300">Projects Delivered</p>
            </div>
            <div className="text-center bg-gradient-to-br from-purple-900/30 to-black p-6 rounded-2xl border border-purple-500/20">
              <h3 className="text-4xl font-bold text-purple-400 mb-2">24/7</h3>
              <p className="text-gray-300">Technical Support</p>
            </div>
            <div className="text-center bg-gradient-to-br from-blue-900/30 to-black p-6 rounded-2xl border border-blue-500/20">
              <h3 className="text-4xl font-bold text-blue-400 mb-2">99.9%</h3>
              <p className="text-gray-300">System Uptime</p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Services */}
      <section className="py-24 bg-gradient-to-br from-black via-purple-900/10 to-blue-900/20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Comprehensive IT Services
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              From cloud migration to cybersecurity, we provide end-to-end IT solutions 
              that empower your business to thrive in the digital age.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-purple-900/40 to-black/30 p-8 rounded-3xl border border-purple-500/30 hover:border-purple-500/50 transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.002 4.002 0 003 15z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Cloud Solutions</h3>
              <p className="text-gray-300 mb-4">
                Seamless migration to cloud platforms with enhanced scalability, 
                security, and cost optimization for your business operations.
              </p>
              <ul className="text-gray-400 text-sm space-y-1">
                <li>• AWS & Azure Migration</li>
                <li>• Cloud Architecture Design</li>
                <li>• Hybrid Cloud Solutions</li>
              </ul>
            </div>
            
            <div className="bg-gradient-to-br from-blue-900/40 to-black/30 p-8 rounded-3xl border border-blue-500/30 hover:border-blue-500/50 transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Cybersecurity</h3>
              <p className="text-gray-300 mb-4">
                Advanced threat protection and security monitoring to safeguard 
                your digital assets from evolving cyber threats.
              </p>
              <ul className="text-gray-400 text-sm space-y-1">
                <li>• Threat Detection & Response</li>
                <li>• Security Audits</li>
                <li>• Compliance Management</li>
              </ul>
            </div>
            
            <div className="bg-gradient-to-br from-purple-900/40 to-black/30 p-8 rounded-3xl border border-purple-500/30 hover:border-purple-500/50 transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">IT Infrastructure</h3>
              <p className="text-gray-300 mb-4">
                Robust network infrastructure and server management solutions 
                designed for optimal performance and reliability.
              </p>
              <ul className="text-gray-400 text-sm space-y-1">
                <li>• Server Management</li>
                <li>• Network Optimization</li>
                <li>• Infrastructure Monitoring</li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-blue-900/40 to-black/30 p-8 rounded-3xl border border-blue-500/30 hover:border-blue-500/50 transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Managed Services</h3>
              <p className="text-gray-300 mb-4">
                Proactive IT management and support services to keep your 
                systems running smoothly while you focus on core business.
              </p>
              <ul className="text-gray-400 text-sm space-y-1">
                <li>• Remote Monitoring</li>
                <li>• Help Desk Support</li>
                <li>• Preventive Maintenance</li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-purple-900/40 to-black/30 p-8 rounded-3xl border border-purple-500/30 hover:border-purple-500/50 transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Data Analytics</h3>
              <p className="text-gray-300 mb-4">
                Transform raw data into actionable insights with advanced 
                analytics solutions and business intelligence platforms.
              </p>
              <ul className="text-gray-400 text-sm space-y-1">
                <li>• Business Intelligence</li>
                <li>• Data Visualization</li>
                <li>• Predictive Analytics</li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-blue-900/40 to-black/30 p-8 rounded-3xl border border-blue-500/30 hover:border-blue-500/50 transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">IT Consulting</h3>
              <p className="text-gray-300 mb-4">
                Strategic technology consulting to align IT initiatives with 
                business objectives and drive digital transformation.
              </p>
              <ul className="text-gray-400 text-sm space-y-1">
                <li>• Technology Strategy</li>
                <li>• Digital Transformation</li>
                <li>• IT Roadmap Planning</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-24 bg-gradient-to-r from-purple-900 via-blue-900 to-purple-900">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Transform Your IT Infrastructure?
          </h2>
          <p className="text-xl text-gray-200 mb-10 leading-relaxed">
            Partner with SummitUSA for cutting-edge technology solutions that drive business growth, 
            enhance security, and optimize operational efficiency.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Link 
              to="/contact"
              className="bg-white text-purple-900 px-12 py-4 rounded-full text-lg font-bold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-2xl whitespace-nowrap"
            >
              Get Free Consultation
            </Link>
            <Link 
              to="/services"
              className="border border-white text-white hover:bg-white hover:text-purple-900 px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 whitespace-nowrap"
            >
              View All Services
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
