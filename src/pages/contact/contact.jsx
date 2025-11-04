import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Particles from "react-tsparticles";
import emailjs from "emailjs-com";



function Contact() {
  const [isDark, setIsDark] = useState(true);
  const [scrollY, setScrollY] = useState(0);
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.send(
      "service_zfv97br",       // ضع هنا Service ID من EmailJS
      "template_mk3p0lb",      // ضع هنا Template ID
      formData,
      "lZOM•••••••••••••••••"        // ضع هنا Public Key
    ).then(
      (result) => {
        alert(`Thanks, ${formData.name}! Your message has been sent.`);
        setFormData({ name: "", email: "", message: "" });
      },
      (error) => {
        alert("Oops! Something went wrong. Please try again.");
      }
    );
  };

  return (
    <section className={`contact ${isDark ? "dark" : "light"}`} id="contact">
      {/* Background Particles */}
      <Particles
        className="contact-particles"
        options={{
          background: { color: isDark ? "#0f0f15" : "#f5f5f5" },
          fpsLimit: 60,
          interactivity: {
            events: { onHover: { enable: true, mode: "repulse" }, onClick: { enable: true, mode: "push" } },
            modes: { repulse: { distance: 120 }, push: { quantity: 4 } },
          },
          particles: {
            color: { value: isDark ? ["#058888","#316fbe"] : ["#316fbe","#058888"] },
            links: { enable: true, color: "#fff", distance: 150, opacity: 0.15, width: 1 },
            move: { enable: true, speed: 1, outModes: "bounce", random: true },
            number: { density: { enable: true, area: 800 }, value: 50 },
            opacity: { value: 0.5 },
            shape: { type: "circle" },
            size: { value: { min: 2, max: 5 } },
          },
          detectRetina: true,
        }}
      />

      {/* Text Content */}
      <motion.div
        className="contact-content"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: scrollY * 0.1 }}
        transition={{ duration: 1 }}
      >
        <h1 className="contact-title">Get in <span>Touch</span></h1>
        <p className="contact-description">
          Have a project in mind or just want to say hi? Send me a message and I will get back to you as soon as possible.
        </p>

        <form className="contact-form" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <textarea
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            required
          />
          <button type="submit" className="btn primary">Send Message</button>
        </form>

        <button className="btn secondary" onClick={() => setIsDark(!isDark)}>
          {isDark ? "Switch to Light Mode" : "Switch to Dark Mode"}
        </button>
      </motion.div>

      {/* Side Image */}
      <motion.div
        className="contact-image-container"
        style={{ y: scrollY * 0.2 }}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
      >
        <img src="/contact-image.png" alt="Contact" className="contact-img" />
      </motion.div>
    </section>
  );
}

export default Contact;
