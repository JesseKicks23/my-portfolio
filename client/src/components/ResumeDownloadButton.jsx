// src/components/ResumeDownloadButton.jsx
import React from 'react';
import './ResumeDownloadButton.css';

function ResumeDownloadButton() {
  const handleDownload = () => {
    
    const resumeUrl = '/Jan_2025_Resume_MLT copy.pdf'; 
    window.open(resumeUrl, '_blank');
  };

  return (
    <button className="resume-button" onClick={handleDownload}>
      Download Resume
    </button>
  );
}

export default ResumeDownloadButton;