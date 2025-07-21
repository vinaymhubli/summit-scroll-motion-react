
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="fixed top-0 w-full z-50 bg-black/90 backdrop-blur-sm border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link to="/" className="flex items-center">
          <img 
            src="/lovable-uploads/5b4c32a0-57f9-4a9a-9716-66ae356fde0f.png" 
            alt="Summit Services Logo" 
            className="h-8 w-auto"
          />
        </Link>
        <nav className="hidden md:flex space-x-8">
          <Link to="/" className="text-gray-300 hover:text-purple-400 transition-colors">Home</Link>
          <Link to="/services" className="text-gray-300 hover:text-purple-400 transition-colors">Services</Link>
          <Link to="/about" className="text-gray-300 hover:text-purple-400 transition-colors">About</Link>
          <Link to="/contact" className="text-gray-300 hover:text-purple-400 transition-colors">Contact</Link>
        </nav>
        <button className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-2 rounded-full hover:scale-105 transition-all duration-300">
          Get Started
        </button>
      </div>
    </header>
  );
};

export default Header;
