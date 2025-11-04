import React, { useState } from "react";
import { NavLink ,Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

function NavbarPremium() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const toggleMobile = () => setMobileOpen(!mobileOpen);

  const links = [
    { name: "Home", to: "/" },
    { name: "About", to: "/about" },
    { name: "Services", to: "/services" },
    { name: "Contact", to: "/contact" },
    { name: "Projects", to: "/projects" },
     { name: "cv", to: "/cv" }
  ];

  return (
    <nav className="navbar-premium">
      <Link to="/" className="logo-link">
      <div className="logo">Portfolio</div>
</Link>
      {/* Desktop Links */}
      <div className="nav-items desktop">
        {links.map((link) => (
          <NavLink key={link.name} to={link.to} className={({ isActive }) => `item ${isActive ? "item-selected" : ""}`}>
            {link.name}
          </NavLink>
        ))}
      </div>

      {/* Mobile Icon */}
      <div className="mobile-menu-icon" onClick={toggleMobile}>
        {mobileOpen ? <FaTimes size={26} /> : <FaBars size={26} />}
      </div>

      {/* Mobile Menu */}
      <div className={`mobile-dropdown ${mobileOpen ? "open" : ""}`}>
        {links.map((link) => (
          <NavLink
            key={link.name}
            onClick={toggleMobile} // عند الضغط على أي رابط، ترجع أيقونة الـHamburger وتغلق القائمة
            to={link.to}
            className={({ isActive }) => `item ${isActive ? "item-selected" : ""}`}
          >
            {link.name}
          </NavLink>
        ))}
      </div>
    </nav>
  );
}

export default NavbarPremium;
