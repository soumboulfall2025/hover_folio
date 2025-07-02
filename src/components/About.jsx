import React from "react";

const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-900 text-white w-full px-0">
      <div className="flex flex-col items-center justify-center">
        <h2 className="text-3xl font-bold mb-6 text-cyan-400">À propos</h2>
        <p className="mb-6 text-lg text-center max-w-2xl">
          Développeur passionné, j’aime concevoir des applications web modernes,
          performantes et accessibles. J’ai une forte appétence pour les technologies
          récentes et l’expérience utilisateur.
        </p>
        <h3 className="text-xl font-semibold mb-4">Technologies principales :</h3>
        <ul className="flex flex-wrap justify-center gap-4">
          <li className="bg-gray-800 px-6 py-2 rounded-full shadow-lg text-cyan-400 font-semibold text-lg hover:scale-110 hover:bg-cyan-900 transition-all duration-300">HTML</li>
          <li className="bg-gray-800 px-6 py-2 rounded-full shadow-lg text-cyan-400 font-semibold text-lg hover:scale-110 hover:bg-cyan-900 transition-all duration-300">CSS</li>
          <li className="bg-gray-800 px-6 py-2 rounded-full shadow-lg text-cyan-400 font-semibold text-lg hover:scale-110 hover:bg-cyan-900 transition-all duration-300">JavaScript</li>
          <li className="bg-gray-800 px-6 py-2 rounded-full shadow-lg text-cyan-400 font-semibold text-lg hover:scale-110 hover:bg-cyan-900 transition-all duration-300">React</li>
          <li className="bg-gray-800 px-6 py-2 rounded-full shadow-lg text-cyan-400 font-semibold text-lg hover:scale-110 hover:bg-cyan-900 transition-all duration-300">Node.js</li>
          <li className="bg-gray-800 px-6 py-2 rounded-full shadow-lg text-cyan-400 font-semibold text-lg hover:scale-110 hover:bg-cyan-900 transition-all duration-300">MongoDB</li>
        </ul>
      </div>
    </section>
  );
};

export default About;
