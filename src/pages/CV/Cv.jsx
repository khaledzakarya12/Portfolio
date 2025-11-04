import React from "react";
import { motion } from "framer-motion";

const Resume = () => {
  return (
    <div className="resume">
      <motion.div
        className="resume-container"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        {/* ===== Header ===== */}
        <header className="resume-header">
          <motion.div
            className="profile-image"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <img src="public/images/me.jpeg" alt="Profile" />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            Khàléd Zàkàrÿa
          </motion.h1>
          <p>Front-End Developer — Creating elegant, responsive web experiences.</p>
        </header>

        {/* ===== Education ===== */}
        <section className="resume-section">
          <h2>🎓 Education</h2>
          <p>Technical School of IT Management — TS2 (2025–2026)</p>
        </section>

        {/* ===== Experience ===== */}
        <section className="resume-section">
          <h2>💼 Experience</h2>
          <div className="resume-card">
            <h3>Front-End Developer</h3>
            <p>
              Building modern, responsive UIs using <span>React</span>, <span>Firebase</span>, and <span>CSS</span>.
            </p>
          </div>
          <div className="resume-card">
            <h3>UI/UX Designer</h3>
            <p>Designing smooth, modern interfaces with a focus on clarity and usability.</p>
          </div>
        </section>

        {/* ===== Skills ===== */}
        <section className="resume-section">
          <h2>⚙️ Skills</h2>
          <ul className="skills">
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>React</li>
            <li>Firebase</li>
            <li>Git & GitHub</li>
          </ul>
        </section>

        {/* ===== Languages ===== */}
        <section className="resume-section">
          <h2>🌐 Languages</h2>
          <ul>
            <li>Arabic — Native</li>
            <li>English — Intermediate</li>
          </ul>
        </section>

        {/* ===== Download CV ===== */}
        <div className="resume-download">
          <a href="/cv.pdf" download>Download CV</a>
        </div>
      </motion.div>
    </div>
  );
};

export default Resume;
