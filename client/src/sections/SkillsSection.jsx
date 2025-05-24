import React from 'react';
import './SkillsSection.css';

function SkillsSection() {
  const skills = [
    { category: 'Languages', items: ['JavaScript', 'HTML', 'CSS', 'Python', 'Java', 'SQL'] },
    { category: 'Frontend', items: ['React', 'Vite', 'Responsive Design'] },
    { category: 'Backend', items: ['Node.js', 'Express.js', 'PostgreSQL', 'MongoDB'] },
    { category: 'Tools & Version Control', items: ['Git', 'GitHub', 'VS Code', 'npm/yarn', 'Webpack/Vite'] },
    { category: 'Concepts', items: ['RESTful APIs', 'Object-Oriented Programming', 'Data Structures & Algorithms', 'Authentication/Authorization'] },
  ];

  return (
    <section id="skills" className="skills-section">
      <h2 className="section-title">My Skills</h2>
      <div className="skills-container">
        {skills.map((skillCategory, index) => (
          <div key={index} className="skill-category-card">
            <h3 className="skill-category-title">{skillCategory.category}</h3>
            <ul className="skill-list">
              {skillCategory.items.map((item, i) => (
                <li key={i} className="skill-item-badge">{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}

export default SkillsSection;