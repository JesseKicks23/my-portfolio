// src/App.jsx
import React from 'react';
import Navbar from './components/Navbar';
import HeroSection from './sections/HeroSection';
import ProjectsSection from './sections/ProjectsSection'; // Import
import ExperienceSection from "./sections/ExperienceSection";
import SkillsSection from './sections/SkillsSection';
import ContactSection from './sections/ContactSection'; // Import
import Footer from './components/Footer';

import './App.css'; // Global app styles

function App() {
  return (
    <div className="App">
      <Navbar />
      <HeroSection />
      <ProjectsSection /> {/* Add here */}
      <ExperienceSection /> {/* Add here */}
      <SkillsSection />
      <ContactSection /> {/* Add here */}
      <Footer />
    </div>
  );
}

export default App;