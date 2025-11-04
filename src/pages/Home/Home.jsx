import React, { useState, useEffect, useCallback } from "react";
import { motion, useAnimation } from "framer-motion";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import { Typewriter } from "react-simple-typewriter";
import { FaWhatsapp, FaFacebookF, FaInstagram, FaGithub } from "react-icons/fa";
import { particlesConfig } from "../../utils/particlesConfig";
import { Link } from "react-router-dom";
import "./Home.css";

function Home() {
  const [isDark, setIsDark] = useState(true);
  const [scrollY, setScrollY] = useState(0);
  const controls = useAnimation();

  const handleScroll = useCallback(() => {
    setScrollY(window.scrollY);
    controls.start({ y: window.scrollY * 0.3 });
  }, [controls]);

  useEffect(() => {
    let ticking = false;
    const throttledScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener("scroll", throttledScroll);
    return () => window.removeEventListener("scroll", throttledScroll);
  }, [handleScroll]);

  const particlesInit = async (main) => {
    await loadFull(main);
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 1, ease: "easeOut" } },
  };

  return (
    <motion.section
      className={`home ${isDark ? "dark" : "light"}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.2 }}
    >
      <Particles id="tsparticles" init={particlesInit} options={particlesConfig(isDark)} />

      <motion.div
        className="home-content glass"
        variants={fadeInUp}
        initial="hidden"
        animate="visible"
        transition={{ duration: 1, delay: 0.3 }}
      >
        <motion.h1 className="title" variants={fadeInUp} initial="hidden" animate="visible" transition={{ duration: 1, delay: 0.4 }}>
          Hi, I'm <span>Khaled Zakarya</span>
        </motion.h1>

        <motion.h2
          className="subtitle"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <Typewriter
            words={["Front-End Developer", "React Enthusiast", "UI/UX Designer", "Firebase Integrator"]}
            loop={0}
            cursor
            cursorStyle="|"
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1500}
          />
        </motion.h2>

        <motion.p
          className="description"
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          transition={{ duration: 1, delay: 0.7 }}
        >
          I build modern, responsive websites with React — clean code, smooth animations, and a beautiful user experience.
        </motion.p>

        <motion.div
          className="social-icons"
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          transition={{ duration: 1, delay: 1.1 }}
        >
          <a href="https://wa.me/96181045312" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" className="social-link glass-btn">
            <FaWhatsapp />
          </a>
          <a href="https://facebook.com/khaledzakarya" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="social-link glass-btn">
            <FaFacebookF />
          </a>
          <a href="https://instagram.com/khaled_zakarya13" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="social-link glass-btn">
            <FaInstagram />
          </a>
          <a href="https://github.com/khaledzakarya12" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="social-link glass-btn">
            <FaGithub />
          </a>
        </motion.div>

        <motion.div
          className="buttons"
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          transition={{ duration: 1, delay: 1.3 }}
        >
          <button className="btn primary glass-btn" onClick={() => setIsDark(!isDark)}>
            {isDark ? "Light Mode" : "Dark Mode"}
          </button>
          <Link to="/projects" className="btn secondary glass-btn">
            View Projects
          </Link>
        </motion.div>
      </motion.div>

      <motion.div
        className="image-container"
        style={{ y: scrollY * 0.5 }}
        initial={{ opacity: 0, scale: 0.8, x: 50 }}
        animate={{ opacity: 1, scale: 1, x: 0 }}
        transition={{ delay: 1, duration: 1 }}
      >
        <div className="rotating-circle"></div>
        <img src="/images/me.jpeg" alt="Profile" className="profile-img" />
      </motion.div>
    </motion.section>
  );
}

export default Home;
