
'use client';

import { useEffect, useRef, useState, useCallback } from 'react';
import { Link } from 'react-router-dom';
import useEmblaCarousel from 'embla-carousel-react';
import Header from '../components/Header';
import Footer from '../components/Footer';

// Industry images
import healthcareImg from '../assets/industry-healthcare.jpg';
import constructionImg from '../assets/industry-construction.jpg';
import financeImg from '../assets/industry-finance.jpg';
import educationImg from '../assets/industry-education.jpg';
import legalImg from '../assets/industry-legal.jpg';
import nonprofitImg from '../assets/industry-nonprofit.jpg';
import manufacturingImg from '../assets/industry-manufacturing.jpg';
import retailImg from '../assets/industry-retail.jpg';
import realestateImg from '../assets/industry-realestate.jpg';

export default function Home() {
  const observerRef = useRef<IntersectionObserver | null>(null);
  const [typedText, setTypedText] = useState('');
  const fullText = 'Summit USA';

  // Testimonials data
  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      position: "CEO",
      company: "Healthcare Solutions Inc.",
      content: "SummitUSA transformed our IT infrastructure completely. Their proactive approach prevented multiple potential disasters and their 24/7 support gives us peace of mind.",
      rating: 5
    },
    {
      id: 2,
      name: "Michael Chen",
      position: "Operations Manager",
      company: "Construction Dynamics LLC",
      content: "Working with remote teams across multiple job sites was a nightmare until SummitUSA stepped in. Now our technology just works, everywhere.",
      rating: 5
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      position: "Finance Director",
      company: "Regional Bank & Trust",
      content: "Security and compliance are everything in our industry. SummitUSA's expertise has kept us ahead of regulations and completely secure.",
      rating: 5
    },
    {
      id: 4,
      name: "David Thompson",
      position: "Principal",
      company: "Metro Education District",
      content: "The digital transformation of our schools seemed impossible until we partnered with SummitUSA. They made it seamless for both staff and students.",
      rating: 5
    },
    {
      id: 5,
      name: "Lisa Martinez",
      position: "Managing Partner",
      company: "Martinez & Associates Law",
      content: "Client confidentiality is paramount in our practice. SummitUSA's secure systems and reliable support have been invaluable to our success.",
      rating: 5
    }
  ];

  // Carousel setup
  const [emblaRef, emblaApi] = useEmblaCarousel({ 
    loop: true,
    align: 'center',
    slidesToScroll: 1
  });
  const [prevBtnDisabled, setPrevBtnDisabled] = useState(true);
  const [nextBtnDisabled, setNextBtnDisabled] = useState(true);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const onSelect = useCallback((emblaApi: { canScrollPrev: () => boolean; canScrollNext: () => boolean }) => {
    setPrevBtnDisabled(!emblaApi.canScrollPrev());
    setNextBtnDisabled(!emblaApi.canScrollNext());
  }, []);

  useEffect(() => {
    if (!emblaApi) return;

    onSelect(emblaApi);
    emblaApi.on('reInit', onSelect);
    emblaApi.on('select', onSelect);
  }, [emblaApi, onSelect]);

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

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 text-center py-16 sm:py-24 md:py-32">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-6 sm:mb-8 leading-tight">
            <span className="typing-cursor">
              <span className="text-white">{typedText.slice(0, 6)}</span>
              <span className="bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">
                {typedText.slice(6)}
              </span>
            </span>
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-gray-200 mb-8 sm:mb-12 max-w-4xl mx-auto leading-relaxed font-light px-4">
            The Future of IT Starts with Predictable, Scalable Support
          </p>
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center mb-8 sm:mb-16 px-4">
            <Link to="/contact" className="w-full sm:w-auto bg-gradient-to-r from-orange-500 to-blue-900 text-white px-6 sm:px-8 md:px-12 py-3 sm:py-4 rounded-full text-sm sm:text-base lg:text-lg font-semibold hover:scale-105 transition-all duration-300 shadow-2xl hover:shadow-orange-500/50 text-center cursor-pointer">
              Get Started Today
            </Link>
            <Link to="/about" className="w-full sm:w-auto border-2 border-white text-white px-6 sm:px-8 md:px-12 py-3 sm:py-4 rounded-full text-sm sm:text-base lg:text-lg font-semibold hover:bg-white hover:text-black transition-all duration-300 text-center cursor-pointer">
              Learn More
            </Link>
          </div>
        </div>
      </section>

      {/* IT Confusion and Costs Section */}
      <section className="py-8 sm:py-12 lg:py-16 bg-gradient-to-br from-orange-900/20 via-black to-blue-900/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-6 sm:mb-8 scroll-animate">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-3 sm:mb-4 px-4">
              Is Poor IT Support Draining Your Business Resources?
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-gray-300 max-w-3xl mx-auto px-4">
              Downtime and inefficient IT can silently erode your revenue, customer trust, and team productivity.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 items-center">
            {/* Left side - Image */}
            <div className="scroll-animate-left order-2 lg:order-1">
              <div
                className="w-full h-64 sm:h-80 lg:h-96 rounded-2xl bg-cover bg-center shadow-xl"
                style={{
                  backgroundImage: `url('/lovable-uploads/f212d01b-3ea0-4e98-87ad-f3b35877416c.png')`
                }}
              ></div>
            </div>

            {/* Right side - Statistics */}
            <div className="space-y-3 sm:space-y-4 scroll-animate-right order-1 lg:order-2">
              <div className="bg-gradient-to-br from-orange-500/20 to-blue-900/30 p-4 sm:p-6 rounded-xl border border-orange-500/30">
                <div className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold bg-gradient-to-r from-orange-400 to-blue-900 bg-clip-text text-transparent mb-2">
                  91%
                </div>
                <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
                  of businesses report that a single hour of downtime costs over $300,000. (Source: ITIC)
                </p>
              </div>

              <div className="bg-gradient-to-br from-blue-900/30 to-orange-500/20 p-4 sm:p-6 rounded-xl border border-blue-500/30">
                <div className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold bg-gradient-to-r from-orange-400 to-blue-900 bg-clip-text text-transparent mb-2">
                  $5600/min
                </div>
                <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
                  is the average cost of downtime for large enterprises. (Source: Gartner)
                </p>
              </div>

              <div className="bg-gradient-to-br from-orange-500/20 to-blue-900/30 p-4 sm:p-6 rounded-xl border border-orange-500/30">
                <div className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold bg-gradient-to-r from-orange-400 to-blue-900 bg-clip-text text-transparent mb-2">
                  43%
                </div>
                <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
                  of cyberattacks target small businesses, with downtime averaging 18.5 hours. (Source: Accenture)
                </p>
              </div>

              <div className="bg-gradient-to-br from-blue-900/30 to-orange-500/20 p-4 sm:p-6 rounded-xl border border-blue-500/30">
                <div className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold bg-gradient-to-r from-orange-400 to-blue-900 bg-clip-text text-transparent mb-2">
                  $142,000
                </div>
                <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
                  is the average cost to recover from a ransomware attack for SMBs. (Source: Sophos)
                </p>
              </div>

              <div className="bg-gradient-to-br from-orange-500/20 to-blue-900/30 p-4 sm:p-6 rounded-xl border border-orange-500/30">
                <div className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold bg-gradient-to-r from-orange-400 to-blue-900 bg-clip-text text-transparent mb-2">
                  28%
                </div>
                <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
                  of IT leaders say lack of proactive monitoring is the leading cause of system failures. (Source: LogicMonitor)
                </p>
              </div>
            </div>
          </div>
          
          <div className="text-center mt-6 sm:mt-8 scroll-animate">
            <p className="text-base sm:text-lg lg:text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed px-4">
              Don't allow downtime to impact employee productivity and derail your organization. Get the IT support you need to reduce and stop these interruptions before they occur.
            </p>
          </div>
          
          <div className="text-center mt-6 sm:mt-8 scroll-animate px-4">
            <Link to="/contact" className="w-full sm:w-auto bg-gradient-to-r from-orange-500 to-blue-900 text-white px-6 sm:px-8 md:px-12 py-3 sm:py-4 rounded-full text-sm sm:text-base lg:text-lg font-semibold hover:scale-105 transition-all duration-300 shadow-2xl hover:shadow-orange-500/50 cursor-pointer inline-block">
              Get a competitive advantage now
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-orange-900/20 via-blue-900/20 to-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12 sm:mb-16 lg:mb-20 scroll-animate">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 sm:mb-8 px-4">
              Why Choose SummitUSA?
            </h2>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-300 max-w-4xl mx-auto px-4 leading-relaxed">
              SummitUSA is your trusted technology partner delivering dependable, cost-effective, and forward-thinking IT solutions tailored to fuel your business success. With us, you don't just get support you gain a team committed to your growth, security, and long-term vision.
            </p>
          </div>

          <div className="max-w-4xl mx-auto mt-8 sm:mt-12 lg:mt-16 space-y-4 sm:space-y-6">
            <div className="bg-gradient-to-r from-orange-900/30 to-blue-900/20 p-4 sm:p-6 rounded-2xl border border-orange-500/20 hover:border-orange-500/40 transition-all duration-300 scroll-animate stagger-1">
              <h3 className="text-base sm:text-lg font-bold text-white mb-2 sm:mb-3">• True Partnership Mindset</h3>
              <p className="text-sm sm:text-base text-gray-300 leading-relaxed">We work as an extension of your team, aligning IT strategies with your business goals.</p>
            </div>
            
            <div className="bg-gradient-to-r from-blue-900/30 to-orange-900/20 p-4 sm:p-6 rounded-2xl border border-blue-500/20 hover:border-blue-500/40 transition-all duration-300 scroll-animate stagger-2">
              <h3 className="text-base sm:text-lg font-bold text-white mb-2 sm:mb-3">• Predictable Costs</h3>
              <p className="text-sm sm:text-base text-gray-300 leading-relaxed">Our fixed monthly pricing eliminates surprise bills and helps you manage your IT budget with confidence.</p>
            </div>
            
            <div className="bg-gradient-to-r from-orange-900/30 to-blue-900/20 p-4 sm:p-6 rounded-2xl border border-orange-500/20 hover:border-orange-500/40 transition-all duration-300 scroll-animate stagger-3">
              <h3 className="text-base sm:text-lg font-bold text-white mb-2 sm:mb-3">• Proactive Support</h3>
              <p className="text-sm sm:text-base text-gray-300 leading-relaxed">We solve issues before they become problems, minimizing downtime and disruption.</p>
            </div>
            
            <div className="bg-gradient-to-r from-blue-900/30 to-orange-900/20 p-4 sm:p-6 rounded-2xl border border-blue-500/20 hover:border-blue-500/40 transition-all duration-300 scroll-animate stagger-4">
              <h3 className="text-base sm:text-lg font-bold text-white mb-2 sm:mb-3">• Trusted by Businesses</h3>
              <p className="text-sm sm:text-base text-gray-300 leading-relaxed">Decades of experience and long-term client relationships speak to our consistent results and reliability.</p>
            </div>
            
            <div className="bg-gradient-to-r from-orange-900/30 to-blue-900/20 p-4 sm:p-6 rounded-2xl border border-orange-500/20 hover:border-orange-500/40 transition-all duration-300 scroll-animate stagger-5">
              <h3 className="text-base sm:text-lg font-bold text-white mb-2 sm:mb-3">• Focus on Growth</h3>
              <p className="text-sm sm:text-base text-gray-300 leading-relaxed">We provide strategic guidance to help you scale efficiently with the right technology foundation.</p>
            </div>
            
            <div className="bg-gradient-to-r from-blue-900/30 to-orange-900/20 p-4 sm:p-6 rounded-2xl border border-blue-500/20 hover:border-blue-500/40 transition-all duration-300 scroll-animate stagger-6">
              <h3 className="text-base sm:text-lg font-bold text-white mb-2 sm:mb-3">• Always Available</h3>
              <p className="text-sm sm:text-base text-gray-300 leading-relaxed">Our team is responsive, reliable, and ready to support you whenever you need us—24/7.</p>
            </div>
            
            <div className="bg-gradient-to-r from-orange-900/30 to-blue-900/20 p-4 sm:p-6 rounded-2xl border border-orange-500/20 hover:border-orange-500/40 transition-all duration-300 scroll-animate stagger-1">
              <h3 className="text-base sm:text-lg font-bold text-white mb-2 sm:mb-3">• Security-First Approach</h3>
              <p className="text-sm sm:text-base text-gray-300 leading-relaxed">We prioritize your data and system security with proactive protection and staff training.</p>
            </div>
            
            <div className="bg-gradient-to-r from-blue-900/30 to-orange-900/20 p-4 sm:p-6 rounded-2xl border border-blue-500/20 hover:border-blue-500/40 transition-all duration-300 scroll-animate stagger-2">
              <h3 className="text-base sm:text-lg font-bold text-white mb-2 sm:mb-3">• Peace of Mind</h3>
              <p className="text-sm sm:text-base text-gray-300 leading-relaxed">With SummitUSA, you can focus on your business while we handle the complexities of IT.</p>
            </div>
          </div>

        </div>
      </section>

      {/* CTA Banner Section */}
      <section className="py-12 sm:py-16 lg:py-20 relative overflow-hidden">
        <Link to="/contact" className="block group cursor-pointer">
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: `url('https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2072&q=80')`
            }}
          ></div>
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/80"></div>
          
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 text-center">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-6 group-hover:scale-105 transition-transform duration-300 px-4">
              Transform Your Business with Expert IT Solutions
            </h2>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-200 mb-6 sm:mb-8 max-w-4xl mx-auto leading-relaxed px-4">
              Join hundreds of successful businesses who trust SummitUSA for their technology needs. Get started today and experience the difference.
            </p>
            <div className="inline-flex items-center justify-center bg-gradient-to-r from-orange-500 to-blue-900 text-white px-8 sm:px-12 md:px-16 py-4 sm:py-6 rounded-full text-sm sm:text-base lg:text-lg font-bold group-hover:scale-110 transition-all duration-300 shadow-2xl hover:shadow-orange-500/50 mx-4">
              <span>Get Your Free Consultation</span>
              <svg className="ml-2 w-5 h-5 sm:w-6 sm:h-6 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </div>
        </Link>
      </section>

      {/* Industries Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-blue-900/20 via-orange-900/20 to-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12 sm:mb-16 lg:mb-20 scroll-animate">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 sm:mb-8 px-4">
              The Right IT Support for Your Industry
            </h2>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-300 max-w-4xl mx-auto px-4 leading-relaxed">
              Every industry has unique technology needs and at SummitUSA, we get that. From healthcare practices needing HIPAA-compliant systems to construction firms requiring reliable support across job sites, we tailor our IT solutions to fit your world. Whether you're in finance, education, legal, or nonprofit sectors, we bring the experience, tools, and strategic guidance needed to keep your business running smoothly and securely. No matter your field, SummitUSA is the IT partner you can trust to deliver real results.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 max-w-6xl mx-auto">
            <div className="text-center bg-gradient-to-br from-orange-900/30 to-blue-900/20 rounded-2xl border border-orange-500/20 hover:border-orange-500/40 transition-all duration-300 cursor-pointer hover:transform hover:scale-105 scroll-animate-scale stagger-1">
              <div 
                className="w-full h-32 sm:h-40 lg:h-48 rounded-t-2xl bg-cover bg-center mb-3 sm:mb-4"
                style={{ backgroundImage: `url(${healthcareImg})` }}
              ></div>
              <div className="p-4 sm:p-6">
                <h3 className="text-base sm:text-lg font-bold text-white mb-1 sm:mb-2">Healthcare</h3>
                <p className="text-xs sm:text-sm text-gray-400">HIPAA-compliant systems & secure patient data management</p>
              </div>
            </div>

            <div className="text-center bg-gradient-to-br from-blue-900/30 to-orange-900/20 rounded-2xl border border-blue-500/20 hover:border-blue-500/40 transition-all duration-300 cursor-pointer hover:transform hover:scale-105 scroll-animate-scale stagger-2">
              <div 
                className="w-full h-32 sm:h-40 lg:h-48 rounded-t-2xl bg-cover bg-center mb-3 sm:mb-4"
                style={{ backgroundImage: `url(${constructionImg})` }}
              ></div>
              <div className="p-4 sm:p-6">
                <h3 className="text-base sm:text-lg font-bold text-white mb-1 sm:mb-2">Construction</h3>
                <p className="text-xs sm:text-sm text-gray-400">Reliable support across job sites & mobile workforce</p>
              </div>
            </div>

            <div className="text-center bg-gradient-to-br from-orange-900/30 to-blue-900/20 rounded-2xl border border-orange-500/20 hover:border-orange-500/40 transition-all duration-300 cursor-pointer hover:transform hover:scale-105 scroll-animate-scale stagger-3">
              <div 
                className="w-full h-32 sm:h-40 lg:h-48 rounded-t-2xl bg-cover bg-center mb-3 sm:mb-4"
                style={{ backgroundImage: `url(${financeImg})` }}
              ></div>
              <div className="p-4 sm:p-6">
                <h3 className="text-base sm:text-lg font-bold text-white mb-1 sm:mb-2">Finance</h3>
                <p className="text-xs sm:text-sm text-gray-400">Secure financial systems & regulatory compliance</p>
              </div>
            </div>

            <div className="text-center bg-gradient-to-br from-blue-900/30 to-orange-900/20 rounded-2xl border border-blue-500/20 hover:border-blue-500/40 transition-all duration-300 cursor-pointer hover:transform hover:scale-105 scroll-animate-scale stagger-4">
              <div 
                className="w-full h-32 sm:h-40 lg:h-48 rounded-t-2xl bg-cover bg-center mb-3 sm:mb-4"
                style={{ backgroundImage: `url(${educationImg})` }}
              ></div>
              <div className="p-4 sm:p-6">
                <h3 className="text-base sm:text-lg font-bold text-white mb-1 sm:mb-2">Education</h3>
                <p className="text-xs sm:text-sm text-gray-400">Digital learning platforms & student data protection</p>
              </div>
            </div>

            <div className="text-center bg-gradient-to-br from-orange-900/30 to-blue-900/20 rounded-2xl border border-orange-500/20 hover:border-orange-500/40 transition-all duration-300 cursor-pointer hover:transform hover:scale-105 scroll-animate-scale stagger-5">
              <div 
                className="w-full h-32 sm:h-40 lg:h-48 rounded-t-2xl bg-cover bg-center mb-3 sm:mb-4"
                style={{ backgroundImage: `url(${legalImg})` }}
              ></div>
              <div className="p-4 sm:p-6">
                <h3 className="text-base sm:text-lg font-bold text-white mb-1 sm:mb-2">Legal</h3>
                <p className="text-xs sm:text-sm text-gray-400">Confidential case management & secure communications</p>
              </div>
            </div>

            <div className="text-center bg-gradient-to-br from-blue-900/30 to-orange-900/20 rounded-2xl border border-blue-500/20 hover:border-blue-500/40 transition-all duration-300 cursor-pointer hover:transform hover:scale-105 scroll-animate-scale stagger-6">
              <div 
                className="w-full h-32 sm:h-40 lg:h-48 rounded-t-2xl bg-cover bg-center mb-3 sm:mb-4"
                style={{ backgroundImage: `url(${nonprofitImg})` }}
              ></div>
              <div className="p-4 sm:p-6">
                <h3 className="text-base sm:text-lg font-bold text-white mb-1 sm:mb-2">Nonprofit</h3>
                <p className="text-xs sm:text-sm text-gray-400">Cost-effective solutions & donor management systems</p>
              </div>
            </div>

            <div className="text-center bg-gradient-to-br from-orange-900/30 to-blue-900/20 rounded-2xl border border-orange-500/20 hover:border-orange-500/40 transition-all duration-300 cursor-pointer hover:transform hover:scale-105 scroll-animate-scale stagger-1">
              <div 
                className="w-full h-32 sm:h-40 lg:h-48 rounded-t-2xl bg-cover bg-center mb-3 sm:mb-4"
                style={{ backgroundImage: `url(${manufacturingImg})` }}
              ></div>
              <div className="p-4 sm:p-6">
                <h3 className="text-base sm:text-lg font-bold text-white mb-1 sm:mb-2">Manufacturing</h3>
                <p className="text-xs sm:text-sm text-gray-400">Industrial automation & production system integration</p>
              </div>
            </div>

            <div className="text-center bg-gradient-to-br from-blue-900/30 to-orange-900/20 rounded-2xl border border-blue-500/20 hover:border-blue-500/40 transition-all duration-300 cursor-pointer hover:transform hover:scale-105 scroll-animate-scale stagger-2">
              <div 
                className="w-full h-32 sm:h-40 lg:h-48 rounded-t-2xl bg-cover bg-center mb-3 sm:mb-4"
                style={{ backgroundImage: `url(${retailImg})` }}
              ></div>
              <div className="p-4 sm:p-6">
                <h3 className="text-base sm:text-lg font-bold text-white mb-1 sm:mb-2">Retail</h3>
                <p className="text-xs sm:text-sm text-gray-400">POS systems & inventory management solutions</p>
              </div>
            </div>

            <div className="text-center bg-gradient-to-br from-orange-900/30 to-blue-900/20 rounded-2xl border border-orange-500/20 hover:border-orange-500/40 transition-all duration-300 cursor-pointer hover:transform hover:scale-105 scroll-animate-scale stagger-3">
              <div 
                className="w-full h-32 sm:h-40 lg:h-48 rounded-t-2xl bg-cover bg-center mb-3 sm:mb-4"
                style={{ backgroundImage: `url(${realestateImg})` }}
              ></div>
              <div className="p-4 sm:p-6">
                <h3 className="text-base sm:text-lg font-bold text-white mb-1 sm:mb-2">Real Estate</h3>
                <p className="text-xs sm:text-sm text-gray-400">CRM systems & property management platforms</p>
              </div>
            </div>
          </div>
          
          {/* CTA Button */}
          <div className="text-center mt-8 sm:mt-12 lg:mt-16 scroll-animate px-4">
            <Link to="/contact" className="w-full sm:w-auto bg-gradient-to-r from-orange-500 to-blue-900 text-white px-8 sm:px-12 md:px-16 py-4 sm:py-6 rounded-full text-sm sm:text-base lg:text-lg font-bold hover:scale-110 transition-all duration-300 shadow-2xl hover:shadow-orange-500/50 cursor-pointer inline-block">
              Get Industry-Specific IT Solutions
            </Link>
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
          
          {/* CTA Button */}
          <div className="text-center mt-16 scroll-animate">
            <Link to="/contact" className="bg-gradient-to-r from-orange-500 to-blue-900 text-white px-12 sm:px-16 py-6 rounded-full text-base sm:text-lg lg:text-xl font-bold hover:scale-110 transition-all duration-300 shadow-2xl hover:shadow-orange-500/50 whitespace-nowrap cursor-pointer inline-block">
              Choose Your IT Solution Today
            </Link>
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

          {/* Desktop Table */}
          <div className="hidden md:block overflow-x-auto scroll-animate">
            <div className="min-w-full bg-gradient-to-br from-blue-900/30 to-orange-900/20 rounded-3xl border border-blue-500/20 p-4 md:p-8">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-gray-600">
                    <th className="text-left py-3 px-2 md:py-4 md:px-6 text-sm md:text-lg font-bold text-white">Comparison</th>
                    <th className="text-center py-3 px-2 md:py-4 md:px-6 text-sm md:text-lg font-bold text-orange-400">Managed IT Services</th>
                    <th className="text-center py-3 px-2 md:py-4 md:px-6 text-sm md:text-lg font-bold text-blue-400">IT Subscription Program</th>
                  </tr>
                </thead>
                <tbody className="text-gray-300">
                  <tr className="border-b border-gray-700">
                    <td className="py-3 px-2 md:py-4 md:px-6 font-semibold text-sm md:text-base">Approach to Problems</td>
                    <td className="py-3 px-2 md:py-4 md:px-6 text-center text-sm md:text-base">Reacts to problems with your tech</td>
                    <td className="py-3 px-2 md:py-4 md:px-6 text-center text-sm md:text-base">Uses proactive planning to reduce or eliminate tech problems</td>
                  </tr>
                  <tr className="border-b border-gray-700">
                    <td className="py-3 px-2 md:py-4 md:px-6 font-semibold text-sm md:text-base">Planning Horizon</td>
                    <td className="py-3 px-2 md:py-4 md:px-6 text-center text-sm md:text-base">Focuses on the here and now</td>
                    <td className="py-3 px-2 md:py-4 md:px-6 text-center text-sm md:text-base">Collaborates with you to plan for your goals and objectives 3-4 years in the future</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-2 md:py-4 md:px-6 font-semibold text-sm md:text-base">Billing Structure</td>
                    <td className="py-3 px-2 md:py-4 md:px-6 text-center text-sm md:text-base">Bills you for additional projects and upgrades to your IT system</td>
                    <td className="py-3 px-2 md:py-4 md:px-6 text-center text-sm md:text-base">No surprise bills - you can expect one predictable IT cost</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Mobile Cards */}
          <div className="md:hidden space-y-6 scroll-animate">
            <div className="bg-gradient-to-br from-blue-900/30 to-orange-900/20 rounded-2xl border border-blue-500/20 p-4">
              <h3 className="text-lg font-bold text-white mb-4">Approach to Problems</h3>
              <div className="space-y-3">
                <div className="bg-orange-900/20 p-3 rounded-lg">
                  <h4 className="text-orange-400 font-semibold text-sm mb-1">Managed IT Services</h4>
                  <p className="text-gray-300 text-sm">Reacts to problems with your tech</p>
                </div>
                <div className="bg-blue-900/20 p-3 rounded-lg">
                  <h4 className="text-blue-400 font-semibold text-sm mb-1">IT Subscription Program</h4>
                  <p className="text-gray-300 text-sm">Uses proactive planning to reduce or eliminate tech problems</p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-900/30 to-orange-900/20 rounded-2xl border border-blue-500/20 p-4">
              <h3 className="text-lg font-bold text-white mb-4">Planning Horizon</h3>
              <div className="space-y-3">
                <div className="bg-orange-900/20 p-3 rounded-lg">
                  <h4 className="text-orange-400 font-semibold text-sm mb-1">Managed IT Services</h4>
                  <p className="text-gray-300 text-sm">Focuses on the here and now</p>
                </div>
                <div className="bg-blue-900/20 p-3 rounded-lg">
                  <h4 className="text-blue-400 font-semibold text-sm mb-1">IT Subscription Program</h4>
                  <p className="text-gray-300 text-sm">Collaborates with you to plan for your goals and objectives 3-4 years in the future</p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-900/30 to-orange-900/20 rounded-2xl border border-blue-500/20 p-4">
              <h3 className="text-lg font-bold text-white mb-4">Billing Structure</h3>
              <div className="space-y-3">
                <div className="bg-orange-900/20 p-3 rounded-lg">
                  <h4 className="text-orange-400 font-semibold text-sm mb-1">Managed IT Services</h4>
                  <p className="text-gray-300 text-sm">Bills you for additional projects and upgrades to your IT system</p>
                </div>
                <div className="bg-blue-900/20 p-3 rounded-lg">
                  <h4 className="text-blue-400 font-semibold text-sm mb-1">IT Subscription Program</h4>
                  <p className="text-gray-300 text-sm">No surprise bills - you can expect one predictable IT cost</p>
                </div>
              </div>
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

          <div className="w-full">
            <div className="bg-gradient-to-br from-orange-900/40 to-blue-900/30 p-6 sm:p-8 rounded-3xl border border-orange-500/30 scroll-animate-left stagger-3">
              <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-white mb-4 text-center">Summit Services Corporation</h3>
              <div className="text-xs sm:text-sm lg:text-base text-gray-300 mb-4 space-y-1 text-center">
                <p>20511 61st Place West</p>
                <p>Lynnwood, WA 98036 (U.S.A)</p>
                <p>Phone: 1-206-841-0601 Extension 101</p>
                <p>Fax: 1-206-339-4838</p>
                <p>SIP: 101@Sip.SummitUSA.com</p>
              </div>
              <p className="text-xs sm:text-sm lg:text-base text-gray-400 text-center">
                Our headquarters providing comprehensive IT services and technology solutions across the Pacific Northwest and beyond.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 sm:py-32 bg-gradient-to-br from-blue-900/20 via-black to-orange-900/20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20 scroll-animate">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-8">
              What Our Clients Say
            </h2>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-300 max-w-4xl mx-auto">
              Don't just take our word for it. Hear from the businesses who have transformed their operations with SummitUSA.
            </p>
          </div>

          <div className="relative">
            <div className="overflow-hidden" ref={emblaRef}>
              <div className="flex">
                {testimonials.map((testimonial) => (
                  <div key={testimonial.id} className="flex-[0_0_100%] md:flex-[0_0_50%] lg:flex-[0_0_33.333%] px-4">
                    <div className="bg-gradient-to-br from-orange-900/30 to-blue-900/20 p-8 rounded-3xl border border-orange-500/20 hover:border-orange-500/40 transition-all duration-300 h-full">
                      <div className="flex items-center mb-6">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <svg key={i} className="w-5 h-5 text-orange-400 fill-current" viewBox="0 0 20 20">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        ))}
                      </div>
                      <blockquote className="text-gray-300 text-lg leading-relaxed mb-6">
                        "{testimonial.content}"
                      </blockquote>
                      <div className="flex items-center">
                        <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-blue-900 rounded-full flex items-center justify-center text-white font-bold text-lg mr-4">
                          {testimonial.name.charAt(0)}
                        </div>
                        <div>
                          <div className="font-bold text-white">{testimonial.name}</div>
                          <div className="text-sm text-gray-400">{testimonial.position}</div>
                          <div className="text-sm text-orange-400">{testimonial.company}</div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Navigation Buttons */}
            <button
              className={`absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 rounded-full border-2 border-orange-500 flex items-center justify-center transition-all duration-300 ${
                prevBtnDisabled 
                  ? 'bg-gray-800 text-gray-500 cursor-not-allowed' 
                  : 'bg-orange-500 text-white hover:bg-orange-600 hover:scale-110'
              }`}
              onClick={scrollPrev}
              disabled={prevBtnDisabled}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            <button
              className={`absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 rounded-full border-2 border-orange-500 flex items-center justify-center transition-all duration-300 ${
                nextBtnDisabled 
                  ? 'bg-gray-800 text-gray-500 cursor-not-allowed' 
                  : 'bg-orange-500 text-white hover:bg-orange-600 hover:scale-110'
              }`}
              onClick={scrollNext}
              disabled={nextBtnDisabled}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
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
