import React from 'react';
import './ExperienceSection.css';

function ExperienceSection() {
  const experiences = [
    {
      title: 'Summer Intern',
      company: 'Setton Pistachio of Terra Bella, Inc.',
      duration: 'June 16, 2025 – August 8, 2025', 
      description: [
        'Selected for a competitive cross-functional internship at one of the largest pistachio growers and processors in the U.S., designed to provide hands-on exposure across key departments including Engineering, Quality Assurance, Grower Relations, and Logistics.',
        'Collaborating on capital improvement and automation projects under the supervision of engineering and maintenance teams, gaining real-world experience in robotics, process optimization, and industrial automation.',
      ],
    },
    {
      title: 'Full Stack Developer',
      company: 'UNiFOODi – UC Merced Startup',
      duration: 'January 2025 – May 2025', 
      description: [
        'Designed and implemented the front-end interface using React, creating a clean, responsive UI with an original color scheme and layout focused on accessibility and student usability.',
        'Collaborated on back-end development to integrate email notification functionality: Triggered alerts when the ML model detected food items on the live feed. Automated email delivery using SuprSend, notifying subscribed users of available surplus food.',
      ],
    },
    {
      title: 'Web/App Support Lead',
      company: 'The University of California Basic Needs Center', 
      duration: 'July 2023 – Present',
      description: [
        'Conducted extensive testing and design upgrades, adhering to web development rules and guaranteeing cross-browser compatibility. Integrated multimedia components successfully to generate compelling content, resulting in a better user experience.',
        'Enhanced the usability of the Basic Needs website by integrating student navigation with UI design.',
      ],
    },
    {
      title: 'Enrollment Coach',
      company: 'The University of California Student First Center',
      duration: 'March 2023 – August 2023',
      description: [
        'Guided 55 formally accepted students through the enrollment process and matched them with appropriate opportunities, resulting in a seamless and successful enrollment experience.',
        'Maintained strict confidentiality and demonstrated multicultural competencies to effectively work with diverse populations.',
      ],
    },
    {
      title: 'Summer Teacher Assistant / Instructor',
      company: 'Reedley College Upward Bound',
      duration: 'June 2022 – July 2022',
      description: [
        'Taught first-generation high school students how to solder, connect wires, cut PVC pipes, and build controllers manually, resulting in all successful construction of fully functional robots tested at the pools.',
        'Led a team in developing a new curriculum for S.T.E.M classes, which resulted in increased funding for future programs due to the success of the robots built by the students.',
      ],
    },
  ];

  return (
    <section id="experience" className="experience-section">
      <h2 className="section-title">My Experience</h2> {/* Added a class for consistent title styling */}
      <div className="experience-container">
        {experiences.map((exp, index) => (
          <div key={index} className="experience-item">
            <h3 className="experience-title">{exp.title}</h3> {/* Added class */}
            <p className="company-name">{exp.company}</p>
            <p className="duration">{exp.duration}</p>
            <ul className="experience-description-list"> {/* Added class */}
              {exp.description.map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}

export default ExperienceSection;