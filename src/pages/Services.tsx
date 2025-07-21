
'use client';

import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Services() {
  return (
    <div className="min-h-screen bg-black">
      <Header />
      
      {/* Hero Section */}
      <section className="relative pt-24 pb-16 bg-gradient-to-br from-purple-900 via-blue-900 to-black">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Our 
              <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                Services
              </span>
            </h1>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
              Comprehensive solutions designed to accelerate your business growth and drive sustainable success 
              in today's competitive marketplace.
            </p>
          </div>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-24 bg-gradient-to-br from-black via-purple-900/10 to-blue-900/20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-24">
            <div className="bg-gradient-to-br from-purple-900/40 to-black/30 p-12 rounded-3xl border border-purple-500/30 hover:border-purple-500/50 transition-all duration-300 cursor-pointer">
              <div 
                className="w-full h-48 rounded-2xl mb-6 bg-cover bg-center"
                style={{
                  backgroundImage: `url('https://readdy.ai/api/search-image?query=Strategic%20business%20consulting%20meeting%20with%20executives%20analyzing%20charts%20and%20data%2C%20modern%20conference%20room%20with%20purple%20accent%20lighting%2C%20professional%20strategy%20session%2C%20corporate%20consulting%20environment&width=600&height=300&seq=strategy-service-1&orientation=landscape')`
                }}
              ></div>
              <h2 className="text-3xl font-bold text-white mb-6">Strategic Consulting</h2>
              <p className="text-gray-300 text-lg leading-relaxed mb-8">
                Transform your business with data-driven strategies that align with market opportunities 
                and organizational capabilities. Our strategic consulting services help you navigate complex 
                business challenges and identify growth opportunities.
              </p>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-300">Market Analysis & Competitive Intelligence</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-300">Business Model Innovation</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-300">Growth Strategy Development</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-300">Organizational Restructuring</p>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-blue-900/40 to-black/30 p-12 rounded-3xl border border-blue-500/30 hover:border-blue-500/50 transition-all duration-300 cursor-pointer">
              <div 
                className="w-full h-48 rounded-2xl mb-6 bg-cover bg-center"
                style={{
                  backgroundImage: `url('https://readdy.ai/api/search-image?query=Digital%20transformation%20technology%20workspace%20with%20modern%20screens%20and%20digital%20interfaces%2C%20blue%20accent%20lighting%2C%20futuristic%20corporate%20environment%2C%20high-tech%20business%20setting&width=600&height=300&seq=digital-service-1&orientation=landscape')`
                }}
              ></div>
              <h2 className="text-3xl font-bold text-white mb-6">Digital Transformation</h2>
              <p className="text-gray-300 text-lg leading-relaxed mb-8">
                Accelerate your digital evolution with cutting-edge technology solutions and process optimization. 
                We help organizations leverage technology to improve efficiency, enhance customer experience, 
                and create new revenue streams.
              </p>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-300">Process Automation & Optimization</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-300">Cloud Migration & Integration</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-300">Data Analytics & Business Intelligence</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-300">Digital Customer Experience</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div className="bg-gradient-to-br from-purple-900/40 to-black/30 p-12 rounded-3xl border border-purple-500/30 hover:border-purple-500/50 transition-all duration-300 cursor-pointer">
              <div 
                className="w-full h-48 rounded-2xl mb-6 bg-cover bg-center"
                style={{
                  backgroundImage: `url('https://readdy.ai/api/search-image?query=Operational%20excellence%20manufacturing%20facility%20with%20modern%20equipment%20and%20purple%20lighting%2C%20efficient%20production%20line%2C%20high-tech%20industrial%20environment%2C%20quality%20management%20systems&width=600&height=300&seq=operations-service-1&orientation=landscape')`
                }}
              ></div>
              <h2 className="text-3xl font-bold text-white mb-6">Operational Excellence</h2>
              <p className="text-gray-300 text-lg leading-relaxed mb-8">
                Optimize your operations for maximum efficiency and profitability. Our operational excellence 
                services focus on streamlining processes, reducing costs, and improving overall performance 
                across your organization.
              </p>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-300">Supply Chain Optimization</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-300">Quality Management Systems</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-300">Performance Management</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-300">Risk Management & Compliance</p>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-blue-900/40 to-black/30 p-12 rounded-3xl border border-blue-500/30 hover:border-blue-500/50 transition-all duration-300 cursor-pointer">
              <div 
                className="w-full h-48 rounded-2xl mb-6 bg-cover bg-center"
                style={{
                  backgroundImage: `url('https://readdy.ai/api/search-image?query=Executive%20leadership%20development%20seminar%20with%20business%20leaders%20in%20modern%20training%20room%2C%20blue%20accent%20lighting%2C%20professional%20coaching%20environment%2C%20corporate%20leadership%20training%20session&width=600&height=300&seq=leadership-service-1&orientation=landscape')`
                }}
              ></div>
              <h2 className="text-3xl font-bold text-white mb-6">Leadership Development</h2>
              <p className="text-gray-300 text-lg leading-relaxed mb-8">
                Build stronger leadership capabilities across your organization. Our leadership development 
                programs are designed to enhance executive skills, improve team performance, and create 
                a culture of continuous improvement.
              </p>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-300">Executive Coaching & Mentoring</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-300">Team Building & Collaboration</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-300">Change Management</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-300">Organizational Culture Development</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 bg-gradient-to-br from-blue-900/20 via-purple-900/20 to-black">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Our Process
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              A proven methodology that ensures successful project delivery and measurable results
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center bg-gradient-to-br from-purple-900/30 to-blue-900/20 p-8 rounded-3xl border border-purple-500/20">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-white">1</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Discovery</h3>
              <p className="text-gray-300 leading-relaxed">
                We begin by understanding your business, challenges, goals, and current state through comprehensive analysis and stakeholder interviews.
              </p>
            </div>
            
            <div className="text-center bg-gradient-to-br from-blue-900/30 to-purple-900/20 p-8 rounded-3xl border border-blue-500/20">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-white">2</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Strategy</h3>
              <p className="text-gray-300 leading-relaxed">
                Based on our findings, we develop a customized strategy with clear objectives, timelines, and success metrics tailored to your needs.
              </p>
            </div>
            
            <div className="text-center bg-gradient-to-br from-purple-900/30 to-blue-900/20 p-8 rounded-3xl border border-purple-500/20">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-white">3</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Implementation</h3>
              <p className="text-gray-300 leading-relaxed">
                We work closely with your team to execute the strategy, providing hands-on support and ensuring smooth implementation of all initiatives.
              </p>
            </div>
            
            <div className="text-center bg-gradient-to-br from-blue-900/30 to-purple-900/20 p-8 rounded-3xl border border-blue-500/20">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-white">4</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Optimization</h3>
              <p className="text-gray-300 leading-relaxed">
                We continuously monitor results, gather feedback, and optimize the solution to ensure maximum impact and sustainable long-term success.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Service Areas with Map */}
      <section className="py-24 bg-gradient-to-br from-purple-900/20 via-black to-blue-900/20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Global Service Coverage
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Delivering excellence across major business hubs worldwide
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <div className="bg-gradient-to-br from-purple-900/40 to-blue-900/30 p-6 rounded-2xl border border-purple-500/30">
                <h3 className="text-xl font-bold text-white mb-3">North America</h3>
                <p className="text-gray-300">New York, San Francisco, Toronto, Chicago</p>
              </div>
              
              <div className="bg-gradient-to-br from-blue-900/40 to-purple-900/30 p-6 rounded-2xl border border-blue-500/30">
                <h3 className="text-xl font-bold text-white mb-3">Europe</h3>
                <p className="text-gray-300">London, Frankfurt, Paris, Amsterdam</p>
              </div>
              
              <div className="bg-gradient-to-br from-purple-900/40 to-blue-900/30 p-6 rounded-2xl border border-purple-500/30">
                <h3 className="text-xl font-bold text-white mb-3">Asia Pacific</h3>
                <p className="text-gray-300">Singapore, Tokyo, Sydney, Hong Kong</p>
              </div>
            </div>
            
            <div className="rounded-3xl overflow-hidden shadow-2xl">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d24176596.36415098!2d-98.5795!3d39.8283!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sus!4v1635959384843!5m2!1sen!2sus"
                width="100%"
                height="400"
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
      <section className="py-24 bg-gradient-to-r from-purple-900 via-blue-900 to-purple-900">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-gray-200 mb-10 leading-relaxed">
            Let's discuss how our services can help you achieve your goals and drive meaningful growth. 
            Contact us today for a consultation.
          </p>
          <button className="bg-white text-purple-900 px-12 py-4 rounded-full text-lg font-bold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-2xl whitespace-nowrap cursor-pointer">
            Get Started
          </button>
        </div>
      </section>

      <Footer />
    </div>
  );
}
