import React, { useState } from 'react'; // Import useState for managing mobile menu state
import './Navbar.css';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false); // State to manage mobile menu open/close

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav className="navbar" aria-label="Main Navigation">
      <div className="navbar-brand">Jesse Hernandez-Tovar</div>

      {/* Hamburger icon for mobile */}
      <button
        className={`hamburger-menu ${isOpen ? 'active' : ''}`} // Add 'active' class based on isOpen state
        onClick={toggleMenu}
        aria-expanded={isOpen}
        aria-controls="navbar-links"
      >
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </button>

      {/* Navigation links - will be a full-screen overlay on mobile when active */}
      <ul id="navbar-links" className={`navbar-links ${isOpen ? 'active' : ''}`}>
        <li><a href="#home" onClick={closeMenu}>Home</a></li>
        <li><a href="#projects" onClick={closeMenu}>Projects</a></li>
        <li><a href="#experience" onClick={closeMenu}>Experience</a></li>
        <li><a href="#skills" onClick={closeMenu}>Skills</a></li>
        <li><a href="#contact" onClick={closeMenu}>Contact</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;