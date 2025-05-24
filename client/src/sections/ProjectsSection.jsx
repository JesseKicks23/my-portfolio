import React from 'react';
import './ProjectsSection.css';

function ProjectsSection() {
  // Only the "Bobcat Bites" project, with updated properties
  const projects = [
    {
      title: 'Bobcat Bites',
      description: 'A web application designed for UC Merced students to maximize the use of food pantry ingredients by generating personalized recipes. The platform aims to enhance food accessibility and promote culinary creativity among students. This project showcases full-stack development, API integration, and user-centric design principles.',
      liveLink: 'https://vvargas31.pythonanywhere.com/', // Your live demo link
      githubLink: 'YOUR_GITHUB_REPO_FOR_BOBCAT_BITES', // **IMPORTANT: Replace with the actual GitHub link for Bobcat Bites**
      technologies: ['Python', 'SQLAlchemy', 'Flask', 'CSS3', 'API Integration', 'HTML5', 'JavaScript'], // Clarified some tech names
      // image: 'https://via.placeholder.com/600x400/A0D2EB/FFFFFF?text=Bobcat+Bites+Screenshot', // Placeholder image URL
    },
  ];

  return (
    <section id="projects" className="projects-section">
      <h2 className="section-title">My Projects</h2> {/* Reusing consistent section-title class */}
      <div className="projects-container">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            {project.image && ( // Conditionally render image if available
              <div className="project-image-container">
                <img src={project.image} alt={`Screenshot of ${project.title}`} className="project-image" />
              </div>
            )}
            <h3 className="project-title">{project.title}</h3> {/* Added specific class */}
            <p className="project-description">{project.description}</p> {/* Added specific class */}

            {project.technologies && (
              <div className="project-technologies">
                {project.technologies.map((tech, i) => (
                  <span key={i} className="tech-badge">{tech}</span>
                ))}
              </div>
            )}
            <div className="project-links"> {/* Container for multiple links */}
              {project.liveLink && (
                <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="project-button live-demo-button">
                  Live Demo
                </a>
              )}
              {project.githubLink && (
                <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="project-button github-button">
                  GitHub
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default ProjectsSection;