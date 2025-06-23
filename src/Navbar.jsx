import { useState } from "react";
import { Menu, X } from "lucide-react"; // optional icon lib
// run: npm install lucide-react

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="fixed top-0 left-0 w-full bg-black h-20 flex items-center justify-between px-6 md:px-20 z-50">
      {/* Logo */}
      <div className="text-white font-bold text-3xl">
        <a href="#home">TechifyINC</a>
      </div>

      {/* Desktop Links */}
      <nav className="hidden md:flex text-white space-x-7 text-lg items-center">
        <a href="#home" className="pt-2">Home</a>
        <a href="#solutions" className="pt-2">Solutions</a>
        <a href="#resources" className="pt-2">Sign in</a>
        <button className="bg-white rounded-lg text-black h-10 px-4 font-bold transition hover:scale-120">Get started</button>
      </nav>

      {/* Mobile Menu Button */}
      <button className="md:hidden text-white" onClick={toggleMenu}>
        {menuOpen ? <X size={28} /> : <Menu size={28} />}
      </button>

      {/* Mobile Menu Panel */}
      {menuOpen && (
        <div className="absolute top-20 left-0 w-full bg-black text-white flex flex-col items-center gap-4 py-6 md:hidden">
          <a href="#home" onClick={toggleMenu}>Home</a>
          <a href="#solutions" onClick={toggleMenu}>Solutions</a>
          <a href="#resources" onClick={toggleMenu}>Sign in</a>
          <button className="bg-white rounded-lg text-black h-10 px-4 font-bold" onClick={toggleMenu}>
            Get started
          </button>
        </div>
      )}
    </header>
  );
}

export default Navbar;
