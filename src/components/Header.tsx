
import { Link } from "react-router-dom";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="fixed top-0 w-full z-50 bg-black/90 backdrop-blur-sm border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 sm:py-4 flex items-center justify-between">
        <Link to="/" className="flex items-center">
          <img 
            src="/lovable-uploads/5b4c32a0-57f9-4a9a-9716-66ae356fde0f.png" 
            alt="Summit Services Logo" 
            className="h-6 sm:h-8 w-auto"
          />
        </Link>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          <Link to="/" className="text-gray-300 hover:text-purple-400 transition-colors">Home</Link>
          <Link to="/services" className="text-gray-300 hover:text-purple-400 transition-colors">Services</Link>
          <Link to="/about" className="text-gray-300 hover:text-purple-400 transition-colors">About</Link>
          <Link to="/contact" className="text-gray-300 hover:text-purple-400 transition-colors">Contact</Link>
        </nav>
        
        {/* Desktop CTA Button */}
        <button className="hidden md:block bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-2 rounded-full hover:scale-105 transition-all duration-300 text-sm">
          Get Started
        </button>

        {/* Mobile Menu Button */}
        <button 
          onClick={toggleMenu}
          className="md:hidden text-white p-2 rounded-lg hover:bg-gray-800 transition-colors"
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-black/95 backdrop-blur-sm border-t border-gray-800">
          <nav className="px-4 py-4 space-y-4">
            <Link 
              to="/" 
              className="block text-gray-300 hover:text-purple-400 transition-colors py-2 text-lg"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link 
              to="/services" 
              className="block text-gray-300 hover:text-purple-400 transition-colors py-2 text-lg"
              onClick={() => setIsMenuOpen(false)}
            >
              Services
            </Link>
            <Link 
              to="/about" 
              className="block text-gray-300 hover:text-purple-400 transition-colors py-2 text-lg"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            <Link 
              to="/contact" 
              className="block text-gray-300 hover:text-purple-400 transition-colors py-2 text-lg"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
            <button className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-3 rounded-full hover:scale-105 transition-all duration-300 mt-4">
              Get Started
            </button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
