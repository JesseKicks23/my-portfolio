import React from 'react';
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p className="footer-copyright">&copy; {new Date().getFullYear()} Jesse Hernandez-Tovar. All rights reserved.</p>
        <div className="footer-social-links">
          {}
          <a href="https://www.linkedin.com/in/jesse-hernandez-tovar" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn Profile">
            <FaLinkedin className="footer-icon" />
          </a>
          {}
          <a href="https://github.com/JesseH-T" target="_blank" rel="noopener noreferrer" aria-label="GitHub Profile">
            <FaGithub className="footer-icon" />
          </a>
          {}
          <a href="mailto:jessehernandezt@gmail.com" aria-label="Email Jesse Hernandez-Tovar">
            <FaEnvelope className="footer-icon" />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;