import './Skills.css';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHtml5, faCss3Alt, faJs, faReact } from '@fortawesome/free-brands-svg-icons';
import { faUsers, faComments, faClock, faHandshake, faUserTie } from '@fortawesome/free-solid-svg-icons';

const Skills = () => {
  const [activeSkill, setActiveSkill] = useState(null);

  const skills = [
    { id: 1, name: "HTML", icon: faHtml5, level: "90%", description: "Experienced in HTML for structuring web content effectively." },
    { id: 2, name: "CSS", icon: faCss3Alt, level: "56%", description: "Skilled in CSS for styling and responsive design." },
    { id: 3, name: "JavaScript", icon: faJs, level: "60%", description: "Proficient in JavaScript for dynamic web functionality." },
    { id: 4, name: "React", icon: faReact, level: "60%", description: "Experienced with React for building interactive UIs." },
    { id: 5, name: "Teamwork", icon: faUsers, level: "60%", description: "Effective in team settings and collaborative projects." },
    { id: 6, name: "Communication", icon: faComments, level: "60%", description: "Strong communication skills for clear project workflows." },
    { id: 7, name: "Time Management", icon: faClock, level: "75%", description: "Efficient in managing time to meet project deadlines." },
    { id: 8, name: "Interpersonal Skills", icon: faHandshake, level: "70%", description: "Adept at building positive relationships in the workplace." },
    { id: 9, name: "Leadership", icon: faUserTie, level: "65%", description: "Experience in guiding teams towards achieving goals." },
  ];

  const toggleDescription = (id) => {
    setActiveSkill(activeSkill === id ? null : id);
  };

  return (
    <section className="skills-section">
      <h2>My Skills</h2>
      <div className="skills-container">
        {skills.map((skill) => (
          <div key={skill.id} className="skill-card" onClick={() => toggleDescription(skill.id)}>
            <div className="skill-header">
              <FontAwesomeIcon icon={skill.icon} className="skill-icon" />
              <h3>{skill.name}</h3>
            </div>
            <div className="skill-bar">
              <div className="progress" style={{ width: skill.level }}></div>
            </div>
            {activeSkill === skill.id && (
              <p className="skill-description">{skill.description}</p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
