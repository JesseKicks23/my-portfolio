// src/components/ResumeDownloadButton.jsx
import React from 'react';
import './ResumeDownloadButton.css';

function ResumeDownloadButton() {
  const handleDownload = () => {
    // Replace 'your-resume.pdf' with the actual path to your resume file
    // You would typically place your resume in the 'public' folder
    const resumeUrl = '/Jan_2025_Resume_MLT copy.pdf'; // Example path
    window.open(resumeUrl, '_blank');
  };

  return (
    <button className="resume-button" onClick={handleDownload}>
      Download Resume
    </button>
  );
}

export default ResumeDownloadButton;