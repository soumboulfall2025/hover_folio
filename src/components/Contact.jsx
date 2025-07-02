import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  useEffect(() => {
    AOS.init({ duration: 900, once: true });
  }, []);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Ici, vous pouvez ajouter l'envoi du formulaire (EmailJS, Formspree, etc.)
    alert("Merci pour votre message !");
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="py-20 bg-gray-900 text-white w-full px-0" data-aos="fade-up">
      <div>
        <h2 className="text-3xl font-bold mb-6 text-cyan-400">Contact</h2>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4" data-aos="fade-up" data-aos-delay="100">
          <input
            type="text"
            name="name"
            placeholder="Nom"
            value={form.name}
            onChange={handleChange}
            required
            className="px-4 py-2 rounded bg-gray-800 border border-gray-700 focus:border-cyan-400 outline-none"
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={form.email}
            onChange={handleChange}
            required
            className="px-4 py-2 rounded bg-gray-800 border border-gray-700 focus:border-cyan-400 outline-none"
          />
          <textarea
            name="message"
            placeholder="Message"
            value={form.message}
            onChange={handleChange}
            required
            rows="5"
            className="px-4 py-2 rounded bg-gray-800 border border-gray-700 focus:border-cyan-400 outline-none"
          />
          <button type="submit" className="px-6 py-2 bg-cyan-400 text-gray-900 rounded-full font-semibold hover:bg-cyan-300 transition">Envoyer</button>
        </form>
        <div className="flex justify-center mt-8 space-x-6 text-2xl" data-aos="fade-up" data-aos-delay="200">
          <a href="mailto:absamir2024@gmail.com" className="hover:text-cyan-400 transition" aria-label="Email"><i className="fa-solid fa-envelope"></i></a>
          <a href="https://linkedin.com/in/soumboul-fall-032150235" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400 transition" aria-label="LinkedIn"><i className="fa-brands fa-linkedin"></i></a>
          <a href="https://github.com/soumboulfall2025" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400 transition" aria-label="GitHub"><i className="fa-brands fa-github"></i></a>
          <a href="https://wa.me/221787203975" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400 transition" aria-label="WhatsApp"><i className="fa-brands fa-whatsapp"></i></a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
