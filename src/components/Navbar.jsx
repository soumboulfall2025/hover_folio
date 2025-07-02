import React, { useState } from "react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenu = () => setMenuOpen(!menuOpen);

  return (
    <nav className="fixed inset-x-0 top-0 w-full z-50 bg-gradient-to-b from-gray-900 to-transparent text-white shadow-lg">
      <div className="w-full px-4 py-3 flex justify-between items-center">
        <div className="text-xl md:text-2xl font-bold tracking-tight whitespace-nowrap">Soumboul Fall</div>
        <ul className="hidden md:flex flex-1 justify-end items-center space-x-4 text-base min-w-0">
          <li><a href="#home" className="hover:text-cyan-400 transition scroll-smooth">Accueil</a></li>
          <li><a href="#about" className="hover:text-cyan-400 transition scroll-smooth">À propos</a></li>
          <li><a href="#projects" className="hover:text-cyan-400 transition scroll-smooth">Projets</a></li>
          <li><a href="#contact" className="hover:text-cyan-400 transition scroll-smooth">Contact</a></li>
        </ul>
        {/* Menu mobile */}
        <button
          className={
            "md:hidden text-2xl focus:outline-none p-2 rounded-full border-2 border-cyan-400 bg-gray-900 text-cyan-400 hover:bg-cyan-400 hover:text-gray-900 transition"
          }
          onClick={handleMenu}
          aria-label="Ouvrir le menu"
        >
          <i className={menuOpen ? "fa-solid fa-xmark" : "fa-solid fa-bars"}></i>
        </button>
      </div>
      {/* Mobile menu */}
      {menuOpen && (
        <ul className="md:hidden flex flex-col items-center bg-gray-900/95 py-6 space-y-6 text-lg shadow-lg animate-fade-in-down">
          <li><a href="#home" className="hover:text-cyan-400 transition scroll-smooth" onClick={handleMenu}>Accueil</a></li>
          <li><a href="#about" className="hover:text-cyan-400 transition scroll-smooth" onClick={handleMenu}>À propos</a></li>
          <li><a href="#projects" className="hover:text-cyan-400 transition scroll-smooth" onClick={handleMenu}>Projets</a></li>
          <li><a href="#contact" className="hover:text-cyan-400 transition scroll-smooth" onClick={handleMenu}>Contact</a></li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
