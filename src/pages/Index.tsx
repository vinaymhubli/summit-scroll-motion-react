
'use client';

import { useEffect, useRef } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Index = () => {
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
      el.classList.add('animate-in');
      observerRef.current?.observe(el);
    });

    return () => {
      observerRef.current?.disconnect();
    };
  }, []);

  return (
    <div className="min-h-screen bg-black text-white">
      <style jsx global>{`
        .scroll-animate,
        .scroll-animate-left,
        .scroll-animate-right,
        .scroll-animate-scale {
          opacity: 1;
          transform: none;
          transition: all 0.8s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .scroll-animate.animate-in,
        .scroll-animate-left.animate-in,
        .scroll-animate-right.animate-in,
        .scroll-animate-scale.animate-in {
          opacity: 1;
          transform: none;
        }

        .stagger-1 { transition-delay: 0.1s; }
        .stagger-2 { transition-delay: 0.2s; }
        .stagger-3 { transition-delay: 0.3s; }
        .stagger-4 { transition-delay: 0.4s; }
      `}</style>

      <Header />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden" style={{
        backgroundImage: `url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}>
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-purple-900/60 to-blue-900/40"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center py-32">
          <h1 className="text-6xl md:text-8xl font-bold text-white mb-8 leading-tight">
            Summit
            <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              USA
            </span>
          </h1>
          <p className="text-2xl md:text-3xl text-gray-200 mb-12 max-w-4xl mx-auto leading-relaxed font-light">
            Transforming Businesses Through Strategic Innovation and Peak Performance Solutions
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
            <button className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-12 py-4 rounded-full text-xl font-semibold hover:scale-105 transition-all duration-300 shadow-2xl hover:shadow-purple-500/50 whitespace-nowrap cursor-pointer">
              Get Started Today
            </button>
            <button className="border-2 border-white text-white px-12 py-4 rounded-full text-xl font-semibold hover:bg-white hover:text-black transition-all duration-300 whitespace-nowrap cursor-pointer">
              Learn More
            </button>
          </div>

          <div className="flex justify-center space-x-8 text-gray-300">
            <span className="hover:text-purple-400 transition-colors cursor-pointer text-lg">Facebook</span>
            <span className="hover:text-purple-400 transition-colors cursor-pointer text-lg">LinkedIn</span>
            <span className="hover:text-purple-400 transition-colors cursor-pointer text-lg">Twitter</span>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-32 bg-gradient-to-br from-black via-gray-900 to-purple-900/20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 text-center">
            <div className="space-y-4 scroll-animate-scale stagger-1">
              <div className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                500+
              </div>
              <p className="text-xl text-gray-300">Success Stories</p>
            </div>
            <div className="space-y-4 scroll-animate-scale stagger-2">
              <div className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                98%
              </div>
              <p className="text-xl text-gray-300">Client Satisfaction</p>
            </div>
            <div className="space-y-4 scroll-animate-scale stagger-3">
              <div className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                15+
              </div>
              <p className="text-xl text-gray-300">Years Experience</p>
            </div>
            <div className="space-y-4 scroll-animate-scale stagger-4">
              <div className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                24/7
              </div>
              <p className="text-xl text-gray-300">Expert Support</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-32 bg-gradient-to-br from-purple-900/20 via-blue-900/20 to-black">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20 scroll-animate">
            <h2 className="text-5xl md:text-6xl font-bold text-white mb-8">
              Why Choose SummitUSA?
            </h2>
            <p className="text-2xl text-gray-300 max-w-4xl mx-auto">
              We deliver exceptional results through proven methodologies and innovative approaches that transform businesses across every industry
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="bg-gradient-to-br from-purple-900/40 to-blue-900/30 p-12 rounded-3xl border border-purple-500/30 hover:border-purple-500/50 transition-all duration-300 cursor-pointer hover:transform hover:scale-105 scroll-animate-left stagger-1">
              <div
                className="w-full h-48 rounded-2xl mb-6 bg-cover bg-center"
                style={{
                  backgroundImage: `url('https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')`
                }}
              ></div>
              <h3 className="text-3xl font-bold text-white mb-6">Strategic Excellence</h3>
              <p className="text-lg text-gray-300 leading-relaxed mb-6">
                Our team of experts crafts tailored strategies that align with your business goals and market dynamics, ensuring sustainable growth and competitive advantage.
              </p>
              <ul className="text-gray-300 space-y-2">
                <li>• Custom strategy development</li>
                <li>• Market analysis & insights</li>
                <li>• Competitive positioning</li>
                <li>• Growth optimization</li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-blue-900/40 to-purple-900/30 p-12 rounded-3xl border border-blue-500/30 hover:border-blue-500/50 transition-all duration-300 cursor-pointer hover:transform hover:scale-105 scroll-animate stagger-2">
              <div
                className="w-full h-48 rounded-2xl mb-6 bg-cover bg-center"
                style={{
                  backgroundImage: `url('https://images.unsplash.com/photo-1518186233392-c232efbf2373?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2074&q=80')`
                }}
              ></div>
              <h3 className="text-3xl font-bold text-white mb-6">Innovation Focus</h3>
              <p className="text-lg text-gray-300 leading-relaxed mb-6">
                We leverage cutting-edge technology and innovative methodologies to keep your business ahead of the curve in an ever-evolving marketplace.
              </p>
              <ul className="text-gray-300 space-y-2">
                <li>• Digital transformation</li>
                <li>• Technology integration</li>
                <li>• Process automation</li>
                <li>• Future-ready solutions</li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-purple-900/40 to-blue-900/30 p-12 rounded-3xl border border-purple-500/30 hover:border-purple-500/50 transition-all duration-300 cursor-pointer hover:transform hover:scale-105 scroll-animate-right stagger-3">
              <div
                className="w-full h-48 rounded-2xl mb-6 bg-cover bg-center"
                style={{
                  backgroundImage: `url('https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2015&q=80')`
                }}
              ></div>
              <h3 className="text-3xl font-bold text-white mb-6">Proven Results</h3>
              <p className="text-lg text-gray-300 leading-relaxed mb-6">
                With a track record of success across diverse industries, we deliver measurable outcomes that drive real business transformation and growth.
              </p>
              <ul className="text-gray-300 space-y-2">
                <li>• Measurable ROI</li>
                <li>• Performance tracking</li>
                <li>• Continuous improvement</li>
                <li>• Long-term partnerships</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-32 bg-gradient-to-br from-black via-purple-900/10 to-blue-900/20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20 scroll-animate">
            <h2 className="text-5xl md:text-6xl font-bold text-white mb-8">
              What Our Clients Say
            </h2>
            <p className="text-2xl text-gray-300 max-w-3xl mx-auto">
              Hear from business leaders who've transformed their organizations with SummitUSA
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-gradient-to-br from-purple-900/30 to-blue-900/20 p-12 rounded-3xl border border-purple-500/20 scroll-animate-left">
              <div className="flex items-start space-x-6">
                <div
                  className="w-20 h-20 rounded-full bg-cover bg-center flex-shrink-0"
                  style={{
                    backgroundImage: `url('https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')`
                  }}
                ></div>
                <div>
                  <p className="text-lg text-gray-300 leading-relaxed mb-6">
                    "SummitUSA transformed our entire business model. Their strategic insights and implementation expertise helped us achieve 300% growth in just 18 months. Absolutely exceptional service."
                  </p>
                  <div>
                    <p className="text-white font-bold text-xl">Michael Rodriguez</p>
                    <p className="text-purple-400">CEO, TechVision Solutions</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-900/30 to-purple-900/20 p-12 rounded-3xl border border-blue-500/20 scroll-animate-right">
              <div className="flex items-start space-x-6">
                <div
                  className="w-20 h-20 rounded-full bg-cover bg-center flex-shrink-0"
                  style={{
                    backgroundImage: `url('https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80')`
                  }}
                ></div>
                <div>
                  <p className="text-lg text-gray-300 leading-relaxed mb-6">
                    "The level of expertise and dedication from the SummitUSA team is unmatched. They didn't just consult - they became true partners in our success journey."
                  </p>
                  <div>
                    <p className="text-white font-bold text-xl">Sarah Chen</p>
                    <p className="text-blue-400">Founder, InnovateNow</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-32 bg-gradient-to-br from-blue-900/20 via-purple-900/20 to-black">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20 scroll-animate">
            <h2 className="text-5xl md:text-6xl font-bold text-white mb-8">
              Industries We Serve
            </h2>
            <p className="text-2xl text-gray-300 max-w-4xl mx-auto">
              From startups to Fortune 500 companies, we deliver results across every sector
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center p-8 bg-gradient-to-br from-purple-900/30 to-blue-900/20 rounded-2xl border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300 cursor-pointer scroll-animate-scale stagger-1">
              <h3 className="text-xl font-bold text-white mb-4">Technology</h3>
              <p className="text-gray-400">Software, SaaS, AI/ML</p>
            </div>
            <div className="text-center p-8 bg-gradient-to-br from-blue-900/30 to-purple-900/20 rounded-2xl border border-blue-500/20 hover:border-blue-500/40 transition-all duration-300 cursor-pointer scroll-animate-scale stagger-2">
              <h3 className="text-xl font-bold text-white mb-4">Healthcare</h3>
              <p className="text-gray-400">Medical, Pharma, Biotech</p>
            </div>
            <div className="text-center p-8 bg-gradient-to-br from-purple-900/30 to-blue-900/20 rounded-2xl border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300 cursor-pointer scroll-animate-scale stagger-3">
              <h3 className="text-xl font-bold text-white mb-4">Finance</h3>
              <p className="text-gray-400">Banking, FinTech, Insurance</p>
            </div>
            <div className="text-center p-8 bg-gradient-to-br from-blue-900/30 to-purple-900/20 rounded-2xl border border-blue-500/20 hover:border-blue-500/40 transition-all duration-300 cursor-pointer scroll-animate-scale stagger-4">
              <h3 className="text-xl font-bold text-white mb-4">Manufacturing</h3>
              <p className="text-gray-400">Industrial, Automotive, Aerospace</p>
            </div>
            <div className="text-center p-8 bg-gradient-to-br from-purple-900/30 to-blue-900/20 rounded-2xl border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300 cursor-pointer scroll-animate-scale stagger-1">
              <h3 className="text-xl font-bold text-white mb-4">Retail</h3>
              <p className="text-gray-400">E-commerce, Consumer Goods</p>
            </div>
            <div className="text-center p-8 bg-gradient-to-br from-blue-900/30 to-purple-900/20 rounded-2xl border border-blue-500/20 hover:border-blue-500/40 transition-all duration-300 cursor-pointer scroll-animate-scale stagger-2">
              <h3 className="text-xl font-bold text-white mb-4">Energy</h3>
              <p className="text-gray-400">Renewable, Oil & Gas</p>
            </div>
            <div className="text-center p-8 bg-gradient-to-br from-purple-900/30 to-blue-900/20 rounded-2xl border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300 cursor-pointer scroll-animate-scale stagger-3">
              <h3 className="text-xl font-bold text-white mb-4">Real Estate</h3>
              <p className="text-gray-400">Commercial, Residential</p>
            </div>
            <div className="text-center p-8 bg-gradient-to-br from-blue-900/30 to-purple-900/20 rounded-2xl border border-blue-500/20 hover:border-blue-500/40 transition-all duration-300 cursor-pointer scroll-animate-scale stagger-4">
              <h3 className="text-xl font-bold text-white mb-4">Education</h3>
              <p className="text-gray-400">EdTech, Universities</p>
            </div>
          </div>
        </div>
      </section>

      {/* Location & Office Section */}
      <section className="py-32 bg-gradient-to-br from-purple-900/20 via-black to-blue-900/20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20 scroll-animate">
            <h2 className="text-5xl md:text-6xl font-bold text-white mb-8">
              Our Global Presence
            </h2>
            <p className="text-2xl text-gray-300 max-w-4xl mx-auto">
              Strategically located to serve clients worldwide with local expertise and global reach
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="bg-gradient-to-br from-purple-900/40 to-blue-900/30 p-8 rounded-3xl border border-purple-500/30 scroll-animate-left stagger-1">
                <h3 className="text-2xl font-bold text-white mb-4">New York Headquarters</h3>
                <p className="text-gray-300 mb-4">
                  1234 Summit Street, New York, NY 10001
                </p>
                <p className="text-gray-400">
                  Our flagship office in the heart of Manhattan, serving as the global command center for strategic operations and client partnerships.
                </p>
              </div>

              <div className="bg-gradient-to-br from-blue-900/40 to-purple-900/30 p-8 rounded-3xl border border-blue-500/30 scroll-animate-left stagger-2">
                <h3 className="text-2xl font-bold text-white mb-4">San Francisco Innovation Hub</h3>
                <p className="text-gray-300 mb-4">
                  567 Tech Valley Drive, San Francisco, CA 94105
                </p>
                <p className="text-gray-400">
                  Our West Coast innovation center focused on emerging technologies and digital transformation initiatives.
                </p>
              </div>

              <div className="bg-gradient-to-br from-purple-900/40 to-blue-900/30 p-8 rounded-3xl border border-purple-500/30 scroll-animate-left stagger-3">
                <h3 className="text-2xl font-bold text-white mb-4">London European Office</h3>
                <p className="text-gray-300 mb-4">
                  890 Canary Wharf, London, UK E14 5HQ
                </p>
                <p className="text-gray-400">
                  Our European headquarters providing strategic consulting services across the UK and continental Europe.
                </p>
              </div>
            </div>

            <div className="rounded-3xl overflow-hidden shadow-2xl scroll-animate-right">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.681139661165!2d-73.98731968459394!3d40.75889897932686!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25855c6480299%3A0x55194ec5a1ae072e!2sTimes+Square!5e0!3m2!1sen!2sus!4v1635959384843!5m2!1sen!2sus"
                width="100%"
                height="500"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 bg-gradient-to-r from-purple-900 via-blue-900 to-purple-900">
        <div className="max-w-5xl mx-auto px-6 text-center scroll-animate">
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-8">
            Ready to Summit Your Goals?
          </h2>
          <p className="text-2xl text-gray-200 mb-12 leading-relaxed">
            Join hundreds of successful businesses who have transformed their operations with SummitUSA. 
            Let's discuss how we can elevate your business to new heights and unlock unprecedented growth.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <button className="bg-white text-purple-900 px-16 py-6 rounded-full text-xl font-bold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-2xl whitespace-nowrap cursor-pointer">
              Start Your Journey
            </button>
            <button className="border-2 border-white text-white hover:bg-white hover:text-black px-16 py-6 rounded-full text-xl font-semibold transition-all duration-300 transform hover:scale-105 whitespace-nowrap cursor-pointer">
              Schedule Consultation
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
