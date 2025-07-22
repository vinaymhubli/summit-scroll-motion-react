import { useState, useEffect, useRef } from 'react';
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
      <section className="relative pt-24 pb-16 bg-gradient-to-br from-purple-900 via-blue-900 to-black">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center scroll-animate">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Our 
              <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                Services
              </span>
            </h1>
            <p className="text-lg text-gray-200 max-w-3xl mx-auto leading-relaxed">
              Comprehensive business solutions designed to accelerate your growth and maximize your potential
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Strategic Consulting */}
            <div className="bg-gradient-to-br from-purple-900/30 to-black p-8 rounded-2xl border border-purple-500/20 hover:border-purple-400/40 transition-all duration-300 hover:scale-105 scroll-animate-left">
              <div className="w-14 h-14 bg-gradient-to-r from-purple-600 to-blue-600 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-4a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">Strategic Consulting</h3>
              <p className="text-sm text-gray-300 mb-6 leading-relaxed">
                Navigate complex business challenges with our expert strategic guidance. We provide data-driven insights 
                and actionable recommendations to drive sustainable growth.
              </p>
              <ul className="space-y-2 text-sm text-gray-400">
                <li className="flex items-center">
                  <div className="w-1.5 h-1.5 bg-purple-400 rounded-full mr-3"></div>
                  Business Strategy Development
                </li>
                <li className="flex items-center">
                  <div className="w-1.5 h-1.5 bg-purple-400 rounded-full mr-3"></div>
                  Market Analysis & Research
                </li>
                <li className="flex items-center">
                  <div className="w-1.5 h-1.5 bg-purple-400 rounded-full mr-3"></div>
                  Competitive Intelligence
                </li>
              </ul>
            </div>

            {/* Digital Transformation */}
            <div className="bg-gradient-to-br from-blue-900/30 to-black p-8 rounded-2xl border border-blue-500/20 hover:border-blue-400/40 transition-all duration-300 hover:scale-105 scroll-animate">
              <div className="w-14 h-14 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">Digital Transformation</h3>
              <p className="text-sm text-gray-300 mb-6 leading-relaxed">
                Modernize your operations with cutting-edge technology solutions. We help you leverage digital 
                innovation to streamline processes and enhance customer experiences.
              </p>
              <ul className="space-y-2 text-sm text-gray-400">
                <li className="flex items-center">
                  <div className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-3"></div>
                  Technology Assessment
                </li>
                <li className="flex items-center">
                  <div className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-3"></div>
                  Process Automation
                </li>
                <li className="flex items-center">
                  <div className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-3"></div>
                  Cloud Migration
                </li>
              </ul>
            </div>

            {/* Business Intelligence */}
            <div className="bg-gradient-to-br from-purple-900/30 to-black p-8 rounded-2xl border border-purple-500/20 hover:border-purple-400/40 transition-all duration-300 hover:scale-105 scroll-animate-right">
              <div className="w-14 h-14 bg-gradient-to-r from-purple-600 to-blue-600 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">Business Intelligence</h3>
              <p className="text-sm text-gray-300 mb-6 leading-relaxed">
                Transform your data into actionable insights. Our BI solutions help you make informed decisions 
                with comprehensive analytics and real-time reporting capabilities.
              </p>
              <ul className="space-y-2 text-sm text-gray-400">
                <li className="flex items-center">
                  <div className="w-1.5 h-1.5 bg-purple-400 rounded-full mr-3"></div>
                  Data Analytics & Visualization
                </li>
                <li className="flex items-center">
                  <div className="w-1.5 h-1.5 bg-purple-400 rounded-full mr-3"></div>
                  Performance Dashboards
                </li>
                <li className="flex items-center">
                  <div className="w-1.5 h-1.5 bg-purple-400 rounded-full mr-3"></div>
                  Predictive Modeling
                </li>
              </ul>
            </div>

            {/* Operations Optimization */}
            <div className="bg-gradient-to-br from-blue-900/30 to-black p-8 rounded-2xl border border-blue-500/20 hover:border-blue-400/40 transition-all duration-300 hover:scale-105 scroll-animate-left">
              <div className="w-14 h-14 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">Operations Optimization</h3>
              <p className="text-sm text-gray-300 mb-6 leading-relaxed">
                Streamline your operations for maximum efficiency and cost reduction. We identify bottlenecks 
                and implement solutions that improve productivity and quality.
              </p>
              <ul className="space-y-2 text-sm text-gray-400">
                <li className="flex items-center">
                  <div className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-3"></div>
                  Process Improvement
                </li>
                <li className="flex items-center">
                  <div className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-3"></div>
                  Quality Management
                </li>
                <li className="flex items-center">
                  <div className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-3"></div>
                  Supply Chain Optimization
                </li>
              </ul>
            </div>

            {/* Change Management */}
            <div className="bg-gradient-to-br from-purple-900/30 to-black p-8 rounded-2xl border border-purple-500/20 hover:border-purple-400/40 transition-all duration-300 hover:scale-105 scroll-animate">
              <div className="w-14 h-14 bg-gradient-to-r from-purple-600 to-blue-600 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">Change Management</h3>
              <p className="text-sm text-gray-300 mb-6 leading-relaxed">
                Navigate organizational transformation with confidence. Our change management expertise ensures 
                smooth transitions and employee buy-in for lasting success.
              </p>
              <ul className="space-y-2 text-sm text-gray-400">
                <li className="flex items-center">
                  <div className="w-1.5 h-1.5 bg-purple-400 rounded-full mr-3"></div>
                  Organizational Assessment
                </li>
                <li className="flex items-center">
                  <div className="w-1.5 h-1.5 bg-purple-400 rounded-full mr-3"></div>
                  Training & Development
                </li>
                <li className="flex items-center">
                  <div className="w-1.5 h-1.5 bg-purple-400 rounded-full mr-3"></div>
                  Communication Strategy
                </li>
              </ul>
            </div>

            {/* Financial Advisory */}
            <div className="bg-gradient-to-br from-blue-900/30 to-black p-8 rounded-2xl border border-blue-500/20 hover:border-blue-400/40 transition-all duration-300 hover:scale-105 scroll-animate-right">
              <div className="w-14 h-14 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">Financial Advisory</h3>
              <p className="text-sm text-gray-300 mb-6 leading-relaxed">
                Optimize your financial performance with expert advisory services. We provide strategic financial 
                planning and risk management solutions tailored to your business goals.
              </p>
              <ul className="space-y-2 text-sm text-gray-400">
                <li className="flex items-center">
                  <div className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-3"></div>
                  Financial Planning & Analysis
                </li>
                <li className="flex items-center">
                  <div className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-3"></div>
                  Risk Assessment
                </li>
                <li className="flex items-center">
                  <div className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-3"></div>
                  Investment Strategy
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gradient-to-br from-purple-900/20 to-blue-900/20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16 scroll-animate">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Our Process</h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              A proven methodology that delivers consistent results
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center scroll-animate-scale">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-xl font-bold text-white">1</span>
              </div>
              <h3 className="text-lg font-semibold text-white mb-3">Discovery</h3>
              <p className="text-sm text-gray-300">
                We start by understanding your business, challenges, and objectives through comprehensive analysis.
              </p>
            </div>
            
            <div className="text-center scroll-animate-scale">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-xl font-bold text-white">2</span>
              </div>
              <h3 className="text-lg font-semibold text-white mb-3">Strategy</h3>
              <p className="text-sm text-gray-300">
                Develop customized solutions and strategic roadmaps aligned with your specific business goals.
              </p>
            </div>
            
            <div className="text-center scroll-animate-scale">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-xl font-bold text-white">3</span>
              </div>
              <h3 className="text-lg font-semibold text-white mb-3">Implementation</h3>
              <p className="text-sm text-gray-300">
                Execute the strategy with precision, ensuring seamless integration and minimal disruption.
              </p>
            </div>
            
            <div className="text-center scroll-animate-scale">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-xl font-bold text-white">4</span>
              </div>
              <h3 className="text-lg font-semibold text-white mb-3">Optimization</h3>
              <p className="text-sm text-gray-300">
                Monitor performance and continuously optimize to ensure sustained success and growth.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-900/30 to-blue-900/30">
        <div className="max-w-4xl mx-auto px-6 text-center scroll-animate">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-lg text-gray-200 mb-8 max-w-2xl mx-auto">
            Let's discuss how our services can help you achieve your goals and drive sustainable growth.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-8 py-3 rounded-lg font-medium transition-all duration-300 transform hover:scale-105">
              Get Free Consultation
            </button>
            <button className="border border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white px-8 py-3 rounded-lg font-medium transition-all duration-300">
              View Case Studies
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
