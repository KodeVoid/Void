export const MobileMenu = ({ menuOpen, setMenuOpen }) => {
  return (
    <div
      className={`fixed inset-0 z-40 flex flex-col items-center justify-center 
        bg-gradient-to-b from-purple-800/30 to-black/40 backdrop-blur-lg
        transition-all duration-300 ease-in-out 
        ${menuOpen ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 -translate-y-full pointer-events-none"}`}
    >
      {/* Close Button */}
      <button
        onClick={() => setMenuOpen(false)}
        className="absolute top-6 right-6 text-white text-4xl focus:outline-none cursor-pointer z-50"
        aria-label="Close menu" 
      >
        &times;
      </button>

      {/* Links */}
      <nav className="flex flex-col items-center space-y-6 text-2xl font-medium">
        <a href="#home" onClick={() => setMenuOpen(false)} className="text-gray-300 hover:text-white transition-colors">
          Home
        </a>
        <a href="#about" onClick={() => setMenuOpen(false)} className="text-gray-300 hover:text-white transition-colors">
          About
        </a>
        <a href="#projects" onClick={() => setMenuOpen(false)} className="text-gray-300 hover:text-white transition-colors">
          Projects
        </a>
        <a href="#contact" onClick={() => setMenuOpen(false)} className="text-gray-300 hover:text-white transition-colors">
          Contact
        </a>
      </nav>
    </div>
  );
};
