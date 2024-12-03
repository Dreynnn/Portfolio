import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faLinkedin, faGithub,  } from '@fortawesome/free-brands-svg-icons';
import { faFileDownload } from '@fortawesome/free-solid-svg-icons';
import Resume from "../Resume/Dryn-Resume.pdf";
import me from "../assets/me.jpg";

import './Hero.css'; 

const Hero = () => {
  return (
    <section className="hero-section">  
      <div className="hero-content">
        <img src={me} alt="me" className="hero-image" />
        <h1 className="hero-name">Hello, I&apos;m <span>Edrein Parafina</span></h1>
        <p className="hero-description">
          I&apos;m an aspiring web developer passionate about building clean, functional, and engaging websites. I love learning new technologies and applying my skills to create web experiences that make a difference.
        </p>

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
          <a href={Resume} download rel="noopener noreferrer">
            <FontAwesomeIcon icon={faFileDownload} className="social-icon" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
