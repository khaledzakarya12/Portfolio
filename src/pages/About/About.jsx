import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Particles from "react-tsparticles";
import "./About.css";

function About() {
  const [isDark, setIsDark] = useState(true);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className={`about ${isDark ? "dark" : "light"}`} id="about">
      {/* Background Particles */}
      <Particles
        className="about-particles"
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
        className="about-content"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: scrollY * 0.1 }}
        transition={{ duration: 1 }}
      >
        <h1 className="about-title">
          About <span>Me</span>
        </h1>
        <p className="about-description">
          Hi! I'm Khaled, a passionate Front-End Developer with experience in building modern, responsive, and user-friendly web interfaces.
          I love designing elegant solutions and bringing creative ideas to life through code. My goal is to craft websites that are functional and visually stunning.
        </p>
        <button className="btn primary" onClick={() => setIsDark(!isDark)}>
          {isDark ? "Switch to Light Mode" : "Switch to Dark Mode"}
        </button>
      </motion.div>

      {/* Image with Particles */}
      <motion.div
        className="about-image-container"
        style={{ y: scrollY * 0.2 }}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
      >
        <Particles
          className="image-particles"
          options={{
            particles: {
              number: { value: 20 },
              color: { value: isDark ? ["#058888","#316fbe"] : ["#316fbe","#058888"] },
              shape: { type: "circle" },
              size: { value: { min: 2, max: 4 } },
              move: { enable: true, speed: 1, outModes: "bounce", random: true },
              opacity: { value: 0.6 },
            },
            interactivity: { events: { onHover: { enable: true, mode: "repulse" } }, modes: { repulse: { distance: 40 } } },
            detectRetina: true
          }}
        />
        <img src="public/images/me.jpeg" alt="About Me" className="about-img" />
      </motion.div>
    </section>
  );
}

export default About;
