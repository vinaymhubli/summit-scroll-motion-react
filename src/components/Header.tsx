
const Header = () => {
  return (
    <header className="fixed top-0 w-full z-50 bg-black/90 backdrop-blur-sm border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="text-2xl font-bold">
          <span className="text-white">Summit</span>
          <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">USA</span>
        </div>
        <nav className="hidden md:flex space-x-8">
          <a href="#" className="text-gray-300 hover:text-purple-400 transition-colors">Home</a>
          <a href="#" className="text-gray-300 hover:text-purple-400 transition-colors">Services</a>
          <a href="#" className="text-gray-300 hover:text-purple-400 transition-colors">About</a>
          <a href="#" className="text-gray-300 hover:text-purple-400 transition-colors">Contact</a>
        </nav>
        <button className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-2 rounded-full hover:scale-105 transition-all duration-300">
          Get Started
        </button>
      </div>
    </header>
  );
};

export default Header;
