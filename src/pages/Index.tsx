
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
              Enterprise IT Solutions
              <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent block">
                That Drive Success
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 max-w-4xl mx-auto leading-relaxed mb-10">
              From network infrastructure to cloud migration, we deliver comprehensive IT services 
              that empower businesses to innovate, scale, and thrive in the digital landscape.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Link 
                to="/contact"
                className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-purple-500/25 whitespace-nowrap"
              >
                Get IT Assessment
              </Link>
              <Link 
                to="/services"
                className="border border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 whitespace-nowrap"
              >
                View Solutions
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Key Statistics */}
      <section className="py-16 bg-gradient-to-r from-black via-purple-900/20 to-blue-900/20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center bg-gradient-to-br from-purple-900/30 to-black p-6 rounded-2xl border border-purple-500/20">
              <h3 className="text-4xl font-bold text-purple-400 mb-2">500+</h3>
              <p className="text-gray-300">Clients Served</p>
            </div>
            <div className="text-center bg-gradient-to-br from-blue-900/30 to-black p-6 rounded-2xl border border-blue-500/20">
              <h3 className="text-4xl font-bold text-blue-400 mb-2">99.9%</h3>
              <p className="text-gray-300">Network Uptime</p>
            </div>
            <div className="text-center bg-gradient-to-br from-purple-900/30 to-black p-6 rounded-2xl border border-purple-500/20">
              <h3 className="text-4xl font-bold text-purple-400 mb-2">24/7</h3>
              <p className="text-gray-300">Support Available</p>
            </div>
            <div className="text-center bg-gradient-to-br from-blue-900/30 to-black p-6 rounded-2xl border border-blue-500/20">
              <h3 className="text-4xl font-bold text-blue-400 mb-2">15+</h3>
              <p className="text-gray-300">Years Experience</p>
            </div>
          </div>
        </div>
      </section>

      {/* Core IT Services */}
      <section className="py-24 bg-gradient-to-br from-black via-purple-900/10 to-blue-900/20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Complete IT Infrastructure Solutions
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive technology services designed to optimize your business operations, 
              enhance security, and accelerate digital transformation.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-purple-900/40 to-black/30 p-8 rounded-3xl border border-purple-500/30 hover:border-purple-500/50 transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Network Infrastructure</h3>
              <p className="text-gray-300 mb-4">
                Design, implement, and maintain robust network architectures that ensure 
                reliable connectivity and optimal performance for your business operations.
              </p>
              <ul className="text-gray-400 text-sm space-y-1">
                <li>• LAN/WAN Design & Setup</li>
                <li>• Network Security Implementation</li>
                <li>• Performance Monitoring</li>
              </ul>
            </div>
            
            <div className="bg-gradient-to-br from-blue-900/40 to-black/30 p-8 rounded-3xl border border-blue-500/30 hover:border-blue-500/50 transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.002 4.002 0 003 15z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Cloud Services</h3>
              <p className="text-gray-300 mb-4">
                Seamless cloud migration and management services that provide scalability, 
                flexibility, and cost-effectiveness for modern business needs.
              </p>
              <ul className="text-gray-400 text-sm space-y-1">
                <li>• Cloud Migration Strategy</li>
                <li>• Multi-Cloud Management</li>
                <li>• Cloud Security & Compliance</li>
              </ul>
            </div>
            
            <div className="bg-gradient-to-br from-purple-900/40 to-black/30 p-8 rounded-3xl border border-purple-500/30 hover:border-purple-500/50 transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Cybersecurity</h3>
              <p className="text-gray-300 mb-4">
                Comprehensive security solutions to protect your digital assets from 
                evolving cyber threats and ensure business continuity.
              </p>
              <ul className="text-gray-400 text-sm space-y-1">
                <li>• Threat Detection & Response</li>
                <li>• Security Audits & Assessments</li>
                <li>• Compliance Management</li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-blue-900/40 to-black/30 p-8 rounded-3xl border border-blue-500/30 hover:border-blue-500/50 transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Managed IT Services</h3>
              <p className="text-gray-300 mb-4">
                Proactive IT management and support services that keep your systems 
                running smoothly while reducing operational costs.
              </p>
              <ul className="text-gray-400 text-sm space-y-1">
                <li>• 24/7 System Monitoring</li>
                <li>• Help Desk Support</li>
                <li>• Preventive Maintenance</li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-purple-900/40 to-black/30 p-8 rounded-3xl border border-purple-500/30 hover:border-purple-500/50 transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Data Management</h3>
              <p className="text-gray-300 mb-4">
                Comprehensive data backup, recovery, and management solutions to 
                ensure your critical business information is always protected.
              </p>
              <ul className="text-gray-400 text-sm space-y-1">
                <li>• Automated Backup Solutions</li>
                <li>• Disaster Recovery Planning</li>
                <li>• Data Analytics & Insights</li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-blue-900/40 to-black/30 p-8 rounded-3xl border border-blue-500/30 hover:border-blue-500/50 transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">IT Consulting</h3>
              <p className="text-gray-300 mb-4">
                Strategic technology consulting to align IT initiatives with business 
                goals and accelerate digital transformation initiatives.
              </p>
              <ul className="text-gray-400 text-sm space-y-1">
                <li>• Technology Strategy Planning</li>
                <li>• Digital Transformation</li>
                <li>• IT Budget Optimization</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-24 bg-gradient-to-r from-purple-900 via-blue-900 to-purple-900">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Modernize Your IT Infrastructure?
          </h2>
          <p className="text-xl text-gray-200 mb-10 leading-relaxed">
            Partner with SummitUSA for reliable, scalable, and secure IT solutions that drive 
            business growth and operational excellence in today's digital world.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Link 
              to="/contact"
              className="bg-white text-purple-900 px-12 py-4 rounded-full text-lg font-bold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-2xl whitespace-nowrap"
            >
              Schedule Consultation
            </Link>
            <Link 
              to="/services"
              className="border border-white text-white hover:bg-white hover:text-purple-900 px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 whitespace-nowrap"
            >
              Explore Services
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
