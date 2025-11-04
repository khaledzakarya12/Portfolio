import React, { useEffect } from "react";
import Particles from "react-tsparticles";
import { FaLaptopCode, FaDatabase, FaRobot, FaMobileAlt } from "react-icons/fa";
import { Howl } from "howler";

// Hover sound effect
const hoverSound = new Howl({
  src: ['/hover-sound.mp3'], // Place the sound file in public folder
  volume: 0.2
});

// Your personal services
const services = [
  {
    icon: <FaLaptopCode />,
    title: "Web Development",
    description: "Design and build modern, responsive, and high-performance websites using HTML, CSS, JavaScript, and React."
  },
  {
    icon: <FaDatabase />,
    title: "Firebase Integration",
    description: "Setup databases, authentication, and deploy apps efficiently on Firebase."
  },
  {
    icon: <FaRobot />,
    title: "Artificial Intelligence",
    description: "Implement AI solutions to enhance functionality and provide innovative features."
  },
  {
    icon: <FaMobileAlt />,
    title: "Responsive & Mobile Apps",
    description: "Design responsive interfaces and deliver excellent user experience on mobile and tablet devices."
  }
];

function Service() {
  useEffect(() => {
    const cards = document.querySelectorAll(".service-card");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) entry.target.classList.add("show");
        });
      },
      { threshold: 0.2 }
    );
    cards.forEach(card => observer.observe(card));
  }, []);

  return (
    <section className="service-section">
      {/* Background Particles */}
      <Particles
        className="particles"
        options={{
          background: { color: "#0f0f15" },
          fpsLimit: 60,
          interactivity: {
            events: {
              onHover: { enable: true, mode: "repulse" },
              onClick: { enable: true, mode: "push" }
            },
            modes: { repulse: { distance: 120 }, push: { quantity: 4 } }
          },
          particles: {
            color: { value: ["#ff4b2b", "#00f2fe", "#ffb347"] },
            links: { enable: true, color: "#fff", distance: 150, opacity: 0.2, width: 1 },
            move: { enable: true, speed: 1, outModes: "bounce" },
            number: { value: 60 },
            opacity: { value: 0.5 },
            shape: { type: "circle" },
            size: { value: { min: 2, max: 5 } }
          },
          detectRetina: true
        }}
      />

      <div className="service-header">
        <h1>My Skills & Services</h1>
        <p>These are some of the skills and services I offer using modern technologies.</p>
      </div>

      <div className="service-grid">
        {services.map((service, index) => (
          <div
            className="service-card"
            key={index}
            onMouseEnter={() => hoverSound.play()}
          >
            <Particles
              className="card-particles"
              options={{
                particles: {
                  color: { value: ["#ff4b2b", "#00f2fe"] },
                  links: { enable: true, color: "#fff", distance: 80, opacity: 0.2, width: 1 },
                  number: { value: 20 },
                  move: { enable: true, speed: 1, outModes: "bounce" },
                  size: { value: { min: 1, max: 3 } },
                  opacity: { value: 0.5 }
                },
                interactivity: {
                  events: { onHover: { enable: true, mode: "repulse" } },
                  modes: { repulse: { distance: 50 } }
                },
                detectRetina: true
              }}
            />
            <div className="service-icon">{service.icon}</div>
            <h2>{service.title}</h2>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Service;
