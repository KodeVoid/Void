function Navbar() {
    return (
      <nav className="w-full px-8 py-4 flex justify-between items-center bg-black/50 backdrop-blur-md text-white font-mono text-xl shadow-md z-50">
        <div className="flex items-center space-x-8">
      
          <a href="/" className="hover:text-green-400 transition-colors duration-200">Home</a>
          <a href="/portfolio" className="hover:text-green-400 transition-colors duration-200">Portfolio</a>
          <a href="/utilities" className="hover:text-green-400 transition-colors duration-200">Utilities</a>
        </div>
        <div className="flex items-center space-x-8">
          <a href="/about" className="hover:text-green-400 transition-colors duration-200">About</a>
          <a href="/contact" className="hover:text-green-400 transition-colors duration-200">Contact</a>
        </div>
      </nav>
    );
  }
  
  export default Navbar;
  