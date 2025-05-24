import React from 'react';
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa'; // Removed FaPhoneAlt as per original comment and typical portfolio practice
import './ContactSection.css';

function ContactSection() {
  // The handleSubmit function is commented out as the form is commented out.
  // If you re-enable the form, you'll need to uncomment and properly implement this.
  /*
  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Form submission is not yet implemented. Please use the direct links!');
    // In a real application, you'd send this data to a backend or a service like Formspree.
    // Example:
    // const formData = new FormData(e.target);
    // fetch('YOUR_FORM_ENDPOINT', {
    //   method: 'POST',
    //   body: formData,
    // })
    // .then(response => response.json())
    // .then(data => console.log(data))
    // .catch(error => console.error('Error:', error));
  };
  */

  return (
    <section id="contact" className="contact-section">
      <h2 className="section-title">Get In Touch</h2> {/* Applied consistent section-title class */}
      <p className="contact-intro-text"> {/* Added class for specific styling */}
        I'm always open to new opportunities, collaborations, or just a friendly chat.
        Feel free to reach out via any of the methods below!
      </p>

      <div className="contact-info">
        <div className="contact-item">
          <FaEnvelope className="contact-icon" /> {/* Added icon class */}
          <a href="mailto:jessehernandezt@gmail.com" className="contact-link">jessehernandezt@gmail.com</a> {/* Added link class */}
        </div>
        <div className="contact-item">
          <FaLinkedin className="contact-icon" /> {/* Added icon class */}
          <a href="https://www.linkedin.com/in/jesse-hernandez-tovar" target="_blank" rel="noopener noreferrer" className="contact-link">
          linkedin.com/in/jesse-hernandez-tovar
          </a>
        </div>
        <div className="contact-item">
          <FaGithub className="contact-icon" /> {/* Added icon class */}
          <a href="https://github.com/JesseH-T" target="_blank" rel="noopener noreferrer" className="contact-link">
            github.com/JesseH-T
          </a>
        </div>
        {/* Optional: Add phone number if you're comfortable, uncommenting the JSX and styling */}
        {/*
        <div className="contact-item">
          <FaPhoneAlt className="contact-icon" />
          <a href="tel:+15551234567" className="contact-link">+1 (555) 123-4567</a>
        </div>
        */}
      </div>

      {/* Optional: Basic Contact Form - Uncomment this entire block if you want to use a form */}
      {/*
      <div className="contact-form-container">
        <h3>Send a Message</h3>
        <form onSubmit={handleSubmit}>
          <label htmlFor="name">Name</label>
          <input type="text" id="name" name="name" required />

          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" required />

          <label htmlFor="subject">Subject</label>
          <input type="text" id="subject" name="subject" />

          <label htmlFor="message">Message</label>
          <textarea id="message" name="message" required></textarea>

          <button type="submit">Send Message</button>
        </form>
      </div>
      */}
    </section>
  );
}

export default ContactSection;