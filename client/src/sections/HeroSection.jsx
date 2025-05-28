import React from 'react';
import SocialLinks from '../components/SocialLinks'; // Ensure this path is correct
import ResumeDownloadButton from "../components/ResumeDownloadButton"; // Ensure this path is correct
import './HeroSection.css';

function HeroSection() {
  return (
    <section id="home" className="hero-section">
      <div className="hero-content">
        {/* Main Heading */}
        <h1>Jesse Hernandez-Tovar</h1>

        {/* Tagline / Sub-heading */}
        <p className="tagline">Crafting impactful web experiences as a Full-Stack Developer & Software Engineer</p>

        {/* Introduction Paragraph */}
        <p className="intro-text">
          Welcome to my portfolio! I'm passionate about transforming complex ideas into intuitive and robust web applications. I'm constantly learning and eager to contribute to innovative projects that make a difference.
        </p>

        {/* Action Buttons / Social Links */}
        <div className="hero-actions">
            <SocialLinks />
            <ResumeDownloadButton />
        </div>
      </div>
    </section>
  );
}

export default HeroSection;