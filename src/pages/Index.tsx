import { useState, useEffect, useRef } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { TypeAnimation } from 'react-type-animation';
import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';

export default function Index() {
  const [isMobile, setIsMobile] = useState(false);
  const textRef = useRef(null);

  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkIsMobile();
    window.addEventListener('resize', checkIsMobile);

    return () => {
      window.removeEventListener('resize', checkIsMobile);
    };
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
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
      observer.observe(el);
    });

    return () => {
      observer.disconnect();
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

  const particlesInit = async (engine: any) => {
    await loadFull(engine);
  };

  return (
    <div className="min-h-screen bg-black">
      <Header />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-900 via-blue-900 to-black">
        <Particles
          id="tsparticles"
          init={particlesInit}
          options={{
            fullScreen: {
              enable: false,
            },
            particles: {
              number: {
                value: isMobile ? 30 : 50,
                density: {
                  enable: true,
                  area: 800,
                },
              },
              color: {
                value: ["#793DFF", "#598BFF"],
              },
              shape: {
                type: "circle",
              },
              opacity: {
                value: 0.5,
              },
              size: {
                value: { min: 1, max: 3 },
              },
              links: {
                enable: true,
                distance: 150,
                color: "#808080",
                opacity: 0.4,
                width: 1,
              },
              move: {
                enable: true,
                speed: 1,
                direction: "none",
                random: false,
                straight: false,
                outModes: {
                  default: "bounce",
                },
                attract: {
                  enable: false,
                  distance: 200,
                  rotate: {
                    x: 600,
                    y: 1200,
                  },
                },
              },
            },
            interactivity: {
              detectsOn: "canvas",
              events: {
                onHover: {
                  enable: true,
                  mode: "repulse",
                },
                onClick: {
                  enable: true,
                  mode: "push",
                },
                resize: true,
              },
              modes: {
                repulse: {
                  distance: 100,
                  duration: 0.4,
                },
                push: {
                  quantity: 4,
                },
              },
            },
            retina_detect: true,
          }}
        />
        
        <div className="relative z-10 text-center px-6 max-w-6xl mx-auto">
          <div className="scroll-animate">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              <span ref={textRef} className="text-white">
                <TypeAnimation
                  sequence={[
                    'Strategic Consulting',
                    1000,
                    'Digital Transformation',
                    1000,
                    'Business Intelligence',
                    1000
                  ]}
                  wrapper="span"
                  cursor={true}
                  repeat={Infinity}
                  style={{ fontSize: '1em', display: 'inline-block' }}
                />
              </span>
              <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                SummitUSA
              </span>
            </h1>
            <p className="text-lg md:text-xl text-gray-200 max-w-4xl mx-auto mb-8 leading-relaxed">
              Transform your business with our cutting-edge consulting services. 
              We deliver strategic solutions that drive growth, innovation, and lasting success.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-all duration-300 transform hover:scale-105">
                Get Started
              </button>
              <button className="border border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white px-6 py-3 rounded-lg font-medium transition-all duration-300">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gradient-to-r from-purple-900/20 to-blue-900/20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center scroll-animate">
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">500+</div>
              <div className="text-sm text-gray-300">Projects Completed</div>
            </div>
            <div className="text-center scroll-animate">
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">98%</div>
              <div className="text-sm text-gray-300">Client Satisfaction</div>
            </div>
            <div className="text-center scroll-animate">
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">150+</div>
              <div className="text-sm text-gray-300">Expert Consultants</div>
            </div>
            <div className="text-center scroll-animate">
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">24/7</div>
              <div className="text-sm text-gray-300">Support Available</div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-20 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16 scroll-animate">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Our Expertise
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Comprehensive solutions tailored to your business needs
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            
            <div className="bg-gradient-to-br from-purple-900/30 to-black p-8 rounded-2xl border border-purple-500/20 hover:border-purple-400/40 transition-all duration-300 hover:scale-105 scroll-animate-left">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-4a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-white mb-3">Strategic Consulting</h3>
              <p className="text-sm text-gray-300 leading-relaxed">
                Navigate complex business challenges with our expert strategic guidance and data-driven insights.
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-blue-900/30 to-black p-8 rounded-2xl border border-blue-500/20 hover:border-blue-400/40 transition-all duration-300 hover:scale-105 scroll-animate">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-white mb-3">Digital Transformation</h3>
              <p className="text-sm text-gray-300 leading-relaxed">
                Modernize your operations with cutting-edge technology solutions and digital innovation strategies.
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-purple-900/30 to-black p-8 rounded-2xl border border-purple-500/20 hover:border-purple-400/40 transition-all duration-300 hover:scale-105 scroll-animate-right">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-white mb-3">Performance Analytics</h3>
              <p className="text-sm text-gray-300 leading-relaxed">
                Optimize your business performance with comprehensive analytics and actionable intelligence.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-gradient-to-br from-purple-900/10 to-blue-900/10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16 scroll-animate">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Why Choose SummitUSA?
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Experience the difference that comes with working alongside industry leaders
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="scroll-animate-left">
              <div className="space-y-8">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">Proven Track Record</h3>
                    <p className="text-sm text-gray-300">Over 500 successful projects delivered across various industries with measurable results.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">Innovation Focus</h3>
                    <p className="text-sm text-gray-300">Cutting-edge solutions that leverage the latest technologies and industry best practices.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">Expert Team</h3>
                    <p className="text-sm text-gray-300">150+ certified consultants with deep industry expertise and proven methodologies.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="scroll-animate-right">
              <div className="bg-gradient-to-br from-purple-900/20 to-blue-900/20 p-8 rounded-3xl border border-purple-500/20">
                <h3 className="text-xl font-bold text-white mb-6">Ready to Get Started?</h3>
                <p className="text-sm text-gray-300 mb-6">
                  Join hundreds of satisfied clients who have transformed their businesses with our expertise.
                </p>
                <button className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-all duration-300 transform hover:scale-105">
                  Schedule Free Consultation
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
