import React, { useState } from 'react'; 
import './Navbar.css';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false); 

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
        className={`hamburger-menu ${isOpen ? 'active' : ''}`} 
        onClick={toggleMenu}
        aria-expanded={isOpen}
        aria-controls="navbar-links"
      >
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </button>

      {}
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