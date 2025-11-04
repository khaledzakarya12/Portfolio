import React from "react";
import { FaWhatsapp, FaFacebookF, FaInstagram } from "react-icons/fa";

const SocialIcons = () => (
  <div style={{ display: "flex", gap: "20px", marginTop: "15px" }}>
    <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer" style={{ color: "#25D366" }}>
      <FaWhatsapp size={25} />
    </a>
    <a href="https://facebook.com/yourusername" target="_blank" rel="noopener noreferrer" style={{ color: "#1877F2" }}>
      <FaFacebookF size={25} />
    </a>
    <a href="https://instagram.com/yourusername" target="_blank" rel="noopener noreferrer" style={{ color: "#E1306C" }}>
      <FaInstagram size={25} />
    </a>
  </div>
);

export default SocialIcons;

