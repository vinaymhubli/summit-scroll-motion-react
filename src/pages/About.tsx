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
      <section className="relative pt-24 pb-16 bg-gradient-to-br from-purple-900 via-blue-900 to-black">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center scroll-animate">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              About 
              <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                SummitUSA
              </span>
            </h1>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
              SummitUSA is a leading technology consulting firm dedicated to helping businesses reach their peak 
              performance through innovative solutions, digital transformation, and strategic technology partnerships.
            </p>
          </div>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-24 bg-gradient-to-br from-black via-purple-900/10 to-blue-900/20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="scroll-animate-left">
              <div className="text-center">
                <h2 className="text-4xl font-bold text-white mb-6">The SummitUSA Story</h2>
                <p className="text-gray-300 text-lg leading-relaxed mb-6">
                  Founded in 2015, SummitUSA emerged from a vision to bridge the gap between business ambitions 
                  and technological possibilities. Our founders, seasoned technology executives with decades of 
                  combined experience, recognized that many organizations struggle to harness the full potential 
                  of modern technology solutions.
                </p>
                <p className="text-gray-300 text-lg leading-relaxed mb-6">
                  Today, SummitUSA stands as a trusted technology partner to over 500 companies across various 
                  industries, from innovative startups to Fortune 500 enterprises. Our comprehensive approach 
                  combines strategic thinking, technical expertise, and deep industry knowledge to deliver 
                  solutions that create lasting competitive advantages.
                </p>
                <p className="text-gray-300 text-lg leading-relaxed mb-8">
                  At SummitUSA, every client engagement is an opportunity to push technological boundaries, 
                  challenge conventional thinking, and unlock new possibilities for growth and innovation.
                </p>
                
                <div className="grid grid-cols-2 gap-8">
                  <div className="text-center bg-gradient-to-br from-purple-900/30 to-blue-900/20 p-6 rounded-2xl border border-purple-500/20">
                    <h3 className="text-3xl font-bold text-purple-400 mb-2">500+</h3>
                    <p className="text-gray-300">Successful Projects</p>
                  </div>
                  <div className="text-center bg-gradient-to-br from-blue-900/30 to-purple-900/20 p-6 rounded-2xl border border-blue-500/20">
                    <h3 className="text-3xl font-bold text-blue-400 mb-2">15+</h3>
                    <p className="text-gray-300">Industries Served</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative scroll-animate-right">
              <img
                src="https://readdy.ai/api/search-image?query=Modern%20corporate%20technology%20team%20meeting%20in%20sleek%20boardroom%20with%20city%20skyline%20view%2C%20professional%20business%20people%20collaborating%20around%20conference%20table%20with%20laptops%20and%20displays%2C%20dark%20elegant%20office%20interior%20with%20purple%20accent%20lighting%2C%20contemporary%20business%20environment%2C%20high-end%20corporate%20photography%20style&width=600&height=800&seq=summit-team-1&orientation=portrait"
                alt="SummitUSA Technology Team"
                className="rounded-2xl shadow-2xl object-cover w-full h-96 lg:h-full object-top"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-purple-900/30 to-blue-900/10 rounded-2xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission, Vision & Values */}
      <section className="py-24 bg-gradient-to-br from-blue-900/20 via-purple-900/20 to-black">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16 scroll-animate">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              SummitUSA Mission & Values
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our core principles guide every decision and shape every client relationship at SummitUSA
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            <div className="bg-gradient-to-br from-purple-900/50 to-black/40 p-12 rounded-3xl border border-purple-500/30 scroll-animate-left">
              <h3 className="text-3xl font-bold text-white mb-6">Our Mission</h3>
              <p className="text-gray-300 text-lg leading-relaxed">
                SummitUSA empowers businesses to achieve extraordinary growth through innovative technology 
                solutions, strategic consulting, and unwavering commitment to excellence. We transform 
                complex challenges into competitive advantages, helping our clients reach new summits of success.
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-blue-900/50 to-black/40 p-12 rounded-3xl border border-blue-500/30 scroll-animate-right">
              <h3 className="text-3xl font-bold text-white mb-6">Our Vision</h3>
              <p className="text-gray-300 text-lg leading-relaxed">
                To be the premier technology consulting partner that organizations worldwide trust to navigate 
                digital transformation, drive innovation, and achieve sustainable competitive advantages in 
                an increasingly complex technological landscape.
              </p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-purple-900/50 to-black/40 p-8 rounded-2xl border border-purple-500/30 scroll-animate-scale">
              <h3 className="text-2xl font-bold text-white mb-4">Innovation Excellence</h3>
              <p className="text-gray-300 leading-relaxed">
                SummitUSA pursues excellence in every project, setting the highest standards for innovation, 
                quality, and client satisfaction across all our technology solutions.
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-blue-900/50 to-black/40 p-8 rounded-2xl border border-blue-500/30 scroll-animate-scale">
              <h3 className="text-2xl font-bold text-white mb-4">Trusted Partnership</h3>
              <p className="text-gray-300 leading-relaxed">
                Trust is the foundation of every SummitUSA relationship. We operate with complete transparency, 
                honesty, and ethical practices in all our business dealings and client partnerships.
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-purple-900/50 to-black/40 p-8 rounded-2xl border border-purple-500/30 scroll-animate-scale">
              <h3 className="text-2xl font-bold text-white mb-4">Continuous Innovation</h3>
              <p className="text-gray-300 leading-relaxed">
                SummitUSA embraces change and continuously evolves our methodologies to stay ahead of 
                technology trends and deliver cutting-edge solutions to our clients.
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-blue-900/50 to-black/40 p-8 rounded-2xl border border-blue-500/30 scroll-animate-scale">
              <h3 className="text-2xl font-bold text-white mb-4">Client-Centric Approach</h3>
              <p className="text-gray-300 leading-relaxed">
                We view our clients as strategic partners, working collaboratively to understand their unique 
                challenges and co-create solutions that drive lasting business success.
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-purple-900/50 to-black/40 p-8 rounded-2xl border border-purple-500/30 scroll-animate-scale">
              <h3 className="text-2xl font-bold text-white mb-4">Measurable Results</h3>
              <p className="text-gray-300 leading-relaxed">
                SummitUSA is committed to delivering measurable outcomes that create real business value and 
                sustainable competitive advantages for every client we serve.
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-blue-900/50 to-black/40 p-8 rounded-2xl border border-blue-500/30 scroll-animate-scale">
              <h3 className="text-2xl font-bold text-white mb-4">Perpetual Growth</h3>
              <p className="text-gray-300 leading-relaxed">
                We believe in continuous learning and development, both for the SummitUSA team and our clients, 
                fostering an environment of perpetual growth and technological advancement.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-24 bg-gradient-to-br from-black via-purple-900/10 to-blue-900/20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16 scroll-animate">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              SummitUSA Leadership Team
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Meet the visionary leaders driving SummitUSA's mission and technological innovation forward
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center bg-gradient-to-br from-purple-900/30 to-blue-900/20 p-8 rounded-3xl border border-purple-500/20 scroll-animate-left">
              <img
                src="https://readdy.ai/api/search-image?query=Professional%20CEO%20executive%20portrait%2C%20confident%20business%20leader%20in%20dark%20suit%2C%20corporate%20headshot%20with%20purple%20accent%20lighting%2C%20modern%20office%20background%2C%20high-end%20professional%20photography%2C%20sophisticated%20business%20portrait&width=400&height=500&seq=ceo-portrait-summit-1&orientation=portrait"
                alt="Sarah Mitchell - CEO of SummitUSA"
                className="w-64 h-80 object-cover object-top rounded-2xl mx-auto mb-6 shadow-2xl"
              />
              <h3 className="text-2xl font-bold text-white mb-2">Sarah Mitchell</h3>
              <p className="text-purple-400 font-semibold mb-4">Chief Executive Officer</p>
              <p className="text-gray-300 leading-relaxed">
                With over 20 years of experience in technology consulting and business transformation, 
                Sarah leads SummitUSA with a vision for sustainable growth, client success, and technological innovation.
              </p>
            </div>
            
            <div className="text-center bg-gradient-to-br from-blue-900/30 to-purple-900/20 p-8 rounded-3xl border border-blue-500/20 scroll-animate">
              <img
                src="https://readdy.ai/api/search-image?query=Professional%20CTO%20technology%20executive%20portrait%2C%20confident%20tech%20leader%20in%20business%20attire%2C%20corporate%20headshot%20with%20blue%20accent%20lighting%2C%20modern%20tech%20office%20background%2C%20high-end%20professional%20photography%2C%20innovative%20business%20portrait&width=400&height=500&seq=cto-portrait-summit-1&orientation=portrait"
                alt="Michael Chen - CTO of SummitUSA"
                className="w-64 h-80 object-cover object-top rounded-2xl mx-auto mb-6 shadow-2xl"
              />
              <h3 className="text-2xl font-bold text-white mb-2">Michael Chen</h3>
              <p className="text-blue-400 font-semibold mb-4">Chief Technology Officer</p>
              <p className="text-gray-300 leading-relaxed">
                Michael brings deep technical expertise and innovation leadership to SummitUSA, driving our 
                technology strategy and ensuring we stay at the forefront of digital transformation trends.
              </p>
            </div>
            
            <div className="text-center bg-gradient-to-br from-purple-900/30 to-blue-900/20 p-8 rounded-3xl border border-purple-500/20 scroll-animate-right">
              <img
                src="https://readdy.ai/api/search-image?query=Professional%20COO%20operations%20executive%20portrait%2C%20confident%20business%20operations%20leader%20in%20professional%20attire%2C%20corporate%20headshot%20with%20purple%20accent%20lighting%2C%20modern%20corporate%20office%20background%2C%20high-end%20professional%20photography%2C%20executive%20business%20portrait&width=400&height=500&seq=coo-portrait-summit-1&orientation=portrait"
                alt="Jennifer Rodriguez - COO of SummitUSA"
                className="w-64 h-80 object-cover object-top rounded-2xl mx-auto mb-6 shadow-2xl"
              />
              <h3 className="text-2xl font-bold text-white mb-2">Jennifer Rodriguez</h3>
              <p className="text-purple-400 font-semibold mb-4">Chief Operating Officer</p>
              <p className="text-gray-300 leading-relaxed">
                Jennifer oversees SummitUSA's operational excellence and client delivery, ensuring every 
                engagement meets our high standards for quality, innovation, and client satisfaction.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose SummitUSA */}
      <section className="py-24 bg-gradient-to-br from-black via-purple-900/10 to-blue-900/20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16 scroll-animate">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Why Choose SummitUSA?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              SummitUSA delivers unmatched value through our comprehensive approach to technology consulting
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-purple-900/30 to-blue-900/20 p-8 rounded-3xl border border-purple-500/20 scroll-animate-left">
              <h3 className="text-2xl font-bold text-white mb-4">Proven Track Record</h3>
              <p className="text-gray-300 leading-relaxed mb-4">
                SummitUSA has successfully delivered over 500 technology projects across 15+ industries, 
                with a 98% client satisfaction rate and measurable ROI for every engagement.
              </p>
              <ul className="space-y-2 text-gray-300">
                <li>• 500+ Successful Project Deliveries</li>
                <li>• 98% Client Satisfaction Rate</li>
                <li>• Average 300% ROI for Clients</li>
                <li>• 95% Client Retention Rate</li>
              </ul>
            </div>
            
            <div className="bg-gradient-to-br from-blue-900/30 to-purple-900/20 p-8 rounded-3xl border border-blue-500/20 scroll-animate-right">
              <h3 className="text-2xl font-bold text-white mb-4">Expert Team</h3>
              <p className="text-gray-300 leading-relaxed mb-4">
                Our SummitUSA team consists of certified professionals, industry experts, and thought leaders 
                with deep expertise across all major technology platforms and business domains.
              </p>
              <ul className="space-y-2 text-gray-300">
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
