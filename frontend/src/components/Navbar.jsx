import { useEffect } from "react";

const Navbar = ({menuOpen,setMenuOpen}) => {
 useEffect(()=>{
 document.body.style.overflow= menuOpen?"hidden":""
 },[menuOpen])

return (
<nav className="fixed top-0 w-full z-40
 bg-gradient-to-r from-purple-800 to-purple-600/20
 backdrop-blur-lg border-b border-white/20 shadow-lg">
<div className="max-w-5xl mx-auto px-4">
<div className="flex justify-between items-center h-16">
<a href="#home" className="text-4xl text-white/90 font-bold tracking-wide">
<span className="animate-flicker">Kode</span>
</a>
<div className="w-10 h-8 relative cursor-pointer z-40 md:hidden" onClick={()=>setMenuOpen((prev)=>!prev)}>
 &#9776;
</div>
<div className="hidden md:flex items-center space-x-8">
<a href="#home" className="text-gray-300 hover:text-white transition-colors">Home</a>
<a href="#about" className="text-gray-300 hover:text-white transition-colors">About</a>
<a href="#projects" className="text-gray-300 hover:text-white transition-colors">Projects</a>
<a href="#contact" className="text-gray-300 hover:text-white transition-colors">Contact</a>
</div>
</div>
</div>
</nav>
 );
};

export default Navbar;