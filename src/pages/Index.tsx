
import { Link } from "react-router-dom";
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Index() {
  return (
    <div className="min-h-screen bg-black">
      <Header />
      
      {/* Hero Section */}
      <section className="relative pt-24 pb-16 bg-gradient-to-br from-purple-900 via-blue-900 to-black overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%239C92AC" fill-opacity="0.05"%3E%3Ccircle cx="30" cy="30" r="2"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 leading-tight">
              Elevate Your Business to the
              <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent block">
                Summit of Success
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 max-w-4xl mx-auto leading-relaxed mb-10">
              SummitUSA delivers cutting-edge technology solutions, strategic consulting, and digital transformation services 
              that propel businesses to unprecedented heights of performance and innovation.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Link 
                to="/contact"
                className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-purple-500/25 whitespace-nowrap"
              >
                Start Your Journey
              </Link>
              <Link 
                to="/services"
                className="border border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 whitespace-nowrap"
              >
                Explore Our Solutions
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Key Stats */}
      <section className="py-16 bg-gradient-to-r from-black via-purple-900/20 to-blue-900/20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center bg-gradient-to-br from-purple-900/30 to-black p-6 rounded-2xl border border-purple-500/20">
              <h3 className="text-4xl font-bold text-purple-400 mb-2">500+</h3>
              <p className="text-gray-300">Successful Projects Delivered</p>
            </div>
            <div className="text-center bg-gradient-to-br from-blue-900/30 to-black p-6 rounded-2xl border border-blue-500/20">
              <h3 className="text-4xl font-bold text-blue-400 mb-2">98%</h3>
              <p className="text-gray-300">Client Satisfaction Rate</p>
            </div>
            <div className="text-center bg-gradient-to-br from-purple-900/30 to-black p-6 rounded-2xl border border-purple-500/20">
              <h3 className="text-4xl font-bold text-purple-400 mb-2">15+</h3>
              <p className="text-gray-300">Industries Served</p>
            </div>
            <div className="text-center bg-gradient-to-br from-blue-900/30 to-black p-6 rounded-2xl border border-blue-500/20">
              <h3 className="text-4xl font-bold text-blue-400 mb-2">300%</h3>
              <p className="text-gray-300">Average ROI for Clients</p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Services */}
      <section className="py-24 bg-gradient-to-br from-black via-purple-900/10 to-blue-900/20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              SummitUSA Technology Solutions
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive technology services designed to accelerate your digital transformation journey
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-purple-900/40 to-black/30 p-8 rounded-3xl border border-purple-500/30 hover:border-purple-500/50 transition-all duration-300 group">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Software Development</h3>
              <p className="text-gray-300 mb-4">
                Custom software solutions built with modern technologies to meet your specific business requirements and drive operational efficiency.
              </p>
              <ul className="text-gray-400 text-sm space-y-1">
                <li>• Web Application Development</li>
                <li>• Mobile App Development</li>
                <li>• API Development & Integration</li>
              </ul>
            </div>
            
            <div className="bg-gradient-to-br from-blue-900/40 to-black/30 p-8 rounded-3xl border border-blue-500/30 hover:border-blue-500/50 transition-all duration-300 group">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Cloud Solutions</h3>
              <p className="text-gray-300 mb-4">
                Comprehensive cloud services to modernize your infrastructure, improve scalability, and reduce operational costs.
              </p>
              <ul className="text-gray-400 text-sm space-y-1">
                <li>• Cloud Migration & Strategy</li>
                <li>• AWS, Azure, GCP Services</li>
                <li>• DevOps & CI/CD Implementation</li>
              </ul>
            </div>
            
            <div className="bg-gradient-to-br from-purple-900/40 to-black/30 p-8 rounded-3xl border border-purple-500/30 hover:border-purple-500/50 transition-all duration-300 group">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Cybersecurity</h3>
              <p className="text-gray-300 mb-4">
                Protect your business with comprehensive security solutions and risk management strategies tailored to your industry.
              </p>
              <ul className="text-gray-400 text-sm space-y-1">
                <li>• Security Assessments</li>
                <li>• Penetration Testing</li>
                <li>• Compliance & Risk Management</li>
              </ul>
            </div>
            
            <div className="bg-gradient-to-br from-blue-900/40 to-black/30 p-8 rounded-3xl border border-blue-500/30 hover:border-blue-500/50 transition-all duration-300 group">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Data Analytics & AI</h3>
              <p className="text-gray-300 mb-4">
                Harness the power of data with advanced analytics and artificial intelligence solutions that drive informed decision-making.
              </p>
              <ul className="text-gray-400 text-sm space-y-1">
                <li>• Business Intelligence & Reporting</li>
                <li>• Machine Learning Implementation</li>
                <li>• Predictive Analytics</li>
              </ul>
            </div>
            
            <div className="bg-gradient-to-br from-purple-900/40 to-black/30 p-8 rounded-3xl border border-purple-500/30 hover:border-purple-500/50 transition-all duration-300 group">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">IT Infrastructure</h3>
              <p className="text-gray-300 mb-4">
                Build robust, scalable IT infrastructure that supports your business growth and ensures operational continuity.
              </p>
              <ul className="text-gray-400 text-sm space-y-1">
                <li>• Network Design & Implementation</li>
                <li>• Server Management & Virtualization</li>
                <li>• Disaster Recovery Planning</li>
              </ul>
            </div>
            
            <div className="bg-gradient-to-br from-blue-900/40 to-black/30 p-8 rounded-3xl border border-blue-500/30 hover:border-blue-500/50 transition-all duration-300 group">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Digital Transformation</h3>
              <p className="text-gray-300 mb-4">
                Strategic consulting and implementation services to modernize your business processes and technology landscape.
              </p>
              <ul className="text-gray-400 text-sm space-y-1">
                <li>• Process Automation</li>
                <li>• Legacy System Modernization</li>
                <li>• Change Management</li>
              </ul>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <Link 
              to="/services"
              className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-purple-500/25 inline-block"
            >
              View All SummitUSA Services
            </Link>
          </div>
        </div>
      </section>

      {/* Industries We Serve */}
      <section className="py-24 bg-gradient-to-br from-blue-900/20 via-purple-900/20 to-black">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Industries SummitUSA Serves
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              SummitUSA provides specialized technology solutions across diverse industries, delivering measurable results and competitive advantages
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center bg-gradient-to-br from-purple-900/30 to-blue-900/20 p-6 rounded-2xl border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300">
              <h3 className="text-lg font-bold text-white mb-3">Financial Services</h3>
              <p className="text-gray-300 text-sm">Banking, Insurance, Investment Management</p>
            </div>
            
            <div className="text-center bg-gradient-to-br from-blue-900/30 to-purple-900/20 p-6 rounded-2xl border border-blue-500/20 hover:border-blue-500/40 transition-all duration-300">
              <h3 className="text-lg font-bold text-white mb-3">Healthcare</h3>
              <p className="text-gray-300 text-sm">Hospitals, Clinics, Health Tech Companies</p>
            </div>
            
            <div className="text-center bg-gradient-to-br from-purple-900/30 to-blue-900/20 p-6 rounded-2xl border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300">
              <h3 className="text-lg font-bold text-white mb-3">Manufacturing</h3>
              <p className="text-gray-300 text-sm">Industrial Automation, Supply Chain</p>
            </div>
            
            <div className="text-center bg-gradient-to-br from-blue-900/30 to-purple-900/20 p-6 rounded-2xl border border-blue-500/20 hover:border-blue-500/40 transition-all duration-300">
              <h3 className="text-lg font-bold text-white mb-3">Retail & E-commerce</h3>
              <p className="text-gray-300 text-sm">Online Stores, Point-of-Sale Systems</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose SummitUSA */}
      <section className="py-24 bg-gradient-to-br from-black via-purple-900/10 to-blue-900/20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Why Choose SummitUSA?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              SummitUSA delivers unmatched value through our comprehensive approach to technology consulting and digital transformation
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-purple-900/40 to-black/30 p-8 rounded-3xl border border-purple-500/30">
              <h3 className="text-2xl font-bold text-white mb-4">Proven Expertise</h3>
              <p className="text-gray-300 leading-relaxed">
                SummitUSA brings over 50+ certified technology experts with an average of 12+ years industry experience across all major platforms and business domains.
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-blue-900/40 to-black/30 p-8 rounded-3xl border border-blue-500/30">
              <h3 className="text-2xl font-bold text-white mb-4">Measurable Results</h3>
              <p className="text-gray-300 leading-relaxed">
                SummitUSA delivers an average 300% ROI for clients with a 98% satisfaction rate and 95% client retention rate across all engagements.
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-purple-900/40 to-black/30 p-8 rounded-3xl border border-purple-500/30">
              <h3 className="text-2xl font-bold text-white mb-4">End-to-End Solutions</h3>
              <p className="text-gray-300 leading-relaxed">
                From strategy to implementation and ongoing support, SummitUSA provides comprehensive solutions that drive lasting competitive advantages.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-gradient-to-br from-purple-900/20 via-blue-900/20 to-black">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Client Success Stories
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              See how SummitUSA has transformed businesses across industries with our innovative technology solutions
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-purple-900/30 to-blue-900/20 p-8 rounded-3xl border border-purple-500/20">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full flex items-center justify-center mr-4">
                  <span className="text-white font-bold text-lg">M</span>
                </div>
                <div>
                  <h4 className="text-white font-bold">Michael Rodriguez</h4>
                  <p className="text-gray-400">CTO, TechCorp Industries</p>
                </div>
              </div>
              <p className="text-gray-300 leading-relaxed">
                "SummitUSA transformed our entire technology infrastructure. Their cloud migration strategy reduced our operational costs by 40% while improving system performance. The team's expertise and dedication were exceptional."
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-blue-900/30 to-purple-900/20 p-8 rounded-3xl border border-blue-500/20">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center mr-4">
                  <span className="text-white font-bold text-lg">S</span>
                </div>
                <div>
                  <h4 className="text-white font-bold">Sarah Chen</h4>
                  <p className="text-gray-400">CEO, InnovateHealth</p>
                </div>
              </div>
              <p className="text-gray-300 leading-relaxed">
                "Working with SummitUSA was a game-changer for our healthcare platform. Their AI-powered analytics solution increased our operational efficiency by 65% and improved patient outcomes significantly."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-purple-900 via-blue-900 to-purple-900">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Reach Your Summit?
          </h2>
          <p className="text-xl text-gray-200 mb-10 leading-relaxed">
            Join hundreds of successful businesses who have transformed their operations with SummitUSA. 
            Let's discuss how we can elevate your business to new heights of success.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Link 
              to="/contact"
              className="bg-white text-purple-900 px-12 py-4 rounded-full text-lg font-bold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-2xl whitespace-nowrap"
            >
              Get Started Today
            </Link>
            <Link 
              to="/about"
              className="border border-white text-white hover:bg-white hover:text-purple-900 px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 whitespace-nowrap"
            >
              Learn About SummitUSA
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
