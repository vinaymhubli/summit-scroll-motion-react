
'use client';

import { useEffect, useRef } from 'react';
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
      <section className="relative pt-20 sm:pt-24 pb-12 sm:pb-16 bg-gradient-to-br from-purple-900 via-blue-900 to-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center scroll-animate">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6">
              About 
              <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                SummitUSA
              </span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed px-4">
              SummitUSA is a leading technology consulting firm dedicated to helping businesses reach their peak 
              performance through innovative solutions, digital transformation, and strategic technology partnerships.
            </p>
          </div>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-black via-purple-900/10 to-blue-900/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="scroll-animate-left order-2 lg:order-1">
              <div className="text-center lg:text-left">
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4 sm:mb-6">The SummitUSA Story</h2>
                <div className="space-y-4 sm:space-y-6 text-gray-300 text-base sm:text-lg leading-relaxed">
                  <p>
                    Founded in 2015, SummitUSA emerged from a vision to bridge the gap between business ambitions 
                    and technological possibilities. Our founders, seasoned technology executives with decades of 
                    combined experience, recognized that many organizations struggle to harness the full potential 
                    of modern technology solutions.
                  </p>
                  <p>
                    Today, SummitUSA stands as a trusted technology partner to over 500 companies across various 
                    industries, from innovative startups to Fortune 500 enterprises. Our comprehensive approach 
                    combines strategic thinking, technical expertise, and deep industry knowledge to deliver 
                    solutions that create lasting competitive advantages.
                  </p>
                  <p className="mb-6 sm:mb-8">
                    At SummitUSA, every client engagement is an opportunity to push technological boundaries, 
                    challenge conventional thinking, and unlock new possibilities for growth and innovation.
                  </p>
                </div>
                
                <div className="grid grid-cols-2 gap-4 sm:gap-8 max-w-md mx-auto lg:mx-0">
                  <div className="text-center bg-gradient-to-br from-purple-900/30 to-blue-900/20 p-4 sm:p-6 rounded-2xl border border-purple-500/20">
                    <h3 className="text-2xl sm:text-3xl font-bold text-purple-400 mb-2">500+</h3>
                    <p className="text-gray-300 text-sm sm:text-base">Successful Projects</p>
                  </div>
                  <div className="text-center bg-gradient-to-br from-blue-900/30 to-purple-900/20 p-4 sm:p-6 rounded-2xl border border-blue-500/20">
                    <h3 className="text-2xl sm:text-3xl font-bold text-blue-400 mb-2">15+</h3>
                    <p className="text-gray-300 text-sm sm:text-base">Industries Served</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative scroll-animate-right order-1 lg:order-2">
              <img
                src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=600&h=400&fit=crop&crop=center"
                alt="SummitUSA Technology Team"
                className="rounded-2xl shadow-2xl object-cover w-full h-64 sm:h-80 lg:h-96 object-center"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission, Vision & Values */}
      <section className="py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-blue-900/20 via-purple-900/20 to-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12 sm:mb-16 scroll-animate">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-6">
              SummitUSA Mission & Values
            </h2>
            <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto px-4">
              Our core principles guide every decision and shape every client relationship at SummitUSA
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 mb-12 sm:mb-16">
            <div className="bg-gradient-to-br from-purple-900/50 to-black/40 p-6 sm:p-8 lg:p-12 rounded-3xl border border-purple-500/30 scroll-animate-left">
              <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4 sm:mb-6">Our Mission</h3>
              <p className="text-gray-300 text-base sm:text-lg leading-relaxed">
                SummitUSA empowers businesses to achieve extraordinary growth through innovative technology 
                solutions, strategic consulting, and unwavering commitment to excellence. We transform 
                complex challenges into competitive advantages, helping our clients reach new summits of success.
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-blue-900/50 to-black/40 p-6 sm:p-8 lg:p-12 rounded-3xl border border-blue-500/30 scroll-animate-right">
              <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4 sm:mb-6">Our Vision</h3>
              <p className="text-gray-300 text-base sm:text-lg leading-relaxed">
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
              <div key={index} className={`bg-gradient-to-br ${index % 2 === 0 ? 'from-purple-900/50' : 'from-blue-900/50'} to-black/40 p-6 sm:p-8 rounded-2xl border ${index % 2 === 0 ? 'border-purple-500/30' : 'border-blue-500/30'} scroll-animate-scale`}>
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4">{value.title}</h3>
                <p className="text-gray-300 leading-relaxed text-sm sm:text-base">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose SummitUSA */}
      <section className="py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-black via-purple-900/10 to-blue-900/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12 sm:mb-16 scroll-animate">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-6">
              Why Choose SummitUSA?
            </h2>
            <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto px-4">
              SummitUSA delivers unmatched value through our comprehensive approach to technology consulting
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
            <div className="bg-gradient-to-br from-purple-900/30 to-blue-900/20 p-6 sm:p-8 rounded-3xl border border-purple-500/20 scroll-animate-left">
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4">Proven Track Record</h3>
              <p className="text-gray-300 leading-relaxed mb-3 sm:mb-4 text-sm sm:text-base">
                SummitUSA has successfully delivered over 500 technology projects across 15+ industries, 
                with a 98% client satisfaction rate and measurable ROI for every engagement.
              </p>
              <ul className="space-y-1 sm:space-y-2 text-gray-300 text-sm sm:text-base">
                <li>• 500+ Successful Project Deliveries</li>
                <li>• 98% Client Satisfaction Rate</li>
                <li>• Average 300% ROI for Clients</li>
                <li>• 95% Client Retention Rate</li>
              </ul>
            </div>
            
            <div className="bg-gradient-to-br from-blue-900/30 to-purple-900/20 p-6 sm:p-8 rounded-3xl border border-blue-500/20 scroll-animate-right">
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4">Expert Team</h3>
              <p className="text-gray-300 leading-relaxed mb-3 sm:mb-4 text-sm sm:text-base">
                Our SummitUSA team consists of certified professionals, industry experts, and thought leaders 
                with deep expertise across all major technology platforms and business domains.
              </p>
              <ul className="space-y-1 sm:space-y-2 text-gray-300 text-sm sm:text-base">
                <li>• 50+ Certified Technology Experts</li>
                <li>• Average 12+ Years Industry Experience</li>
                <li>• Multi-Industry Domain Expertise</li>
                <li>• Continuous Professional Development</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
