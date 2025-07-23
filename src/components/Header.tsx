
import { Link } from "react-router-dom";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="fixed top-0 w-full z-50 bg-white backdrop-blur-sm border-b border-gray-200 shadow-sm">
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
          <Link to="/" className="text-blue-900 hover:text-blue-700 transition-colors font-medium">Home</Link>
          <Link to="/services" className="text-blue-900 hover:text-blue-700 transition-colors font-medium">What we offer</Link>
          <Link to="/about" className="text-blue-900 hover:text-blue-700 transition-colors font-medium">About</Link>
          <Link to="/contact" className="text-blue-900 hover:text-blue-700 transition-colors font-medium">Contact</Link>
        </nav>
        
        {/* Desktop CTA Button */}
        <button className="hidden md:block bg-gradient-to-r from-orange-500 to-blue-900 text-white px-6 py-2 rounded-full hover:scale-105 transition-all duration-300 text-sm">
          Get Started
        </button>

        {/* Mobile Menu Button */}
        <button 
          onClick={toggleMenu}
          className="md:hidden text-blue-900 p-2 rounded-lg hover:bg-blue-50 transition-colors"
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white backdrop-blur-sm border-t border-gray-200">
          <nav className="px-4 py-4 space-y-4">
            <Link 
              to="/" 
              className="block text-blue-900 hover:text-blue-700 transition-colors py-2 text-lg font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link 
              to="/services" 
              className="block text-blue-900 hover:text-blue-700 transition-colors py-2 text-lg font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              What we offer
            </Link>
            <Link 
              to="/about" 
              className="block text-blue-900 hover:text-blue-700 transition-colors py-2 text-lg font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            <Link 
              to="/contact" 
              className="block text-blue-900 hover:text-blue-700 transition-colors py-2 text-lg font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
            <button className="w-full bg-gradient-to-r from-orange-500 to-blue-900 text-white px-6 py-3 rounded-full hover:scale-105 transition-all duration-300 mt-4">
              Get Started
            </button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
