import React from "react";

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-b from-gray-900 to-gray-800 text-white pt-24 w-full px-0">
      <img
        src="/src/assets/profile.jpg" // Remplacez par votre image
        alt="Profil Soumboul Fall"
        className="w-40 h-40 rounded-full object-cover border-4 border-cyan-400 shadow-lg mb-6"
      />
      <h1 className="text-4xl md:text-6xl font-extrabold mb-2">Soumboul Fall</h1>
      <h2 className="text-2xl md:text-3xl font-semibold text-cyan-400 mb-4">Développeur Full Stack MERN</h2>
      <p className="text-lg md:text-xl mb-8 text-center max-w-xl">
        Passionné par le développement web moderne, j'utilise la stack MERN pour créer des applications performantes et élégantes.
      </p>
      <div className="flex flex-wrap justify-center gap-4">
        <a href="#contact" className="px-6 py-2 bg-cyan-400 text-gray-900 rounded-full font-semibold hover:bg-cyan-300 transition">Me Contacter</a>
        <a href="/cv.pdf" download className="px-6 py-2 border border-cyan-400 rounded-full font-semibold hover:bg-cyan-400 hover:text-gray-900 transition">Télécharger mon CV</a>
        <a href="/diplome-gomycode.pdf" download className="px-6 py-2 border border-green-400 rounded-full font-semibold text-green-400 hover:bg-green-400 hover:text-gray-900 transition">Diplôme GoMyCode</a>
      </div>
    </section>
  );
};

export default Hero;
