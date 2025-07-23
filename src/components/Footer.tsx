import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-black py-12 sm:py-16 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12">
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="mb-6">
              <img 
                src="/lovable-uploads/c06908fd-29e6-4b5c-9036-ad02cecd4549.png" 
                alt="Summit Services Logo" 
                className="h-10 sm:h-12 w-auto"
              />
            </div>
            <p className="text-gray-400 mb-6 text-sm sm:text-base">
              Transforming businesses through strategic innovation and peak performance solutions.
            </p>
            <div className="flex space-x-3 sm:space-x-4">
              <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-r from-orange-500 to-blue-900 rounded-full flex items-center justify-center cursor-pointer hover:scale-105 transition-transform">
                <span className="text-white text-xs sm:text-sm">f</span>
              </div>
              <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-r from-orange-500 to-blue-900 rounded-full flex items-center justify-center cursor-pointer hover:scale-105 transition-transform">
                <span className="text-white text-xs sm:text-sm">in</span>
              </div>
              <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-r from-orange-500 to-blue-900 rounded-full flex items-center justify-center cursor-pointer hover:scale-105 transition-transform">
                <span className="text-white text-xs sm:text-sm">t</span>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="text-white font-semibold mb-4 sm:mb-6 text-base sm:text-lg">Services</h3>
            <ul className="space-y-2 sm:space-y-3">
              <li><a href="#" className="text-gray-400 hover:text-purple-400 transition-colors text-sm sm:text-base">Strategic Consulting</a></li>
              <li><a href="#" className="text-gray-400 hover:text-purple-400 transition-colors text-sm sm:text-base">Digital Transformation</a></li>
              <li><a href="#" className="text-gray-400 hover:text-purple-400 transition-colors text-sm sm:text-base">Business Intelligence</a></li>
              <li><a href="#" className="text-gray-400 hover:text-purple-400 transition-colors text-sm sm:text-base">Performance Optimization</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-white font-semibold mb-4 sm:mb-6 text-base sm:text-lg">Quick Links</h3>
            <ul className="space-y-2 sm:space-y-3">
              <li><Link to="/" className="text-gray-400 hover:text-purple-400 transition-colors text-sm sm:text-base">Home</Link></li>
              <li><Link to="/services" className="text-gray-400 hover:text-purple-400 transition-colors text-sm sm:text-base">Services</Link></li>
              <li><Link to="/about" className="text-gray-400 hover:text-purple-400 transition-colors text-sm sm:text-base">About</Link></li>
              <li><Link to="/contact" className="text-gray-400 hover:text-purple-400 transition-colors text-sm sm:text-base">Contact</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-white font-semibold mb-4 sm:mb-6 text-base sm:text-lg">Contact</h3>
            <ul className="space-y-2 sm:space-y-3 text-sm sm:text-base">
              <li className="text-gray-400">Summit Services Corporation</li>
              <li className="text-gray-400">20511 61st Place West</li>
              <li className="text-gray-400">Lynnwood, WA 98036 (U.S.A)</li>
              <li><a href="tel:+12068410601" className="text-gray-400 hover:text-purple-400 transition-colors">1-206-841-0601 Extension 101</a></li>
              <li className="text-gray-400">Fax: 1-206-339-4838</li>
              <li><a href="sip:101@Sip.SummitUSA.com" className="text-gray-400 hover:text-purple-400 transition-colors break-all">SIP: 101@Sip.SummitUSA.com</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 sm:mt-12 pt-6 sm:pt-8 text-center">
          <p className="text-gray-400 text-sm sm:text-base">
            © 2024 Summit Services Corporation. All rights reserved. | Privacy Policy | Terms of Service
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;