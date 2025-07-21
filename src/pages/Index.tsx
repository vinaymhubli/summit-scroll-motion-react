
import { Link } from "react-router-dom";
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Index() {
  return (
    <div className="min-h-screen bg-black">
      <Header />
      
      {/* Hero Section */}
      <section className="relative pt-24 pb-16 bg-gradient-to-br from-purple-900 via-blue-900 to-black overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=\"60\" height=\"60\" viewBox=\"0 0 60 60\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cg fill=\"none\" fill-rule=\"evenodd\"%3E%3Cg fill=\"%239C92AC\" fill-opacity=\"0.05\"%3E%3Ccircle cx=\"30\" cy=\"30\" r=\"2\"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 leading-tight">
              Transform Your Business with
              <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent block">
                Next-Generation Solutions
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 max-w-4xl mx-auto leading-relaxed mb-6">
              Unlock your organization&apos;s full potential with our comprehensive suite of strategic consulting and technology solutions
            </p>
            <p className="text-lg text-purple-300 font-semibold mb-10">
              Drive Growth. Optimize Performance. Lead Your Industry.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Link 
                to="/contact"
                className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-purple-500/25 whitespace-nowrap"
              >
                Get Started Today
              </Link>
              <Link 
                to="/services"
                className="border border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 whitespace-nowrap"
              >
                Explore Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Key Benefits */}
      <section className="py-16 bg-gradient-to-r from-black via-purple-900/20 to-blue-900/20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-6">Why Leading Companies Choose SummitUSA</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center bg-gradient-to-br from-purple-900/30 to-black p-6 rounded-2xl border border-purple-500/20">
              <h3 className="text-4xl font-bold text-purple-400 mb-2">10x</h3>
              <p className="text-gray-300">Faster decision-making with data-driven insights</p>
            </div>
            <div className="text-center bg-gradient-to-br from-blue-900/30 to-black p-6 rounded-2xl border border-blue-500/20">
              <h3 className="text-4xl font-bold text-blue-400 mb-2">50%</h3>
              <p className="text-gray-300">Reduction in operational costs through optimization</p>
            </div>
            <div className="text-center bg-gradient-to-br from-purple-900/30 to-black p-6 rounded-2xl border border-purple-500/20">
              <h3 className="text-4xl font-bold text-purple-400 mb-2">99.9%</h3>
              <p className="text-gray-300">Client satisfaction rate across all services</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-24 bg-gradient-to-br from-black via-purple-900/10 to-blue-900/20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Comprehensive Solutions for Modern Business
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto mb-4">
              From strategic planning to digital transformation, we provide end-to-end solutions that drive measurable results and sustainable growth.
            </p>
            <p className="text-lg text-purple-300 font-semibold">
              Your success is our mission.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-purple-900/40 to-black/30 p-8 rounded-3xl border border-purple-500/30">
              <div className="text-4xl mb-4">🚀</div>
              <h3 className="text-2xl font-bold text-white mb-4">Strategic Consulting</h3>
              <p className="text-gray-300">
                Transform your business strategy with expert guidance, market analysis, and growth planning tailored to your industry.
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-blue-900/40 to-black/30 p-8 rounded-3xl border border-blue-500/30">
              <div className="text-4xl mb-4">💡</div>
              <h3 className="text-2xl font-bold text-white mb-4">Digital Innovation</h3>
              <p className="text-gray-300">
                Leverage cutting-edge technology to modernize operations, enhance customer experience, and stay ahead of competition.
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-purple-900/40 to-black/30 p-8 rounded-3xl border border-purple-500/30">
              <div className="text-4xl mb-4">📊</div>
              <h3 className="text-2xl font-bold text-white mb-4">Data Analytics</h3>
              <p className="text-gray-300">
                Turn data into actionable insights with advanced analytics, reporting, and business intelligence solutions.
              </p>
            </div>

            <div className="bg-gradient-to-br from-blue-900/40 to-black/30 p-8 rounded-3xl border border-blue-500/30">
              <div className="text-4xl mb-4">⚡</div>
              <h3 className="text-2xl font-bold text-white mb-4">Process Optimization</h3>
              <p className="text-gray-300">
                Streamline operations, eliminate inefficiencies, and maximize productivity across all business functions.
              </p>
            </div>

            <div className="bg-gradient-to-br from-purple-900/40 to-black/30 p-8 rounded-3xl border border-purple-500/30">
              <div className="text-4xl mb-4">🎯</div>
              <h3 className="text-2xl font-bold text-white mb-4">Performance Management</h3>
              <p className="text-gray-300">
                Implement robust performance tracking systems to measure success and drive continuous improvement.
              </p>
            </div>

            <div className="bg-gradient-to-br from-blue-900/40 to-black/30 p-8 rounded-3xl border border-purple-500/30">
              <div className="text-4xl mb-4">🌟</div>
              <h3 className="text-2xl font-bold text-white mb-4">Change Management</h3>
              <p className="text-gray-300">
                Navigate organizational transformation smoothly with expert change management and leadership development.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-24 bg-gradient-to-r from-purple-900 via-blue-900 to-purple-900">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-gray-200 mb-10 leading-relaxed">
            Join the companies that have already discovered the SummitUSA advantage. Let&apos;s discuss how we can accelerate your success and drive meaningful results for your organization.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Link 
              to="/contact"
              className="bg-white text-purple-900 px-12 py-4 rounded-full text-lg font-bold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-2xl whitespace-nowrap"
            >
              Start Your Transformation
            </Link>
            <Link 
              to="/services"
              className="border border-white text-white hover:bg-white hover:text-purple-900 px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 whitespace-nowrap"
            >
              Learn More
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
