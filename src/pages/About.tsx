import { useState, useEffect, useRef } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function About() {
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
              About 
              <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                SummitUSA
              </span>
            </h1>
            <p className="text-lg text-gray-200 max-w-3xl mx-auto leading-relaxed">
              Pioneering business transformation through strategic innovation and unparalleled expertise
            </p>
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-20 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="scroll-animate-left">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Our Story</h2>
              <p className="text-sm text-gray-300 mb-6 leading-relaxed">
                Founded in 2015, SummitUSA began with a simple yet powerful vision: to help businesses 
                reach their peak performance through strategic consulting and innovative solutions. 
                What started as a small team of passionate consultants has grown into a leading 
                consulting firm trusted by Fortune 500 companies and emerging startups alike.
              </p>
              <p className="text-sm text-gray-300 mb-6 leading-relaxed">
                Our journey has been marked by continuous learning, adaptation, and an unwavering 
                commitment to our clients' success. We've navigated economic uncertainties, 
                technological disruptions, and market transformations alongside our clients, 
                emerging stronger and more capable with each challenge.
              </p>
              <p className="text-sm text-gray-300 leading-relaxed">
                Today, we stand as a testament to the power of strategic thinking, innovative 
                problem-solving, and collaborative partnerships. Our success is measured not just 
                in numbers, but in the lasting impact we create for our clients and their communities.
              </p>
            </div>
            
            <div className="scroll-animate-right">
              <div className="bg-gradient-to-br from-purple-900/30 to-blue-900/30 p-8 rounded-3xl border border-purple-500/20">
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-white mb-2">500+</div>
                    <div className="text-xs text-gray-300">Projects Completed</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-white mb-2">150+</div>
                    <div className="text-xs text-gray-300">Expert Consultants</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-white mb-2">98%</div>
                    <div className="text-xs text-gray-300">Client Satisfaction</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-white mb-2">25+</div>
                    <div className="text-xs text-gray-300">Industries Served</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="py-20 bg-gradient-to-br from-purple-900/10 to-blue-900/10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center scroll-animate-left">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Mission</h3>
              <p className="text-sm text-gray-300 leading-relaxed">
                To empower businesses with strategic insights and innovative solutions that drive 
                sustainable growth, operational excellence, and competitive advantage in an 
                ever-evolving marketplace.
              </p>
            </div>
            
            <div className="text-center scroll-animate">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Vision</h3>
              <p className="text-sm text-gray-300 leading-relaxed">
                To be the world's most trusted consulting partner, recognized for our ability to 
                transform businesses and create lasting value through strategic innovation and 
                unparalleled expertise.
              </p>
            </div>
            
            <div className="text-center scroll-animate-right">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Values</h3>
              <p className="text-sm text-gray-300 leading-relaxed">
                Excellence, integrity, collaboration, and innovation guide everything we do. We 
                believe in building long-term partnerships based on trust, transparency, and 
                mutual success.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-gradient-to-b from-gray-900 to-black">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16 scroll-animate">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Meet Our Leadership</h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Experienced leaders driving innovation and excellence
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-purple-900/30 to-black p-8 rounded-2xl border border-purple-500/20 scroll-animate-left">
              <div className="w-20 h-20 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full mx-auto mb-6"></div>
              <h3 className="text-lg font-semibold text-white text-center mb-2">Sarah Johnson</h3>
              <p className="text-sm text-purple-400 text-center mb-4">Chief Executive Officer</p>
              <p className="text-xs text-gray-300 text-center leading-relaxed">
                With over 20 years of experience in strategic consulting, Sarah leads our vision 
                for transformative business solutions and sustainable growth.
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-blue-900/30 to-black p-8 rounded-2xl border border-blue-500/20 scroll-animate">
              <div className="w-20 h-20 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full mx-auto mb-6"></div>
              <h3 className="text-lg font-semibold text-white text-center mb-2">Michael Chen</h3>
              <p className="text-sm text-blue-400 text-center mb-4">Chief Technology Officer</p>
              <p className="text-xs text-gray-300 text-center leading-relaxed">
                Michael drives our digital transformation initiatives, bringing cutting-edge 
                technology solutions to solve complex business challenges.
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-purple-900/30 to-black p-8 rounded-2xl border border-purple-500/20 scroll-animate-right">
              <div className="w-20 h-20 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full mx-auto mb-6"></div>
              <h3 className="text-lg font-semibold text-white text-center mb-2">Emily Rodriguez</h3>
              <p className="text-sm text-purple-400 text-center mb-4">Head of Operations</p>
              <p className="text-xs text-gray-300 text-center leading-relaxed">
                Emily ensures operational excellence across all our client engagements, 
                maintaining the highest standards of service delivery.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Culture & Awards */}
      <section className="py-20 bg-gradient-to-br from-purple-900/20 to-blue-900/20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="scroll-animate-left">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Our Culture</h2>
              <p className="text-sm text-gray-300 mb-6 leading-relaxed">
                At SummitUSA, we foster a culture of continuous learning, innovation, and collaboration. 
                Our team thrives in an environment that encourages creative problem-solving, 
                professional growth, and meaningful client relationships.
              </p>
              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-purple-400 rounded-full mr-4"></div>
                  <span className="text-sm text-gray-300">Collaborative and inclusive workplace</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-blue-400 rounded-full mr-4"></div>
                  <span className="text-sm text-gray-300">Continuous learning and development</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-purple-400 rounded-full mr-4"></div>
                  <span className="text-sm text-gray-300">Work-life balance and flexibility</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-blue-400 rounded-full mr-4"></div>
                  <span className="text-sm text-gray-300">Recognition and career advancement</span>
                </div>
              </div>
            </div>
            
            <div className="scroll-animate-right">
              <h3 className="text-xl font-bold text-white mb-8">Awards & Recognition</h3>
              <div className="space-y-6">
                <div className="bg-gradient-to-br from-purple-900/30 to-black p-6 rounded-2xl border border-purple-500/20">
                  <h4 className="text-sm font-semibold text-white mb-2">Best Consulting Firm 2023</h4>
                  <p className="text-xs text-gray-300">Business Excellence Awards</p>
                </div>
                <div className="bg-gradient-to-br from-blue-900/30 to-black p-6 rounded-2xl border border-blue-500/20">
                  <h4 className="text-sm font-semibold text-white mb-2">Top Workplace 2023</h4>
                  <p className="text-xs text-gray-300">Employee Satisfaction Survey</p>
                </div>
                <div className="bg-gradient-to-br from-purple-900/30 to-black p-6 rounded-2xl border border-purple-500/20">
                  <h4 className="text-sm font-semibold text-white mb-2">Innovation Leader</h4>
                  <p className="text-xs text-gray-300">Technology Excellence Council</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-900/30 to-blue-900/30">
        <div className="max-w-4xl mx-auto px-6 text-center scroll-animate">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Join Our Journey
          </h2>
          <p className="text-lg text-gray-200 mb-8 max-w-2xl mx-auto">
            Ready to be part of something extraordinary? Explore career opportunities or partner with us.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-8 py-3 rounded-lg font-medium transition-all duration-300 transform hover:scale-105">
              View Careers
            </button>
            <button className="border border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white px-8 py-3 rounded-lg font-medium transition-all duration-300">
              Become a Partner
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
