
const Footer = () => {
  return (
    <footer className="bg-black py-16 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div>
            <div className="text-2xl font-bold mb-6">
              <span className="text-white">Summit</span>
              <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">USA</span>
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
              <li className="text-gray-400">1234 Summit Street</li>
              <li className="text-gray-400">New York, NY 10001</li>
              <li><a href="tel:+1234567890" className="text-gray-400 hover:text-purple-400 transition-colors">+1 (234) 567-8900</a></li>
              <li><a href="mailto:info@summitusa.com" className="text-gray-400 hover:text-purple-400 transition-colors">info@summitusa.com</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 text-center">
          <p className="text-gray-400">
            © 2024 SummitUSA. All rights reserved. | Privacy Policy | Terms of Service
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
