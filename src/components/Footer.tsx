
const Footer = () => {
  return (
    <footer className="bg-black py-16 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div>
            <div className="mb-6">
              <img 
                src="/lovable-uploads/c06908fd-29e6-4b5c-9036-ad02cecd4549.png" 
                alt="Summit Services Logo" 
                className="h-12 w-auto"
              />
            </div>
            <p className="text-gray-400 mb-6">
              Transforming businesses through strategic innovation and peak performance solutions.
            </p>
            <div className="flex space-x-4">
              <div className="w-10 h-10 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full flex items-center justify-center cursor-pointer hover:scale-105 transition-transform">
                <span className="text-white text-sm">f</span>
              </div>
              <div className="w-10 h-10 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full flex items-center justify-center cursor-pointer hover:scale-105 transition-transform">
                <span className="text-white text-sm">in</span>
              </div>
              <div className="w-10 h-10 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full flex items-center justify-center cursor-pointer hover:scale-105 transition-transform">
                <span className="text-white text-sm">t</span>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="text-white font-semibold mb-6">Services</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">Strategic Consulting</a></li>
              <li><a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">Digital Transformation</a></li>
              <li><a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">Business Intelligence</a></li>
              <li><a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">Performance Optimization</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-white font-semibold mb-6">Company</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">About Us</a></li>
              <li><a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">Our Team</a></li>
              <li><a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">Careers</a></li>
              <li><a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">News</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-white font-semibold mb-6">Contact</h3>
            <ul className="space-y-3">
              <li className="text-gray-400">Summit Services Corporation</li>
              <li className="text-gray-400">20511 61st Place West</li>
              <li className="text-gray-400">Lynnwood, WA 98036 (U.S.A)</li>
              <li><a href="tel:+12068410601" className="text-gray-400 hover:text-purple-400 transition-colors">1-206-841-0601 Ext. 101</a></li>
              <li className="text-gray-400">Fax: 1-206-339-4838</li>
              <li><a href="sip:101@Sip.SummitUSA.com" className="text-gray-400 hover:text-purple-400 transition-colors">SIP: 101@Sip.SummitUSA.com</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 text-center">
          <p className="text-gray-400">
            © 2024 Summit Services Corporation. All rights reserved. | Privacy Policy | Terms of Service
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
