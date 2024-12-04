import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [errors, setErrors] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    // Validation logic
    if (name === 'name') {
      if (!/^[a-zA-Z\s]*$/.test(value)) {
        setErrors((prevErrors) => ({ ...prevErrors, name: 'Only letters are allowed.' }));
      } else {
        setErrors((prevErrors) => ({ ...prevErrors, name: '' }));
      }
    }

    if (name === 'email') {
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
        setErrors((prevErrors) => ({ ...prevErrors, email: 'Please enter a valid email.' }));
      } else {
        setErrors((prevErrors) => ({ ...prevErrors, email: '' }));
      }
    }

    if (name === 'message') {
      if (value.length < 20) {
        setErrors((prevErrors) => ({ ...prevErrors, message: 'Message must be at least 20 characters.' }));
      } else {
        setErrors((prevErrors) => ({ ...prevErrors, message: '' }));
      }
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!errors.name && !errors.email && !errors.message) {
      alert(`Thank you, ${formData.name}. Your message has been sent!`);
    }
  };

  return (
    <section className="contact-section">
      <div className="contact-container">
        <h2>Get in Touch</h2>
        <p>Have a project or collaboration in mind? I&apos;d love to hear from you.</p>
        <form onSubmit={handleSubmit} className="contact-form">
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              placeholder="Your Name"
            />
            {errors.name && <p className="error">{errors.name}</p>}
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="Your Email"
            />
            {errors.email && <p className="error">{errors.email}</p>}
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              placeholder="Your Message"
            ></textarea>
            {errors.message && <p className="error">{errors.message}</p>}
          </div>
          <button type="submit" className="contact-submit" disabled={errors.name || errors.email || errors.message}>Send Message</button>
        </form>
      </div>

      <footer className="contact-footer">
        <div className="social-icons">
          <a href="https://www.facebook.com/Edrein052199" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faFacebook} className="social-icon" />
          </a>
          <a href="https://www.instagram.com/dreynnnip/" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faInstagram} className="social-icon" />
          </a>
          <a href="https://www.linkedin.com/in/edrein-parafina-875897253/" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faLinkedin} className="social-icon" />
          </a>
          <a href="https://github.com/Dreynnn" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faGithub} className="social-icon" />
          </a>
        </div>
        <p>&copy; 2024 Edrein Parafina. All rights reserved.</p>
      </footer>
    </section>
  );
};

export default Contact;
