import React from 'react';
import './Contact.css';
import { FaLinkedin, FaGithub, FaInstagram, FaTwitter } from 'react-icons/fa';

const Contact = () => {
  return (
    <section className="contact-section" id="contact">
      <h2 className="contact-title">Contact Me</h2>

      {/* Social Media Links */}
      <div className="social-icons">
        <a href="https://www.linkedin.com/in/aravind-s" target="_blank" rel="noopener noreferrer">
          <FaLinkedin />
        </a>
        <a href="https://github.com/aravind" target="_blank" rel="noopener noreferrer">
          <FaGithub />
        </a>
        <a href="https://www.instagram.com/aravind" target="_blank" rel="noopener noreferrer">
          <FaInstagram />
        </a>
        <a href="https://twitter.com/aravind" target="_blank" rel="noopener noreferrer">
          <FaTwitter />
        </a>
      </div>

      {/* Contact Form */}
      <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
        <input type="email" placeholder="Your Email" required />
        <textarea placeholder="Your Message" required></textarea>
        <button type="submit">Send</button>
      </form>
    </section>
  );
};

export default Contact;
