'use client';

import { useEffect, useRef } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Services() {
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

  return (
    <div className="min-h-screen bg-black">
      <Header />
      
      {/* Hero Section */}
      <section className="relative pt-24 pb-16 bg-gradient-to-br from-orange-600 via-blue-900 to-black overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <img 
            src="https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
            alt="Code background" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center scroll-animate">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              SummitUSA 
              <br />
              <span className="bg-gradient-to-r from-orange-400 to-blue-400 bg-clip-text text-transparent mt-4 block">
                What we offer
              </span>
            </h1>
            <p className="text-sm sm:text-base md:text-lg text-gray-200 max-w-3xl mx-auto leading-relaxed">
              Comprehensive technology solutions and strategic consulting services designed to accelerate 
              your business growth and drive digital transformation in today's competitive marketplace.
            </p>
          </div>
        </div>
      </section>

      {/* Core Technology Services */}
      <section className="py-24 bg-gradient-to-br from-black via-orange-900/10 to-blue-900/20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16 scroll-animate">
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-6">
              Technology Solutions
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-gray-300 max-w-3xl mx-auto">
              SummitUSA delivers cutting-edge technology services that transform your business operations
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            <div className="bg-gradient-to-br from-orange-900/40 to-black/30 p-8 rounded-3xl border border-orange-500/30 hover:border-orange-500/50 transition-all duration-300 scroll-animate-left overflow-hidden relative">
              <div className="absolute top-4 right-4 opacity-20">
                <img 
                  src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" 
                  alt="Software Development" 
                  className="w-24 h-24 object-cover rounded-xl"
                />
              </div>
              <div className="w-16 h-16 bg-gradient-to-r from-orange-600 to-blue-600 rounded-2xl flex items-center justify-center mb-6 relative z-10">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                </svg>
              </div>
              <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-white mb-4 relative z-10">Software Development</h3>
              <p className="text-gray-300 mb-6 text-sm sm:text-base relative z-10">
                Custom software solutions built with modern technologies to meet your specific business requirements.
              </p>
              <ul className="space-y-2 text-gray-300 text-sm sm:text-base relative z-10">
                <li>• Web Application Development</li>
                <li>• Mobile App Development</li>
                <li>• API Development & Integration</li>
                <li>• Database Design & Optimization</li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-blue-900/40 to-black/30 p-8 rounded-3xl border border-blue-500/30 hover:border-blue-500/50 transition-all duration-300 scroll-animate overflow-hidden relative">
              <div className="absolute top-4 right-4 opacity-20">
                <img 
                  src="https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" 
                  alt="Cloud Solutions" 
                  className="w-24 h-24 object-cover rounded-xl"
                />
              </div>
              <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-orange-600 rounded-2xl flex items-center justify-center mb-6 relative z-10">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
                </svg>
              </div>
              <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-white mb-4 relative z-10">Cloud Solutions</h3>
              <p className="text-gray-300 mb-6 text-sm sm:text-base relative z-10">
                Comprehensive cloud services to modernize your infrastructure and improve scalability.
              </p>
              <ul className="space-y-2 text-gray-300 text-sm sm:text-base relative z-10">
                <li>• Cloud Migration & Strategy</li>
                <li>• AWS, Azure, GCP Services</li>
                <li>• DevOps & CI/CD Implementation</li>
                <li>• Cloud Security & Compliance</li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-orange-900/40 to-black/30 p-8 rounded-3xl border border-orange-500/30 hover:border-orange-500/50 transition-all duration-300 scroll-animate-right overflow-hidden relative">
              <div className="absolute top-4 right-4 opacity-20">
                <img 
                  src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" 
                  alt="Cybersecurity" 
                  className="w-24 h-24 object-cover rounded-xl"
                />
              </div>
              <div className="w-16 h-16 bg-gradient-to-r from-orange-600 to-blue-600 rounded-2xl flex items-center justify-center mb-6 relative z-10">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-white mb-4 relative z-10">Cybersecurity</h3>
              <p className="text-gray-300 mb-6 text-sm sm:text-base relative z-10">
                Protect your business with comprehensive security solutions and risk management strategies.
              </p>
              <ul className="space-y-2 text-gray-300 text-sm sm:text-base relative z-10">
                <li>• Security Assessments</li>
                <li>• Penetration Testing</li>
                <li>• Compliance & Risk Management</li>
                <li>• Incident Response Planning</li>
              </ul>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-blue-900/40 to-black/30 p-8 rounded-3xl border border-blue-500/30 hover:border-blue-500/50 transition-all duration-300 scroll-animate-left overflow-hidden relative">
              <div className="absolute top-4 right-4 opacity-20">
                <img 
                  src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" 
                  alt="Data Analytics" 
                  className="w-24 h-24 object-cover rounded-xl"
                />
              </div>
              <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-orange-600 rounded-2xl flex items-center justify-center mb-6 relative z-10">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-white mb-4 relative z-10">Data Analytics & AI</h3>
              <p className="text-gray-300 mb-6 text-sm sm:text-base relative z-10">
                Harness the power of data with advanced analytics and artificial intelligence solutions.
              </p>
              <ul className="space-y-2 text-gray-300 text-sm sm:text-base relative z-10">
                <li>• Business Intelligence & Reporting</li>
                <li>• Machine Learning Implementation</li>
                <li>• Data Warehousing Solutions</li>
                <li>• Predictive Analytics</li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-orange-900/40 to-black/30 p-8 rounded-3xl border border-orange-500/30 hover:border-orange-500/50 transition-all duration-300 scroll-animate-right overflow-hidden relative">
              <div className="absolute top-4 right-4 opacity-20">
                <img 
                  src="https://images.unsplash.com/photo-1483058712412-4245e9b90334?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" 
                  alt="IT Infrastructure" 
                  className="w-24 h-24 object-cover rounded-xl"
                />
              </div>
              <div className="w-16 h-16 bg-gradient-to-r from-orange-600 to-blue-600 rounded-2xl flex items-center justify-center mb-6 relative z-10">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4" />
                </svg>
              </div>
              <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-white mb-4 relative z-10">IT Infrastructure</h3>
              <p className="text-gray-300 mb-6 text-sm sm:text-base relative z-10">
                Build robust, scalable IT infrastructure that supports your business growth and operations.
              </p>
              <ul className="space-y-2 text-gray-300 text-sm sm:text-base relative z-10">
                <li>• Network Design & Implementation</li>
                <li>• Server Management & Virtualization</li>
                <li>• Disaster Recovery Planning</li>
                <li>• IT Support & Maintenance</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Industries We Serve */}
      <section className="py-24 bg-gradient-to-br from-blue-900/20 via-orange-900/20 to-black">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16 scroll-animate">
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-6">
              Industries We Serve
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-gray-300 max-w-3xl mx-auto">
              SummitUSA provides specialized solutions across diverse industries
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center bg-gradient-to-br from-orange-900/30 to-blue-900/20 p-8 rounded-2xl border border-orange-500/20 scroll-animate-scale">
              <h3 className="text-sm sm:text-base lg:text-lg font-bold text-white mb-3">Financial Services</h3>
              <p className="text-gray-300 text-xs sm:text-sm">Banking, Insurance, Investment Management</p>
            </div>
            
            <div className="text-center bg-gradient-to-br from-blue-900/30 to-orange-900/20 p-8 rounded-2xl border border-blue-500/20 scroll-animate-scale">
              <h3 className="text-sm sm:text-base lg:text-lg font-bold text-white mb-3">Healthcare</h3>
              <p className="text-gray-300 text-xs sm:text-sm">Hospitals, Clinics, Health Tech Companies</p>
            </div>
            
            <div className="text-center bg-gradient-to-br from-orange-900/30 to-blue-900/20 p-8 rounded-2xl border border-orange-500/20 scroll-animate-scale">
              <h3 className="text-sm sm:text-base lg:text-lg font-bold text-white mb-3">Manufacturing</h3>
              <p className="text-gray-300 text-xs sm:text-sm">Industrial Automation, Supply Chain</p>
            </div>
            
            <div className="text-center bg-gradient-to-br from-blue-900/30 to-orange-900/20 p-8 rounded-2xl border border-blue-500/20 scroll-animate-scale">
              <h3 className="text-sm sm:text-base lg:text-lg font-bold text-white mb-3">Retail & E-commerce</h3>
              <p className="text-gray-300 text-xs sm:text-sm">Online Stores, Point-of-Sale Systems</p>
            </div>
            
            <div className="text-center bg-gradient-to-br from-blue-900/30 to-orange-900/20 p-8 rounded-2xl border border-blue-500/20 scroll-animate-scale">
              <h3 className="text-sm sm:text-base lg:text-lg font-bold text-white mb-3">Education</h3>
              <p className="text-gray-300 text-xs sm:text-sm">Universities, K-12 Schools, EdTech</p>
            </div>
            
            <div className="text-center bg-gradient-to-br from-orange-900/30 to-blue-900/20 p-8 rounded-2xl border border-orange-500/20 scroll-animate-scale">
              <h3 className="text-sm sm:text-base lg:text-lg font-bold text-white mb-3">Government</h3>
              <p className="text-gray-300 text-xs sm:text-sm">Federal, State, and Local Agencies</p>
            </div>
            
            <div className="text-center bg-gradient-to-br from-blue-900/30 to-orange-900/20 p-8 rounded-2xl border border-blue-500/20 scroll-animate-scale">
              <h3 className="text-sm sm:text-base lg:text-lg font-bold text-white mb-3">Energy & Utilities</h3>
              <p className="text-gray-300 text-xs sm:text-sm">Power Generation, Smart Grid Solutions</p>
            </div>
            
            <div className="text-center bg-gradient-to-br from-orange-900/30 to-blue-900/20 p-8 rounded-2xl border border-orange-500/20 scroll-animate-scale">
              <h3 className="text-sm sm:text-base lg:text-lg font-bold text-white mb-3">Transportation</h3>
              <p className="text-gray-300 text-xs sm:text-sm">Logistics, Fleet Management, Transit</p>
            </div>
          </div>
        </div>
      </section>

      {/* SummitUSA Process */}
      <section className="py-24 bg-gradient-to-br from-orange-900/20 via-black to-blue-900/20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16 scroll-animate">
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-6">
              The SummitUSA Process
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-gray-300 max-w-3xl mx-auto">
              Our proven methodology ensures successful project delivery and measurable results
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center bg-gradient-to-br from-orange-900/30 to-blue-900/20 p-8 rounded-3xl border border-orange-500/20 scroll-animate-left">
              <div className="w-16 h-16 bg-gradient-to-r from-orange-600 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-white">1</span>
              </div>
              <h3 className="text-base sm:text-lg lg:text-xl font-bold text-white mb-4">Discovery & Analysis</h3>
              <p className="text-gray-300 leading-relaxed text-xs sm:text-sm">
                SummitUSA conducts comprehensive analysis of your business requirements, current technology stack, and strategic objectives.
              </p>
            </div>
            
            <div className="text-center bg-gradient-to-br from-blue-900/30 to-orange-900/20 p-8 rounded-3xl border border-blue-500/20 scroll-animate">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-white">2</span>
              </div>
              <h3 className="text-base sm:text-lg lg:text-xl font-bold text-white mb-4">Solution Design</h3>
              <p className="text-gray-300 leading-relaxed text-xs sm:text-sm">
                Our team designs customized technology solutions with clear architecture, timelines, and success metrics.
              </p>
            </div>
            
            <div className="text-center bg-gradient-to-br from-orange-900/30 to-blue-900/20 p-8 rounded-3xl border border-orange-500/20 scroll-animate">
              <div className="w-16 h-16 bg-gradient-to-r from-orange-600 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-white">3</span>
              </div>
              <h3 className="text-base sm:text-lg lg:text-xl font-bold text-white mb-4">Development & Implementation</h3>
              <p className="text-gray-300 leading-relaxed text-xs sm:text-sm">
                SummitUSA executes the solution with agile methodologies, ensuring quality and continuous stakeholder communication.
              </p>
            </div>
            
            <div className="text-center bg-gradient-to-br from-blue-900/30 to-orange-900/20 p-8 rounded-3xl border border-blue-500/20 scroll-animate-right">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-white">4</span>
              </div>
              <h3 className="text-base sm:text-lg lg:text-xl font-bold text-white mb-4">Support & Optimization</h3>
              <p className="text-gray-300 leading-relaxed text-xs sm:text-sm">
                We provide ongoing support, monitoring, and continuous optimization to ensure maximum ROI and system performance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Technologies */}
      <section className="py-24 bg-gradient-to-br from-black via-orange-900/10 to-blue-900/20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16 scroll-animate">
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-6">
              Technologies We Master
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-gray-300 max-w-3xl mx-auto">
              SummitUSA leverages cutting-edge technologies to build robust, scalable solutions
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
            <div className="text-center bg-gradient-to-br from-orange-900/20 to-blue-900/10 p-6 rounded-2xl border border-orange-500/10 scroll-animate-scale">
              <h4 className="text-white font-semibold mb-2 text-sm sm:text-base">React</h4>
              <p className="text-gray-400 text-xs">Frontend Development</p>
            </div>
            <div className="text-center bg-gradient-to-br from-blue-900/20 to-orange-900/10 p-6 rounded-2xl border border-blue-500/10 scroll-animate-scale">
              <h4 className="text-white font-semibold mb-2 text-sm sm:text-base">Node.js</h4>
              <p className="text-gray-400 text-xs">Backend Development</p>
            </div>
            <div className="text-center bg-gradient-to-br from-orange-900/20 to-blue-900/10 p-6 rounded-2xl border border-orange-500/10 scroll-animate-scale">
              <h4 className="text-white font-semibold mb-2 text-sm sm:text-base">Python</h4>
              <p className="text-gray-400 text-xs">AI & Data Science</p>
            </div>
            <div className="text-center bg-gradient-to-br from-blue-900/20 to-orange-900/10 p-6 rounded-2xl border border-blue-500/10 scroll-animate-scale">
              <h4 className="text-white font-semibold mb-2 text-sm sm:text-base">AWS</h4>
              <p className="text-gray-400 text-xs">Cloud Platform</p>
            </div>
            <div className="text-center bg-gradient-to-br from-orange-900/20 to-blue-900/10 p-6 rounded-2xl border border-orange-500/10 scroll-animate-scale">
              <h4 className="text-white font-semibold mb-2 text-sm sm:text-base">Docker</h4>
              <p className="text-gray-400 text-xs">Containerization</p>
            </div>
            <div className="text-center bg-gradient-to-br from-blue-900/20 to-orange-900/10 p-6 rounded-2xl border border-blue-500/10 scroll-animate-scale">
              <h4 className="text-white font-semibold mb-2 text-sm sm:text-base">Kubernetes</h4>
              <p className="text-gray-400 text-xs">Orchestration</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-orange-900 via-blue-900 to-orange-900 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <img 
            src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
            alt="Technology background" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="max-w-4xl mx-auto px-6 text-center scroll-animate-scale relative z-10">
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-6">
            Ready to Partner with SummitUSA?
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-gray-200 mb-10 leading-relaxed">
            Let's discuss how SummitUSA can transform your business with our comprehensive technology solutions. 
            Contact us today for a free consultation.
          </p>
          <button className="bg-white text-orange-900 px-12 py-4 rounded-full text-sm sm:text-base lg:text-lg font-bold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-2xl whitespace-nowrap cursor-pointer">
            Start Your Project
          </button>
        </div>
      </section>

      <Footer />
    </div>
  );
}
