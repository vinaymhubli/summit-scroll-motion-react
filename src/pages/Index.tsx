
'use client';

import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Home() {
  const observerRef = useRef<IntersectionObserver | null>(null);
  const [typedText, setTypedText] = useState('');
  const fullText = 'Summit USA';

  useEffect(() => {
    let currentIndex = 0;
    const typingInterval = setInterval(() => {
      if (currentIndex <= fullText.length) {
        setTypedText(fullText.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(typingInterval);
      }
    }, 200);

    return () => clearInterval(typingInterval);
  }, []);

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

  return (
    <div className="min-h-screen bg-black text-white">
      <style dangerouslySetInnerHTML={{
        __html: `
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

        .stagger-1 { transition-delay: 0.1s; }
        .stagger-2 { transition-delay: 0.2s; }
        .stagger-3 { transition-delay: 0.3s; }
        .stagger-4 { transition-delay: 0.4s; }
        .stagger-5 { transition-delay: 0.5s; }
        .stagger-6 { transition-delay: 0.6s; }

        .hero-zoom {
          animation: zoomIn 20s ease-out infinite alternate;
        }

        @keyframes zoomIn {
          0% {
            transform: scale(1);
          }
          100% {
            transform: scale(1.1);
          }
        }

        .typing-cursor::after {
          content: '|';
          animation: blink 1s infinite;
          color: #fb923c;
        }

        @keyframes blink {
          0%, 50% { opacity: 1; }
          51%, 100% { opacity: 0; }
        }
        `
      }} />

      <Header />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 hero-zoom"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
          }}
        ></div>
        <div className="absolute inset-0 bg-black/60"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center py-32">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-8 leading-tight">
            <span className="typing-cursor">
              <span className="text-white">{typedText.slice(0, 6)}</span>
              <span className="bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">
                {typedText.slice(6)}
              </span>
            </span>
          </h1>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-200 mb-12 max-w-4xl mx-auto leading-relaxed font-light">
            The Future of IT Starts with Predictable, Scalable Support
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
            <Link to="/contact" className="bg-gradient-to-r from-orange-500 to-blue-900 text-white px-8 sm:px-12 py-4 rounded-full text-base sm:text-lg lg:text-xl font-semibold hover:scale-105 transition-all duration-300 shadow-2xl hover:shadow-orange-500/50 whitespace-nowrap cursor-pointer">
              Get Started Today
            </Link>
            <Link to="/about" className="border-2 border-white text-white px-8 sm:px-12 py-4 rounded-full text-base sm:text-lg lg:text-xl font-semibold hover:bg-white hover:text-black transition-all duration-300 whitespace-nowrap cursor-pointer">
              Learn More
            </Link>
          </div>
        </div>
      </section>


      {/* Features Section */}
      <section className="py-20 sm:py-32 bg-gradient-to-br from-orange-900/20 via-blue-900/20 to-black">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20 scroll-animate">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-8">
              Why Choose SummitUSA?
            </h2>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-300 max-w-4xl mx-auto">
              We deliver cutting-edge IT solutions through proven technologies and innovative approaches that transform businesses across every industry
            </p>
          </div>

        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 sm:py-32 bg-gradient-to-br from-black via-orange-900/10 to-blue-900/20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20 scroll-animate">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-8">
              What Our Clients Say
            </h2>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-300 max-w-3xl mx-auto">
              Hear from business leaders who've transformed their organizations with SummitUSA
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-gradient-to-br from-orange-900/30 to-blue-900/20 p-8 sm:p-12 rounded-3xl border border-orange-500/20 scroll-animate-left">
              <div className="flex items-start space-x-6">
                <div
                  className="w-20 h-20 rounded-full bg-cover bg-center flex-shrink-0"
                  style={{
                    backgroundImage: `url('https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')`
                  }}
                ></div>
                <div>
                  <p className="text-sm sm:text-base lg:text-lg text-gray-300 leading-relaxed mb-6">
                    "SummitUSA transformed our entire business model. Their strategic insights and implementation expertise helped us achieve 300% growth in just 18 months. Absolutely exceptional service."
                  </p>
                  <div>
                    <p className="text-white font-bold text-base sm:text-lg lg:text-xl">Michael Rodriguez</p>
                    <p className="text-orange-400 text-xs sm:text-sm lg:text-base">CEO, TechVision Solutions</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-900/30 to-orange-900/20 p-8 sm:p-12 rounded-3xl border border-blue-500/20 scroll-animate-right">
              <div className="flex items-start space-x-6">
                <div
                  className="w-20 h-20 rounded-full bg-cover bg-center flex-shrink-0"
                  style={{
                    backgroundImage: `url('https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80')`
                  }}
                ></div>
                <div>
                  <p className="text-sm sm:text-base lg:text-lg text-gray-300 leading-relaxed mb-6">
                    "The level of expertise and dedication from the SummitUSA team is unmatched. They didn't just consult - they became true partners in our success journey."
                  </p>
                  <div>
                    <p className="text-white font-bold text-base sm:text-lg lg:text-xl">Sarah Chen</p>
                    <p className="text-blue-400 text-xs sm:text-sm lg:text-base">Founder, InnovateNow</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* IT Confusion and Costs Section */}
      <section className="py-12 bg-gradient-to-br from-orange-900/20 via-black to-blue-900/20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-8 scroll-animate">
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4">
              Eliminate IT Confusion and Costs
            </h2>
            <p className="text-sm sm:text-base lg:text-lg text-gray-300 max-w-3xl mx-auto">
              Stop downtime and faulty IT before they damage your organization.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-center">
            {/* Left side - Image */}
            <div className="scroll-animate-left">
              <div
                className="w-full h-96 rounded-2xl bg-cover bg-center shadow-xl"
                style={{
                  backgroundImage: `url('/lovable-uploads/f212d01b-3ea0-4e98-87ad-f3b35877416c.png')`
                }}
              ></div>
            </div>

            {/* Right side - Statistics */}
            <div className="space-y-2 scroll-animate-right">
              <div className="bg-gradient-to-br from-orange-500/20 to-blue-900/30 p-2 rounded-xl border border-orange-500/30">
                <div className="text-sm sm:text-base md:text-lg lg:text-xl font-bold bg-gradient-to-r from-orange-400 to-blue-900 bg-clip-text text-transparent mb-1">
                  76%
                </div>
                <p className="text-xs lg:text-sm text-gray-300 leading-relaxed">
                  of organizations experience downtime that leads to data loss.
                </p>
              </div>

              <div className="bg-gradient-to-br from-blue-900/30 to-orange-500/20 p-2 rounded-xl border border-blue-500/30">
                <div className="text-sm sm:text-base md:text-lg lg:text-xl font-bold bg-gradient-to-r from-orange-400 to-blue-900 bg-clip-text text-transparent mb-1">
                  $137-$427
                </div>
                <p className="text-xs lg:text-sm text-gray-300 leading-relaxed">
                  The costs of IT downtime for SMBs range per minute.
                </p>
              </div>

              <div className="bg-gradient-to-br from-orange-500/20 to-blue-900/30 p-2 rounded-xl border border-orange-500/30">
                <div className="text-sm sm:text-base md:text-lg lg:text-xl font-bold bg-gradient-to-r from-orange-400 to-blue-900 bg-clip-text text-transparent mb-1">
                  60%
                </div>
                <p className="text-xs lg:text-sm text-gray-300 leading-relaxed">
                  Over 60% of outages cost more than $100,000.
                </p>
              </div>

              <div className="bg-gradient-to-br from-blue-900/30 to-orange-500/20 p-2 rounded-xl border border-blue-500/30">
                <div className="text-sm sm:text-base md:text-lg lg:text-xl font-bold bg-gradient-to-r from-orange-400 to-blue-900 bg-clip-text text-transparent mb-1">
                  $8,600
                </div>
                <p className="text-xs lg:text-sm text-gray-300 leading-relaxed">
                  The average internal IT employee costs organizations per month.
                </p>
              </div>

              <div className="bg-gradient-to-br from-orange-500/20 to-blue-900/30 p-2 rounded-xl border border-orange-500/30">
                <div className="text-sm sm:text-base md:text-lg lg:text-xl font-bold bg-gradient-to-r from-orange-400 to-blue-900 bg-clip-text text-transparent mb-1">
                  $250
                </div>
                <p className="text-xs lg:text-sm text-gray-300 leading-relaxed">
                  Total IT budgets average per employee per month in Small/Medium Business.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-20 sm:py-32 bg-gradient-to-br from-blue-900/20 via-orange-900/20 to-black">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20 scroll-animate">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-8">
              IT Industries We Serve
            </h2>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-300 max-w-4xl mx-auto">
              Comprehensive IT support and digital transformation across all technology sectors
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            <div className="text-center p-6 sm:p-8 bg-gradient-to-br from-orange-900/30 to-blue-900/20 rounded-2xl border border-orange-500/20 hover:border-orange-500/40 transition-all duration-300 cursor-pointer scroll-animate-scale stagger-1">
              <h3 className="text-sm sm:text-base lg:text-lg font-bold text-white mb-4">Cloud Computing</h3>
              <p className="text-xs sm:text-sm lg:text-base text-gray-400">AWS, Azure, Google Cloud</p>
            </div>
            <div className="text-center p-6 sm:p-8 bg-gradient-to-br from-blue-900/30 to-orange-900/20 rounded-2xl border border-blue-500/20 hover:border-blue-500/40 transition-all duration-300 cursor-pointer scroll-animate-scale stagger-2">
              <h3 className="text-sm sm:text-base lg:text-lg font-bold text-white mb-4">Cybersecurity</h3>
              <p className="text-xs sm:text-sm lg:text-base text-gray-400">Network Security, Data Protection</p>
            </div>
            <div className="text-center p-6 sm:p-8 bg-gradient-to-br from-orange-900/30 to-blue-900/20 rounded-2xl border border-orange-500/20 hover:border-orange-500/40 transition-all duration-300 cursor-pointer scroll-animate-scale stagger-3">
              <h3 className="text-sm sm:text-base lg:text-lg font-bold text-white mb-4">Software Development</h3>
              <p className="text-xs sm:text-sm lg:text-base text-gray-400">Custom Apps, Web Development</p>
            </div>
            <div className="text-center p-6 sm:p-8 bg-gradient-to-br from-blue-900/30 to-orange-900/20 rounded-2xl border border-blue-500/20 hover:border-blue-500/40 transition-all duration-300 cursor-pointer scroll-animate-scale stagger-4">
              <h3 className="text-sm sm:text-base lg:text-lg font-bold text-white mb-4">Network Infrastructure</h3>
              <p className="text-xs sm:text-sm lg:text-base text-gray-400">LAN/WAN, VPN, Wireless</p>
            </div>
            <div className="text-center p-6 sm:p-8 bg-gradient-to-br from-orange-900/30 to-blue-900/20 rounded-2xl border border-orange-500/20 hover:border-orange-500/40 transition-all duration-300 cursor-pointer scroll-animate-scale stagger-1">
              <h3 className="text-sm sm:text-base lg:text-lg font-bold text-white mb-4">Data Analytics</h3>
              <p className="text-xs sm:text-sm lg:text-base text-gray-400">Big Data, Business Intelligence</p>
            </div>
            <div className="text-center p-6 sm:p-8 bg-gradient-to-br from-blue-900/30 to-orange-900/20 rounded-2xl border border-blue-500/20 hover:border-blue-500/40 transition-all duration-300 cursor-pointer scroll-animate-scale stagger-2">
              <h3 className="text-sm sm:text-base lg:text-lg font-bold text-white mb-4">AI & Machine Learning</h3>
              <p className="text-xs sm:text-sm lg:text-base text-gray-400">Automation, Predictive Analytics</p>
            </div>
            <div className="text-center p-6 sm:p-8 bg-gradient-to-br from-orange-900/30 to-blue-900/20 rounded-2xl border border-orange-500/20 hover:border-orange-500/40 transition-all duration-300 cursor-pointer scroll-animate-scale stagger-3">
              <h3 className="text-sm sm:text-base lg:text-lg font-bold text-white mb-4">DevOps</h3>
              <p className="text-xs sm:text-sm lg:text-base text-gray-400">CI/CD, Container Management</p>
            </div>
            <div className="text-center p-6 sm:p-8 bg-gradient-to-br from-orange-900/30 to-blue-900/20 rounded-2xl border border-orange-500/20 hover:border-orange-500/40 transition-all duration-300 cursor-pointer scroll-animate-scale stagger-4">
              <h3 className="text-sm sm:text-base lg:text-lg font-bold text-white mb-4">Database Management</h3>
              <p className="text-xs sm:text-sm lg:text-base text-gray-400">SQL, NoSQL, Data Migration</p>
            </div>
            <div className="text-center p-6 sm:p-8 bg-gradient-to-br from-orange-900/30 to-blue-900/20 rounded-2xl border border-orange-500/20 hover:border-orange-500/40 transition-all duration-300 cursor-pointer scroll-animate-scale stagger-5">
              <h3 className="text-sm sm:text-base lg:text-lg font-bold text-white mb-4">Mobile Development</h3>
              <p className="text-xs sm:text-sm lg:text-base text-gray-400">iOS, Android, Cross-Platform</p>
            </div>
            <div className="text-center p-6 sm:p-8 bg-gradient-to-br from-orange-900/30 to-blue-900/20 rounded-2xl border border-orange-500/20 hover:border-orange-500/40 transition-all duration-300 cursor-pointer scroll-animate-scale stagger-6">
              <h3 className="text-sm sm:text-base lg:text-lg font-bold text-white mb-4">IT Consulting</h3>
              <p className="text-xs sm:text-sm lg:text-base text-gray-400">Digital Strategy, Tech Advisory</p>
            </div>
            <div className="text-center p-6 sm:p-8 bg-gradient-to-br from-orange-900/30 to-blue-900/20 rounded-2xl border border-orange-500/20 hover:border-orange-500/40 transition-all duration-300 cursor-pointer scroll-animate-scale stagger-1">
              <h3 className="text-sm sm:text-base lg:text-lg font-bold text-white mb-4">Backup & Recovery</h3>
              <p className="text-xs sm:text-sm lg:text-base text-gray-400">Disaster Recovery, Data Backup</p>
            </div>
            <div className="text-center p-6 sm:p-8 bg-gradient-to-br from-blue-900/30 to-orange-900/20 rounded-2xl border border-blue-500/20 hover:border-blue-500/40 transition-all duration-300 cursor-pointer scroll-animate-scale stagger-2">
              <h3 className="text-sm sm:text-base lg:text-lg font-bold text-white mb-4">IT Support</h3>
              <p className="text-xs sm:text-sm lg:text-base text-gray-400">24/7 Help Desk, Remote Support</p>
            </div>
          </div>
        </div>
      </section>

      {/* IT Subscription Program Section */}
      <section className="py-16 sm:py-24 bg-gradient-to-br from-blue-900/20 via-black to-orange-900/20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left Container - Content */}
            <div className="scroll-animate">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-6">
                Why an IT Subscription Program Beats Managed IT Services​
              </h2>
              <div className="space-y-4 text-sm sm:text-base lg:text-lg text-gray-300 leading-relaxed">
                <p>
                  You're hit with another unexpected IT expense for a problem that should've been avoided. A recurring tech issue is back, frustrating your team and slowing down productivity. You find yourself reaching out to IT support far more often than you'd like.
                </p>
                <p>
                  At SummitUSA, we believe there's a better way. Our IT Subscription Program takes the guesswork and surprise costs out of managing your technology. With one flat monthly rate, we handle everything—from system reliability and proactive cybersecurity to long-term IT planning. Let SummitUSA take care of your IT, so you can stay focused on growing your business.
                </p>
              </div>
            </div>
            
            {/* Right Container - Image */}
            <div className="scroll-animate-right">
              <div className="relative rounded-2xl overflow-hidden border border-blue-500/20 hover:border-blue-500/40 transition-all duration-300">
                <img 
                  src="/lovable-uploads/0e76b27d-7bd6-4859-aa82-4757d8b011c4.png" 
                  alt="IT Subscription Program vs Managed IT Services" 
                  className="w-full h-[32rem] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Intentional Change Section */}
      <section className="py-16 sm:py-24 bg-gradient-to-br from-orange-900/20 via-black to-blue-900/20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left Container - Image */}
            <div className="scroll-animate-left">
              <div className="relative rounded-2xl overflow-hidden border border-orange-500/20 hover:border-orange-500/40 transition-all duration-300">
                <img 
                  src="/lovable-uploads/73d8cd9a-9ac5-48a9-9259-5f8a806841bd.png" 
                  alt="Intentional Change is Our Difference" 
                  className="w-full h-[32rem] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>
            </div>
            
            {/* Right Container - Content */}
            <div className="scroll-animate-right">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-6">
                Intentional Change is Our Difference
              </h2>
              <div className="space-y-4 text-sm sm:text-base lg:text-lg text-gray-300 leading-relaxed">
                <p>
                  Total Care Cloud, our IT Subscription Program, takes a long-term view of your technology. As a Professional Technology Organization (PTO), we intentionally plan change with goals, objectives and outcomes laid out to measure progress. Our program typically looks 48 months ahead for planning, whereas typical MSP service plans only look ahead 12 to 18 months.
                </p>
                <p>
                  Our goal is to understand your needs, so we can align them with your network capabilities to continually improve your IT experience without major capital expenditures. Here at SummitUSA, we don't simply "take the keys" to your network, we sit down with you to make sure your goals and objectives are supported by your IT infrastructure.
                </p>
                <p>
                  While a "take the keys" approach may address your current needs, it doesn't allow for scalability. With a SummitUSA IT Subscription Program, your IT support is built around enabling business growth and achieving your objectives, so your network is continuously evolving to meet your ever-changing needs.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* IT Services Options Section */}
      <section className="py-16 sm:py-24 bg-gradient-to-br from-blue-900/20 via-black to-orange-900/20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16 scroll-animate">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-8">
              Robust IT Services Options from SummitUSA
            </h2>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-300 max-w-4xl mx-auto">
              No two organizations are exactly alike. SummitUSA wants you to reach your business goals, and choosing the right level of IT support is key. We offer several IT subscription solutions to choose from so that you pay for the IT services that you need – no more and no less.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-orange-900/40 to-blue-900/30 p-6 sm:p-8 rounded-3xl border border-orange-500/30 hover:border-orange-500/50 transition-all duration-300 cursor-pointer hover:transform hover:scale-105 scroll-animate-left stagger-1">
              <div
                className="w-full h-32 rounded-2xl mb-6 bg-cover bg-center"
                style={{
                  backgroundImage: `url('/lovable-uploads/266fa4d5-08fa-4738-a871-4d1494b331c4.png')`
                }}
              ></div>
              <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-white mb-4">TOTAL CARE CLOUD</h3>
              <p className="text-sm sm:text-base lg:text-lg text-gray-300 leading-relaxed mb-4">
                Our most comprehensive solution includes our security framework, on-site support, backup and disaster recovery, long-term tech strategy, all the hardware your organization needs and more.
              </p>
            </div>

            <div className="bg-gradient-to-br from-blue-900/40 to-orange-900/30 p-6 sm:p-8 rounded-3xl border border-blue-500/30 hover:border-blue-500/50 transition-all duration-300 cursor-pointer hover:transform hover:scale-105 scroll-animate stagger-2">
              <div
                className="w-full h-32 rounded-2xl mb-6 bg-cover bg-center"
                style={{
                  backgroundImage: `url('/lovable-uploads/209d7ecf-83ca-4ac9-83f8-2d8eb14ee518.png')`
                }}
              ></div>
              <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-white mb-4">TOTAL CARE</h3>
              <p className="text-sm sm:text-base lg:text-lg text-gray-300 leading-relaxed mb-4">
                Comprehensive IT management and support services designed to keep your business running smoothly with proactive monitoring and maintenance.
              </p>
            </div>

            <div className="bg-gradient-to-br from-orange-900/40 to-blue-900/30 p-6 sm:p-8 rounded-3xl border border-orange-500/30 hover:border-orange-500/50 transition-all duration-300 cursor-pointer hover:transform hover:scale-105 scroll-animate-right stagger-3">
              <div
                className="w-full h-32 rounded-2xl mb-6 bg-cover bg-center"
                style={{
                  backgroundImage: `url('/lovable-uploads/1767dbfd-faff-487c-9581-18becaa9b4ce.png')`
                }}
              ></div>
              <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-white mb-4">INFRASTRUCTURE AS A SERVICE</h3>
              <p className="text-sm sm:text-base lg:text-lg text-gray-300 leading-relaxed mb-4">
                Scalable cloud infrastructure solutions that grow with your business, providing the foundation for your digital transformation.
              </p>
            </div>


          </div>
        </div>
      </section>

      {/* Comparison Section */}
      <section className="py-16 sm:py-24 bg-gradient-to-br from-orange-900/20 via-black to-blue-900/20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16 scroll-animate">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-8">
              Choose an IT Subscription Program, Not Just a Service
            </h2>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-300 max-w-4xl mx-auto">
              Don't rely on partial solutions for complex technology needs. Here's how managed IT services stack up to our IT Subscription Program.
            </p>
          </div>

          <div className="overflow-x-auto scroll-animate">
            <div className="min-w-full bg-gradient-to-br from-blue-900/30 to-orange-900/20 rounded-3xl border border-blue-500/20 p-8">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-gray-600">
                    <th className="text-left py-4 px-6 text-lg font-bold text-white">Comparison</th>
                    <th className="text-center py-4 px-6 text-lg font-bold text-orange-400">Managed IT Services</th>
                    <th className="text-center py-4 px-6 text-lg font-bold text-blue-400">IT Subscription Program</th>
                  </tr>
                </thead>
                <tbody className="text-gray-300">
                  <tr className="border-b border-gray-700">
                    <td className="py-4 px-6 font-semibold">Approach to Problems</td>
                    <td className="py-4 px-6 text-center">Reacts to problems with your tech</td>
                    <td className="py-4 px-6 text-center">Uses proactive planning to reduce or eliminate tech problems</td>
                  </tr>
                  <tr className="border-b border-gray-700">
                    <td className="py-4 px-6 font-semibold">Planning Horizon</td>
                    <td className="py-4 px-6 text-center">Focuses on the here and now</td>
                    <td className="py-4 px-6 text-center">Collaborates with you to plan for your goals and objectives 3-4 years in the future</td>
                  </tr>
                  <tr>
                    <td className="py-4 px-6 font-semibold">Billing Structure</td>
                    <td className="py-4 px-6 text-center">Bills you for additional projects and upgrades to your IT system</td>
                    <td className="py-4 px-6 text-center">No surprise bills - you can expect one predictable IT cost</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Location & Office Section */}
      <section className="py-20 sm:py-32 bg-gradient-to-br from-orange-900/20 via-black to-blue-900/20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20 scroll-animate">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-8">
              Our Global Presence
            </h2>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-300 max-w-4xl mx-auto">
              Strategically located to serve clients worldwide with local expertise and global reach
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">


              <div className="bg-gradient-to-br from-orange-900/40 to-blue-900/30 p-6 sm:p-8 rounded-3xl border border-orange-500/30 scroll-animate-left stagger-3">
                <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-white mb-4">Summit Services Corporation</h3>
                <div className="text-xs sm:text-sm lg:text-base text-gray-300 mb-4 space-y-1">
                  <p>20511 61st Place West</p>
                  <p>Lynnwood, WA 98036 (U.S.A)</p>
                  <p>Phone: 1-206-841-0601 Extension 101</p>
                  <p>Fax: 1-206-339-4838</p>
                  <p>SIP: 101@Sip.SummitUSA.com</p>
                </div>
                <p className="text-xs sm:text-sm lg:text-base text-gray-400">
                  Our headquarters providing comprehensive IT services and technology solutions across the Pacific Northwest and beyond.
                </p>
              </div>
            </div>

            <div className="rounded-3xl overflow-hidden shadow-2xl scroll-animate-right">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.681139661165!2d-73.98731968459394!3d40.75889797932686!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25855c6480299%3A0x55194ec5a1ae072e!2sTimes+Square!5e0!3m2!1sen!2sus!4v1635959384843!5m2!1sen!2sus"
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
      <section className="py-20 sm:py-32 bg-gradient-to-r from-orange-500 via-blue-900 to-orange-600">
        <div className="max-w-5xl mx-auto px-6 text-center scroll-animate">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-8">
            Ready to Summit Your Goals?
          </h2>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-200 mb-12 leading-relaxed">
            Join hundreds of successful businesses who have transformed their operations with SummitUSA. 
            Let's discuss how we can elevate your business to new heights and unlock unprecedented growth.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Link to="/contact" className="bg-white text-orange-900 px-12 sm:px-16 py-6 rounded-full text-base sm:text-lg lg:text-xl font-bold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-2xl whitespace-nowrap cursor-pointer">
              Start Your Journey
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
