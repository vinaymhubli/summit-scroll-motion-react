'use client';

import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
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
      <section className="relative pt-20 sm:pt-24 pb-12 sm:pb-16 bg-gradient-to-br from-orange-600 via-blue-900 to-black overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <img 
            src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
            alt="Technology workspace background" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
          <div className="text-center scroll-animate">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-6">
              About 
              <br />
              <span className="bg-gradient-to-r from-orange-400 to-blue-400 bg-clip-text text-transparent mt-4 block">
                SummitUSA
              </span>
            </h1>
            <p className="text-sm sm:text-base md:text-lg text-gray-200 max-w-3xl mx-auto leading-relaxed px-4">
              SummitUSA is a leading technology consulting firm dedicated to helping businesses reach their peak 
              performance through innovative solutions, digital transformation, and strategic technology partnerships.
            </p>
          </div>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-black via-orange-900/10 to-blue-900/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="scroll-animate-left order-2 lg:order-1">
              <div className="text-center lg:text-left">
                <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white mb-4 sm:mb-6">Stop Losing Time and Money on Patchy IT Support</h2>
                <div className="space-y-4 sm:space-y-6 text-gray-300 text-sm sm:text-base leading-relaxed">
                  <p>
                    At SummitUSA, we don't just fix IT issues—we partner with you to build a long-term technology strategy, 
                    all for one flat monthly fee. Our commitment to transparent pricing, personalized service, and reliable 
                    expertise sets us apart from the typical IT providers.
                  </p>
                  <p>
                    Most managed IT services lock you into confusing contracts and "either-or" situations. Either you pay 
                    extra for unexpected issues, or you're left scrambling to handle them yourself. SummitUSA does things 
                    differently. Our all-inclusive IT Subscription Program covers everything—no hidden fees, no surprises, 
                    just dependable support when you need it.
                  </p>
                </div>
                
                <div className="mt-8">
                  <Link 
                    to="/contact" 
                    className="inline-block bg-gradient-to-r from-orange-600 to-blue-600 hover:from-orange-700 hover:to-blue-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-orange-500/25"
                  >
                    Get IT Services you can count on
                  </Link>
                </div>
              </div>
            </div>
            <div className="relative scroll-animate-right order-1 lg:order-2">
              <img
                src="/lovable-uploads/1767dbfd-faff-487c-9581-18becaa9b4ce.png"
                alt="SummitUSA Technology Team"
                className="rounded-2xl shadow-2xl object-cover w-full h-64 sm:h-80 lg:h-96 object-center"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission, Vision & Values */}
      <section className="py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-blue-900/20 via-orange-900/20 to-black relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <img 
            src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
            alt="Professional workspace background" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
          <div className="text-center mb-12 sm:mb-16 scroll-animate">
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4 sm:mb-6">
              SummitUSA Mission & Values
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-gray-300 max-w-3xl mx-auto px-4">
              Our core principles guide every decision and shape every client relationship at SummitUSA
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 mb-12 sm:mb-16">
            <div className="bg-gradient-to-br from-orange-900/40 to-blue-900/30 p-6 sm:p-8 lg:p-12 rounded-3xl border border-orange-500/30 scroll-animate-left overflow-hidden relative">
              <div className="absolute top-4 right-4 opacity-20">
                <img 
                  src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80" 
                  alt="Mission" 
                  className="w-20 h-20 object-cover rounded-xl"
                />
              </div>
              <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-white mb-4 sm:mb-6 relative z-10">Our Mission</h3>
              <p className="text-gray-300 text-sm sm:text-base leading-relaxed relative z-10">
                SummitUSA empowers businesses to achieve extraordinary growth through innovative technology 
                solutions, strategic consulting, and unwavering commitment to excellence. We transform 
                complex challenges into competitive advantages, helping our clients reach new summits of success.
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-blue-900/40 to-orange-900/30 p-6 sm:p-8 lg:p-12 rounded-3xl border border-blue-500/30 scroll-animate-right overflow-hidden relative">
              <div className="absolute top-4 right-4 opacity-20">
                <img 
                  src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80" 
                  alt="Vision" 
                  className="w-20 h-20 object-cover rounded-xl"
                />
              </div>
              <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-white mb-4 sm:mb-6 relative z-10">Our Vision</h3>
              <p className="text-gray-300 text-sm sm:text-base leading-relaxed relative z-10">
                To be the premier technology consulting partner that organizations worldwide trust to navigate 
                digital transformation, drive innovation, and achieve sustainable competitive advantages in 
                an increasingly complex technological landscape.
              </p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {[
              {
                title: "Innovation Excellence",
                description: "SummitUSA pursues excellence in every project, setting the highest standards for innovation, quality, and client satisfaction across all our technology solutions."
              },
              {
                title: "Trusted Partnership", 
                description: "Trust is the foundation of every SummitUSA relationship. We operate with complete transparency, honesty, and ethical practices in all our business dealings and client partnerships."
              },
              {
                title: "Continuous Innovation",
                description: "SummitUSA embraces change and continuously evolves our methodologies to stay ahead of technology trends and deliver cutting-edge solutions to our clients."
              },
              {
                title: "Client-Centric Approach",
                description: "We view our clients as strategic partners, working collaboratively to understand their unique challenges and co-create solutions that drive lasting business success."
              },
              {
                title: "Measurable Results",
                description: "SummitUSA is committed to delivering measurable outcomes that create real business value and sustainable competitive advantages for every client we serve."
              },
              {
                title: "Perpetual Growth",
                description: "We believe in continuous learning and development, both for the SummitUSA team and our clients, fostering an environment of perpetual growth and technological advancement."
              }
            ].map((value, index) => (
              <div key={index} className={`${index % 2 === 0 ? 'bg-gradient-to-br from-orange-900/30 to-blue-900/20' : 'bg-gradient-to-br from-blue-900/30 to-orange-900/20'} p-6 sm:p-8 rounded-2xl border ${index % 2 === 0 ? 'border-orange-500/20' : 'border-blue-500/20'} scroll-animate-scale`}>
                <h3 className="text-base sm:text-lg lg:text-xl font-bold text-white mb-3 sm:mb-4">{value.title}</h3>
                <p className="text-gray-300 leading-relaxed text-xs sm:text-sm">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How SummitUSA Supports Your Business */}
      <section className="py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-orange-900/20 via-black to-blue-900/20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <img 
            src="https://images.unsplash.com/photo-1483058712412-4245e9b90334?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
            alt="Technology office background" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="scroll-animate-left">
              <div className="text-center lg:text-left">
                <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white mb-4 sm:mb-6">How SummitUSA Supports Your Business</h2>
                <div className="space-y-4 sm:space-y-6 text-gray-300 text-sm sm:text-base leading-relaxed">
                  <p>
                    Say goodbye to hardware headaches. At SummitUSA, we ensure your team always has the devices they need 
                    with regular upgrades every three years so you're never stuck with outdated technology.
                  </p>
                  <p>
                    But we don't stop at hardware. We proactively maintain your systems, monitor for cybersecurity threats, 
                    and train your staff on best practices to stay secure. From multi-cloud architecture to reliable backups, 
                    disaster recovery, and remote work software, we've got every angle covered.
                  </p>
                  <p>
                    With decades of experience delivering trusted IT services, SummitUSA provides around-the-clock support 
                    and long-term strategic guidance to help your business grow with confidence.
                  </p>
                </div>
                
                <div className="mt-8">
                  <Link 
                    to="/contact" 
                    className="inline-block bg-gradient-to-r from-orange-600 to-blue-600 hover:from-orange-700 hover:to-blue-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-orange-500/25"
                  >
                    Get The IT Support you Deserve
                  </Link>
                </div>
              </div>
            </div>
            <div className="relative scroll-animate-right">
              <img
                src="/lovable-uploads/266fa4d5-08fa-4738-a871-4d1494b331c4.png"
                alt="SummitUSA IT Support Services"
                className="rounded-2xl shadow-2xl object-cover w-full h-64 sm:h-80 lg:h-96 object-center"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-blue-900/20 via-orange-900/20 to-black relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <img 
            src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
            alt="Professional workspace background" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
          <div className="text-center mb-12 sm:mb-16 scroll-animate">
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4 sm:mb-6">
              What Our Clients Say
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-gray-300 max-w-3xl mx-auto px-4">
              Don't just take our word for it - hear from businesses who trust SummitUSA for their IT needs
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            <div className="bg-gradient-to-br from-orange-900/40 to-blue-900/30 p-6 sm:p-8 rounded-3xl border border-orange-500/30 scroll-animate-left overflow-hidden relative">
              <div className="absolute top-4 right-4 opacity-20">
                <img 
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80" 
                  alt="Client testimonial" 
                  className="w-16 h-16 object-cover rounded-full"
                />
              </div>
              <div className="relative z-10">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-orange-400 fill-current" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-gray-300 text-sm sm:text-base leading-relaxed mb-4">
                  "SummitUSA transformed our IT infrastructure completely. No more downtime, no more surprises. 
                  Their flat-rate pricing gives us peace of mind and predictable budgeting."
                </p>
                <div>
                  <p className="text-white font-semibold text-sm sm:text-base">Sarah Mitchell</p>
                  <p className="text-orange-400 text-xs sm:text-sm">CEO, TechFlow Solutions</p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-900/40 to-orange-900/30 p-6 sm:p-8 rounded-3xl border border-blue-500/30 scroll-animate-scale overflow-hidden relative">
              <div className="absolute top-4 right-4 opacity-20">
                <img 
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80" 
                  alt="Client testimonial" 
                  className="w-16 h-16 object-cover rounded-full"
                />
              </div>
              <div className="relative z-10">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-blue-400 fill-current" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-gray-300 text-sm sm:text-base leading-relaxed mb-4">
                  "The proactive monitoring and 24/7 support from SummitUSA has been a game-changer. 
                  They catch issues before they become problems. Best IT investment we've made."
                </p>
                <div>
                  <p className="text-white font-semibold text-sm sm:text-base">Michael Rodriguez</p>
                  <p className="text-blue-400 text-xs sm:text-sm">Operations Director, GreenSpace Industries</p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-orange-900/40 to-blue-900/30 p-6 sm:p-8 rounded-3xl border border-orange-500/30 scroll-animate-right overflow-hidden relative md:col-span-2 lg:col-span-1">
              <div className="absolute top-4 right-4 opacity-20">
                <img 
                  src="https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80" 
                  alt="Client testimonial" 
                  className="w-16 h-16 object-cover rounded-full"
                />
              </div>
              <div className="relative z-10">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-orange-400 fill-current" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-gray-300 text-sm sm:text-base leading-relaxed mb-4">
                  "SummitUSA's all-inclusive approach means we never worry about unexpected IT costs. 
                  Their team feels like an extension of our company - always there when we need them."
                </p>
                <div>
                  <p className="text-white font-semibold text-sm sm:text-base">Jennifer Adams</p>
                  <p className="text-orange-400 text-xs sm:text-sm">COO, Sterling Financial Group</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
