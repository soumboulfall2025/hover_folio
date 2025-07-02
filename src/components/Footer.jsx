import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-400 py-6 text-center border-t border-gray-800">
      <div className="flex justify-center space-x-6 mb-2 text-xl">
        <a href="mailto:votre.email@mail.com" className="hover:text-cyan-400 transition" aria-label="Email"><i className="fa-solid fa-envelope"></i></a>
        <a href="https://linkedin.com/in/votreprofil" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400 transition" aria-label="LinkedIn"><i className="fa-brands fa-linkedin"></i></a>
        <a href="https://github.com/votreprofil" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400 transition" aria-label="GitHub"><i className="fa-brands fa-github"></i></a>
        <a href="https://wa.me/0000000000" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400 transition" aria-label="WhatsApp"><i className="fa-brands fa-whatsapp"></i></a>
      </div>
      <div className="text-sm">&copy; {new Date().getFullYear()} Momo Dieye. Tous droits réservés.</div>
    </footer>
  );
};

export default Footer;
