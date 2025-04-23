import { useState } from 'react';
import { Menu, X } from 'lucide-react';

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="w-full px-4 py-3 flex flex-wrap justify-between items-center bg-black/50 backdrop-blur-md text-white font-mono text-lg shadow-md z-50 relative md:px-8 md:py-4 md:text-xl">
      {/* Logo/Brand - Always visible */}
      <div className="flex items-center">
        <a href="/" className="font-bold">Void</a>
      </div>

      {/* Mobile menu button */}
      <button 
        className="block md:hidden p-2 focus:outline-none" 
        onClick={toggleMenu}
        aria-label="Toggle navigation menu"
      >
        {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Navigation links - Responsive */}
      <div 
        className={`${
          isMenuOpen ? 'flex' : 'hidden'
        } w-full flex-col mt-4 space-y-4 md:flex md:flex-row md:items-center md:w-auto md:space-y-0 md:space-x-8 md:mt-0`}
      >
        <a href="/" className="hover:text-green-400 transition-colors duration-200">Home</a>
        <a href="/portfolio" className="hover:text-green-400 transition-colors duration-200">Portfolio</a>
        <a href="/utilities" className="hover:text-green-400 transition-colors duration-200">Utilities</a>
        <a href="/about" className="hover:text-green-400 transition-colors duration-200">About</a>
        <a href="/contact" className="hover:text-green-400 transition-colors duration-200">Contact</a>
      </div>
    </nav>
  );
}

export default Navbar;