import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const projects = [
  {
    title: "Portfolio Moderne",
    image: "/portfolio.PNG", // Remplacez par vos images
    description: "Un portfolio responsive et élégant avec React et Tailwind CSS.",
    demo: "#",
    code: "https://github.com/soumboulfall2025/portofolio_dev.git"
  },
  {
    title: "App de Tâches",
    image: "/todo.avif",
    description: "Application de gestion de tâches avec React et MongoDB.",
    demo: "#",
    code: "https://github.com/soumboulfall2025/blog.git"
  },
  {
    title: "Ecommerce App",
    image: "/ecommerce.jpeg", // Ajoutez une image correspondante dans assets
    description: "Application e-commerce MERN complète avec gestion des produits et paiements.",
    demo: "#",
    code: "https://github.com/soumboulfall2025/sunubio.git"
  },
  {
    title: "Application Météo",
    image: "/meteo.avif", // Ajoutez une image correspondante dans assets
    description: "Application météo moderne avec React et API météo.",
    demo: "#",
    code: "https://github.com/soumboulfall2025/appliMeteo.git"
  },
  {
    title: "RAP 2 RUE",
    image: "/react.jpeg", // Ajoutez une image correspondante dans assets
    description: "La plateforme musicale pour les artistes et les fans.",
    demo: "#",
    code: "https://github.com/soumboulfall2025/rap2rue.git"
  },
  // Ajoutez d'autres projets ici
];

const Projects = () => {
  useEffect(() => {
    AOS.init({ duration: 900, once: true });
  }, []);
  
  return (
    <section id="projects" className="py-20 bg-gray-800 text-white w-full px-0">
      <div>
        <h2 className="text-3xl font-bold mb-10 text-cyan-400" data-aos="fade-up">Projets</h2>
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className="bg-gray-900 rounded-lg shadow-lg overflow-hidden hover:scale-105 transition-transform"
              data-aos="zoom-in-up"
            >
              <img src={project.image} alt={project.title} className="w-full h-48 object-cover object-top sm:h-40" />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="mb-4 text-gray-300">{project.description}</p>
                <div className="flex space-x-4">
                  <a href={project.demo} target="_blank" rel="noopener noreferrer" className="px-4 py-2 bg-cyan-400 text-gray-900 rounded-full font-semibold hover:bg-cyan-300 transition">Live Demo</a>
                  <a href={project.code} target="_blank" rel="noopener noreferrer" className="px-4 py-2 border border-cyan-400 rounded-full font-semibold hover:bg-cyan-400 hover:text-gray-900 transition">Code</a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
