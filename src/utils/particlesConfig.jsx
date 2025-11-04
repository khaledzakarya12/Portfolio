export const particlesConfig = (isDark) => ({
  background: { color: isDark ? "#0f0f15" : "#f5f5f5" },
  fpsLimit: 60,
  interactivity: {
    events: {
      onHover: { enable: true, mode: "repulse" },
      onClick: { enable: true, mode: "push" },
    },
    modes: { repulse: { distance: 100 }, push: { quantity: 3 } },
  },
  particles: {
    color: { value: isDark ? ["#058888", "#316fbe"] : ["#316fbe", "#058888"] },
    links: {
      enable: true,
      color: "#ffffff",
      distance: 150,
      opacity: 0.15,
      width: 1,
    },
    move: { enable: true, speed: 1, random: true, outModes: "bounce" },
    number: { value: 45, density: { enable: true, area: 900 } },
    opacity: { value: 0.5 },
    shape: { type: "circle" },
    size: { value: { min: 2, max: 5 } },
  },
  detectRetina: true,
});