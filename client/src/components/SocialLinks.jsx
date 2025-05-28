// src/components/SocialLinks.jsx
import React from 'react';
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa'; 
import './SocialLinks.css';

function SocialLinks() {
  return (
    <div className="social-links">
      <a href="https://www.linkedin.com/in/jesse-hernandez-tovar" target="_blank" rel="noopener noreferrer">
        <FaLinkedin size={30} />
      </a>
      <a href="https://github.com/your-github-profile" target="_blank" rel="noopener noreferrer">
        <FaGithub size={30} />
      </a>
      <a href="mailto:jessehernandezt@gmail.com">
        <FaEnvelope size={30} />
      </a>
    </div>
  );
}

export default SocialLinks;