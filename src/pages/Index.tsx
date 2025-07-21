
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
              The Future of IT Starts with
              <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent block">
                Predictable, Scalable Support
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 max-w-4xl mx-auto leading-relaxed mb-6">
              Our IT Subscription Program Outperforms Traditional Managed Services
            </p>
            <p className="text-lg text-purple-300 font-semibold mb-10">
              Eliminate Downtime. Cut Confusion. Stop Unexpected IT Costs.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Link 
                to="/contact"
                className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-purple-500/25 whitespace-nowrap"
              >
                Schedule Free Assessment
              </Link>
              <Link 
                to="/services"
                className="border border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 whitespace-nowrap"
              >
                Explore Solutions
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Key Statistics */}
      <section className="py-16 bg-gradient-to-r from-black via-purple-900/20 to-blue-900/20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-6">Stop reacting to IT issues. Start preventing them.</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div className="text-center bg-gradient-to-br from-red-900/30 to-black p-6 rounded-2xl border border-red-500/20">
              <h3 className="text-4xl font-bold text-red-400 mb-2">76%</h3>
              <p className="text-gray-300">of businesses face downtime resulting in data loss</p>
            </div>
            <div className="text-center bg-gradient-to-br from-yellow-900/30 to-black p-6 rounded-2xl border border-yellow-500/20">
              <h3 className="text-4xl font-bold text-yellow-400 mb-2">$150-$500</h3>
              <p className="text-gray-300">lost every minute during IT outages for SMBs</p>
            </div>
            <div className="text-center bg-gradient-to-br from-red-900/30 to-black p-6 rounded-2xl border border-red-500/20">
              <h3 className="text-4xl font-bold text-red-400 mb-2">$100K+</h3>
              <p className="text-gray-300">cost of 60% of IT outages</p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="text-center bg-gradient-to-br from-purple-900/30 to-black p-6 rounded-2xl border border-purple-500/20">
              <h3 className="text-4xl font-bold text-purple-400 mb-2">$8,600+</h3>
              <p className="text-gray-300">monthly cost of internal IT employee</p>
            </div>
            <div className="text-center bg-gradient-to-br from-blue-900/30 to-black p-6 rounded-2xl border border-blue-500/20">
              <h3 className="text-4xl font-bold text-blue-400 mb-2">$250</h3>
              <p className="text-gray-300">average IT budget per employee per month</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why SummitUSA Wins */}
      <section className="py-24 bg-gradient-to-br from-black via-purple-900/10 to-blue-900/20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Why SummitUSA's Subscription Program Wins
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto mb-4">
              Tired of unpredictable IT bills, recurring tech issues, or outdated support models? Our all-inclusive IT subscription program gives you the technology, cybersecurity, strategy, and support you need — all for one predictable cost.
            </p>
            <p className="text-lg text-purple-300 font-semibold">
              No surprises. No patchwork. No headaches.
            </p>
          </div>
          
          {/* Comparison Table */}
          <div className="bg-gradient-to-br from-purple-900/20 to-black p-8 rounded-3xl border border-purple-500/30">
            <h3 className="text-2xl font-bold text-white mb-8 text-center">Why Choose SummitUSA?</h3>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div>
                <h4 className="text-xl font-bold text-red-400 mb-4">Managed IT Services</h4>
                <ul className="space-y-3 text-gray-300">
                  <li>• Charges you for every fix</li>
                  <li>• Solves problems after they occur</li>
                  <li>• Doesn't align with long-term goals</li>
                  <li>• Charges extra for upgrades and strategy</li>
                  <li>• Inconsistent response times</li>
                </ul>
              </div>
              <div>
                <h4 className="text-xl font-bold text-green-400 mb-4">SummitUSA IT Subscription Program</h4>
                <ul className="space-y-3 text-gray-300">
                  <li>• Unlimited support with one monthly fee</li>
                  <li>• Prevents issues before they affect your business</li>
                  <li>• Strategically plans 36–48 months ahead</li>
                  <li>• Upgrades and IT strategy are included</li>
                  <li>• 24/7 expert support guaranteed</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Industry Solutions */}
      <section className="py-24 bg-gradient-to-r from-purple-900/20 via-blue-900/20 to-black">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              The Right IT Support — Built for Your Industry
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Every industry has unique challenges. We help you overcome them with proactive, compliant, secure, and scalable IT solutions.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-purple-900/40 to-black/30 p-6 rounded-2xl border border-purple-500/30 hover:border-purple-500/50 transition-all duration-300">
              <h3 className="text-xl font-bold text-purple-400 mb-3">Healthcare</h3>
              <p className="text-gray-300">HIPAA compliance, secure data, EMR support</p>
            </div>
            <div className="bg-gradient-to-br from-blue-900/40 to-black/30 p-6 rounded-2xl border border-blue-500/30 hover:border-blue-500/50 transition-all duration-300">
              <h3 className="text-xl font-bold text-blue-400 mb-3">Construction</h3>
              <p className="text-gray-300">On-site support, project mobility, data backups</p>
            </div>
            <div className="bg-gradient-to-br from-purple-900/40 to-black/30 p-6 rounded-2xl border border-purple-500/30 hover:border-purple-500/50 transition-all duration-300">
              <h3 className="text-xl font-bold text-purple-400 mb-3">Staffing/Recruiting</h3>
              <p className="text-gray-300">System uptime, secure applicant tracking</p>
            </div>
            <div className="bg-gradient-to-br from-blue-900/40 to-black/30 p-6 rounded-2xl border border-blue-500/30 hover:border-blue-500/50 transition-all duration-300">
              <h3 className="text-xl font-bold text-blue-400 mb-3">Non-Profits</h3>
              <p className="text-gray-300">Budget-friendly solutions with full compliance</p>
            </div>
            <div className="bg-gradient-to-br from-purple-900/40 to-black/30 p-6 rounded-2xl border border-purple-500/30 hover:border-purple-500/50 transition-all duration-300">
              <h3 className="text-xl font-bold text-purple-400 mb-3">Wealth Management</h3>
              <p className="text-gray-300">SEC-compliant systems and cybersecurity</p>
            </div>
            <div className="bg-gradient-to-br from-blue-900/40 to-black/30 p-6 rounded-2xl border border-blue-500/30 hover:border-blue-500/50 transition-all duration-300">
              <h3 className="text-xl font-bold text-blue-400 mb-3">Property Management</h3>
              <p className="text-gray-300">Centralized communication and access</p>
            </div>
            <div className="bg-gradient-to-br from-purple-900/40 to-black/30 p-6 rounded-2xl border border-purple-500/30 hover:border-purple-500/50 transition-all duration-300">
              <h3 className="text-xl font-bold text-purple-400 mb-3">Accounting Firms</h3>
              <p className="text-gray-300">Secure, always-on access to financial data</p>
            </div>
          </div>
        </div>
      </section>

      {/* IT Solutions */}
      <section className="py-24 bg-black">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Explore Our IT Solutions
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We provide the flexibility and depth your organization needs to scale with confidence.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-purple-900/40 to-black/30 p-8 rounded-3xl border border-purple-500/30">
              <div className="text-4xl mb-4">🔐</div>
              <h3 className="text-2xl font-bold text-white mb-4">TotalCare Cloud (Subscription)</h3>
              <p className="text-gray-300">
                All-inclusive support: cybersecurity, strategy, on-site & remote help, backups, new hardware every 3 years — all covered in one monthly subscription.
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-blue-900/40 to-black/30 p-8 rounded-3xl border border-blue-500/30">
              <div className="text-4xl mb-4">🧰</div>
              <h3 className="text-2xl font-bold text-white mb-4">TotalCare (MSP Service)</h3>
              <p className="text-gray-300">
                Traditional managed service with fixed monthly support.
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-purple-900/40 to-black/30 p-8 rounded-3xl border border-purple-500/30">
              <div className="text-4xl mb-4">☁️</div>
              <h3 className="text-2xl font-bold text-white mb-4">Infrastructure as a Service (IaaS)</h3>
              <p className="text-gray-300">
                Virtualize your servers, storage, and network — all managed by SummitUSA.
              </p>
            </div>

            <div className="bg-gradient-to-br from-blue-900/40 to-black/30 p-8 rounded-3xl border border-blue-500/30">
              <div className="text-4xl mb-4">🔒</div>
              <h3 className="text-2xl font-bold text-white mb-4">IT Security</h3>
              <p className="text-gray-300">
                Robust, layered defense with SOC-level monitoring and endpoint protection.
              </p>
            </div>

            <div className="bg-gradient-to-br from-purple-900/40 to-black/30 p-8 rounded-3xl border border-purple-500/30">
              <div className="text-4xl mb-4">✅</div>
              <h3 className="text-2xl font-bold text-white mb-4">IT Compliance</h3>
              <p className="text-gray-300">
                Ensure ongoing compliance across HIPAA, FINRA, GDPR, ISO standards.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Getting Started */}
      <section className="py-24 bg-gradient-to-br from-purple-900/20 to-blue-900/20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Getting Started is Simple
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white text-2xl font-bold">01</span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Schedule a Free IT Assessment</h3>
              <p className="text-gray-300">Let us understand your goals, risks, and current infrastructure.</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white text-2xl font-bold">02</span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Subscribe</h3>
              <p className="text-gray-300">We become your full-time IT department — including helpdesk, compliance, strategy, and updates.</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white text-2xl font-bold">03</span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Migrate & Go</h3>
              <p className="text-gray-300">We'll transition your systems, train your team, and provide ongoing support.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Client Reviews */}
      <section className="py-24 bg-black">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Client Reviews
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-purple-900/40 to-black p-8 rounded-2xl border border-purple-500/30">
              <p className="text-gray-300 mb-6 italic">
                "SummitUSA saved us thousands in IT costs and doubled our uptime. Their team is basically our internal IT department now."
              </p>
              <p className="text-purple-400 font-semibold">– Laura D.</p>
            </div>
            
            <div className="bg-gradient-to-br from-blue-900/40 to-black p-8 rounded-2xl border border-blue-500/30">
              <p className="text-gray-300 mb-6 italic">
                "They're fast, friendly, and laser-focused on keeping our systems secure and efficient."
              </p>
              <p className="text-blue-400 font-semibold">– Michael T.</p>
            </div>
            
            <div className="bg-gradient-to-br from-purple-900/40 to-black p-8 rounded-2xl border border-purple-500/30">
              <p className="text-gray-300 mb-6 italic">
                "Finally — an IT company that plans ahead and talks business goals, not just tech problems."
              </p>
              <p className="text-purple-400 font-semibold">– Sandra V.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-24 bg-gradient-to-r from-purple-900 via-blue-900 to-purple-900">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            We Plan Tech the Way You Plan Growth
          </h2>
          <p className="text-xl text-gray-200 mb-10 leading-relaxed">
            Unlike traditional IT vendors that only look 12 months ahead, our program is built around long-term alignment, with 48-month strategies and quarterly reviews. We align your IT with your mission — not just your inbox tickets.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Link 
              to="/contact"
              className="bg-white text-purple-900 px-12 py-4 rounded-full text-lg font-bold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-2xl whitespace-nowrap"
            >
              Schedule Free Assessment
            </Link>
            <a 
              href="tel:877-329-2129"
              className="border border-white text-white hover:bg-white hover:text-purple-900 px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 whitespace-nowrap"
            >
              Call 877-329-2129
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
