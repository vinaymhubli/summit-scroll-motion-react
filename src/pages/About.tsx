
'use client';

import Header from '../components/Header';
import Footer from '../components/Footer';

export default function About() {
  return (
    <div className="min-h-screen bg-black">
      <Header />
      
      {/* Hero Section */}
      <section className="relative pt-24 pb-16 bg-gradient-to-br from-purple-900 via-blue-900 to-black">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              About 
              <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                SummitUSA
              </span>
            </h1>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
              We are a premier consulting firm dedicated to helping businesses reach their peak performance 
              through strategic innovation and transformational growth solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-24 bg-gradient-to-br from-black via-purple-900/10 to-blue-900/20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold text-white mb-6">Our Story</h2>
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                Founded in 2015, SummitUSA emerged from a vision to bridge the gap between ambitious business goals 
                and achievable outcomes. Our founders, seasoned executives with decades of combined experience, 
                recognized that many organizations struggle to navigate the complexities of modern business landscapes.
              </p>
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                Today, we stand as a trusted partner to over 500 companies across various industries, from 
                innovative startups to Fortune 500 enterprises. Our methodology combines strategic thinking, 
                technological expertise, and deep industry knowledge to deliver solutions that create lasting impact.
              </p>
              <p className="text-gray-300 text-lg leading-relaxed">
                Every client engagement is an opportunity to push boundaries, challenge conventional thinking, 
                and unlock new possibilities for growth and success.
              </p>
            </div>
            <div className="relative">
              <img
                src="https://readdy.ai/api/search-image?query=Modern%20corporate%20team%20meeting%20in%20sleek%20boardroom%20with%20city%20skyline%20view%2C%20professional%20business%20people%20collaborating%20around%20conference%20table%2C%20dark%20elegant%20office%20interior%20with%20purple%20accent%20lighting%2C%20contemporary%20business%20environment%2C%20high-end%20corporate%20photography%20style&width=600&height=800&seq=about-team-1&orientation=portrait"
                alt="SummitUSA Team"
                className="rounded-2xl shadow-2xl object-cover w-full h-96 lg:h-full object-top"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-purple-900/30 to-blue-900/10 rounded-2xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="py-24 bg-gradient-to-br from-blue-900/20 via-purple-900/20 to-black">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Mission & Values
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our core principles guide every decision and shape every client relationship
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-purple-900/50 to-black/40 p-8 rounded-2xl border border-purple-500/30">
              <h3 className="text-2xl font-bold text-white mb-4">Excellence</h3>
              <p className="text-gray-300 leading-relaxed">
                We pursue excellence in every project, setting the highest standards for quality, 
                innovation, and client satisfaction across all our engagements.
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-blue-900/50 to-black/40 p-8 rounded-2xl border border-blue-500/30">
              <h3 className="text-2xl font-bold text-white mb-4">Integrity</h3>
              <p className="text-gray-300 leading-relaxed">
                Trust is the foundation of our relationships. We operate with complete transparency, 
                honesty, and ethical practices in all our business dealings.
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-purple-900/50 to-black/40 p-8 rounded-2xl border border-purple-500/30">
              <h3 className="text-2xl font-bold text-white mb-4">Innovation</h3>
              <p className="text-gray-300 leading-relaxed">
                We embrace change and continuously evolve our methodologies to stay ahead of 
                industry trends and deliver cutting-edge solutions.
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-blue-900/50 to-black/40 p-8 rounded-2xl border border-blue-500/30">
              <h3 className="text-2xl font-bold text-white mb-4">Partnership</h3>
              <p className="text-gray-300 leading-relaxed">
                We view our clients as partners, working collaboratively to understand their unique 
                challenges and co-create solutions that drive lasting success.
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-purple-900/50 to-black/40 p-8 rounded-2xl border border-purple-500/30">
              <h3 className="text-2xl font-bold text-white mb-4">Results</h3>
              <p className="text-gray-300 leading-relaxed">
                We are committed to delivering measurable outcomes that create real value and 
                sustainable competitive advantages for our clients.
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-blue-900/50 to-black/40 p-8 rounded-2xl border border-blue-500/30">
              <h3 className="text-2xl font-bold text-white mb-4">Growth</h3>
              <p className="text-gray-300 leading-relaxed">
                We believe in continuous learning and development, both for our team and our clients, 
                fostering an environment of perpetual growth and improvement.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-24 bg-gradient-to-br from-black via-purple-900/10 to-blue-900/20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Leadership Team
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Meet the visionaries driving SummitUSA's mission forward
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center bg-gradient-to-br from-purple-900/30 to-blue-900/20 p-8 rounded-3xl border border-purple-500/20">
              <img
                src="https://readdy.ai/api/search-image?query=Professional%20CEO%20executive%20portrait%2C%20confident%20business%20leader%20in%20dark%20suit%2C%20corporate%20headshot%20with%20purple%20accent%20lighting%2C%20modern%20office%20background%2C%20high-end%20professional%20photography%2C%20sophisticated%20business%20portrait&width=400&height=500&seq=ceo-portrait-1&orientation=portrait"
                alt="Sarah Mitchell - CEO"
                className="w-64 h-80 object-cover object-top rounded-2xl mx-auto mb-6 shadow-2xl"
              />
              <h3 className="text-2xl font-bold text-white mb-2">Sarah Mitchell</h3>
              <p className="text-purple-400 font-semibold mb-4">Chief Executive Officer</p>
              <p className="text-gray-300 leading-relaxed">
                With over 20 years of experience in strategic consulting and business transformation, 
                Sarah leads SummitUSA with a vision for sustainable growth and innovation.
              </p>
            </div>
            
            <div className="text-center bg-gradient-to-br from-blue-900/30 to-purple-900/20 p-8 rounded-3xl border border-blue-500/20">
              <img
                src="https://readdy.ai/api/search-image?query=Professional%20CTO%20technology%20executive%20portrait%2C%20confident%20tech%20leader%20in%20business%20attire%2C%20corporate%20headshot%20with%20blue%20accent%20lighting%2C%20modern%20tech%20office%20background%2C%20high-end%20professional%20photography%2C%20innovative%20business%20portrait&width=400&height=500&seq=cto-portrait-1&orientation=portrait"
                alt="Michael Chen - CTO"
                className="w-64 h-80 object-cover object-top rounded-2xl mx-auto mb-6 shadow-2xl"
              />
              <h3 className="text-2xl font-bold text-white mb-2">Michael Chen</h3>
              <p className="text-blue-400 font-semibold mb-4">Chief Technology Officer</p>
              <p className="text-gray-300 leading-relaxed">
                Michael brings deep technical expertise and innovation leadership, driving our 
                technology strategy and ensuring we stay at the forefront of digital transformation.
              </p>
            </div>
            
            <div className="text-center bg-gradient-to-br from-purple-900/30 to-blue-900/20 p-8 rounded-3xl border border-purple-500/20">
              <img
                src="https://readdy.ai/api/search-image?query=Professional%20COO%20operations%20executive%20portrait%2C%20confident%20business%20operations%20leader%20in%20professional%20attire%2C%20corporate%20headshot%20with%20purple%20accent%20lighting%2C%20modern%20corporate%20office%20background%2C%20high-end%20professional%20photography%2C%20executive%20business%20portrait&width=400&height=500&seq=coo-portrait-1&orientation=portrait"
                alt="Jennifer Rodriguez - COO"
                className="w-64 h-80 object-cover object-top rounded-2xl mx-auto mb-6 shadow-2xl"
              />
              <h3 className="text-2xl font-bold text-white mb-2">Jennifer Rodriguez</h3>
              <p className="text-purple-400 font-semibold mb-4">Chief Operating Officer</p>
              <p className="text-gray-300 leading-relaxed">
                Jennifer oversees our operational excellence and client delivery, ensuring every 
                engagement meets our high standards for quality and client satisfaction.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Office Locations */}
      <section className="py-24 bg-gradient-to-br from-purple-900/20 via-blue-900/20 to-black">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Our Offices Worldwide
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Strategically positioned to serve our global clientele with local expertise
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div className="space-y-8">
              <div className="bg-gradient-to-br from-purple-900/40 to-blue-900/30 p-8 rounded-3xl border border-purple-500/30">
                <div 
                  className="w-full h-48 rounded-2xl mb-6 bg-cover bg-center"
                  style={{
                    backgroundImage: `url('https://readdy.ai/api/search-image?query=Modern%20New%20York%20City%20office%20building%20at%20night%20with%20purple%20and%20blue%20lighting%2C%20Manhattan%20skyline%2C%20corporate%20headquarters%20exterior%2C%20professional%20business%20architecture%2C%20urban%20corporate%20environment&width=600&height=300&seq=ny-office-1&orientation=landscape')`
                  }}
                ></div>
                <h3 className="text-2xl font-bold text-white mb-4">New York Headquarters</h3>
                <p className="text-gray-300 mb-2">1234 Summit Street</p>
                <p className="text-gray-300 mb-4">New York, NY 10001</p>
                <p className="text-gray-400">
                  Our flagship office in Manhattan serves as the global command center for strategic operations.
                </p>
              </div>
              
              <div className="bg-gradient-to-br from-blue-900/40 to-purple-900/30 p-8 rounded-3xl border border-blue-500/30">
                <div 
                  className="w-full h-48 rounded-2xl mb-6 bg-cover bg-center"
                  style={{
                    backgroundImage: `url('https://readdy.ai/api/search-image?query=San%20Francisco%20modern%20tech%20office%20building%20with%20blue%20accent%20lighting%2C%20Silicon%20Valley%20architecture%2C%20contemporary%20corporate%20building%20exterior%2C%20innovation%20hub%20environment&width=600&height=300&seq=sf-office-1&orientation=landscape')`
                  }}
                ></div>
                <h3 className="text-2xl font-bold text-white mb-4">San Francisco Innovation Hub</h3>
                <p className="text-gray-300 mb-2">567 Tech Valley Drive</p>
                <p className="text-gray-300 mb-4">San Francisco, CA 94105</p>
                <p className="text-gray-400">
                  Our West Coast center focuses on emerging technologies and digital transformation.
                </p>
              </div>
            </div>
            
            <div className="rounded-3xl overflow-hidden shadow-2xl">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12091.492959883815!2d-74.005941!3d40.7589!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25855c6480299%3A0x55194ec5a1ae072e!2sNew%20York%2C%20NY!5e0!3m2!1sen!2sus!4v1635959384843!5m2!1sen!2sus"
                width="100%"
                height="600"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
