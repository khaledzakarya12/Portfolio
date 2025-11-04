import React, { useEffect } from "react";
import { motion } from "framer-motion";
import Particles from "react-tsparticles";
import { Howl } from "howler";


// Hover sound
const hoverSound = new Howl({
  src: ['/hover-sound.mp3'], // ضع مسار الصوت داخل public
  volume: 0.2
});

// Projects data
const projects = [
  {
    title: "News Website",
description: "Up-to-date, responsive, and professional news website covering latest events.",
    image: "public/images/fnaydk-live(1).png",
    link: "https://fnaydk.live/",
  },
  {
   title: "Electronics Store",
description: "Modern and user-friendly online store selling smartphones, laptops, and accessories.",
    image: "public/images/store.jpeg",
    link: "https://khaledproject-a4a7c.web.app"
  },
  {
    title: "Demo Project",
description: "An experimental and creative project built to test ideas, designs, and new technologies.",
    image: "public/images/website.jpg",
    link: "https://website-shopping-11b75.web.app/"
  },
  {
    title: "Portfolio Website",
description: "Modern, responsive, and elegant personal portfolio showcasing my projects and skills.",
    image: "public/images/portfolio.png",
    link: "#"
  }
];

function ProjectsEnhanced() {
  useEffect(() => {
    // Intersection Observer لكل Card
    const cards = document.querySelectorAll(".project-card");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
          }
        });
      },
      { threshold: 0.2 }
    );
    cards.forEach(card => observer.observe(card));
  }, []);

  return (
    <section className="projects-enhanced" id="projects">
      {/* Background Particles */}
      <Particles
        className="particles"
        options={{
          background: { color: "#0f0f15" },
          fpsLimit: 60,
          interactivity: {
            events: { onHover: { enable: true, mode: "repulse" }, onClick: { enable: true, mode: "push" } },
            modes: { repulse: { distance: 120 }, push: { quantity: 4 } }
          },
          particles: {
            color: { value: ["#00f2fe", "#ff4b2b"] },
            links: { enable: true, color: "#fff", distance: 150, opacity: 0.2, width: 1 },
            move: { enable: true, speed: 1, outModes: "bounce" },
            number: { value: 60, density: { enable: true, area: 800 } },
            opacity: { value: 0.5 },
            shape: { type: "circle" },
            size: { value: { min: 2, max: 5 } }
          },
          detectRetina: true
        }}
      />

      <motion.h1
        className="projects-title"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        My Projects
      </motion.h1>

      <div className="projects-grid">
        {projects.map((project, index) => (
          <motion.a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="project-card"
            key={index}
            onMouseEnter={() => hoverSound.play()}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <img src={project.image} alt={project.title} className="project-img" />
            <div className="project-info">
              <h2>{project.title}</h2>
              <p>{project.description}</p>
            </div>
          </motion.a>
        ))}
      </div>
    </section>
  );
}

export default ProjectsEnhanced;
