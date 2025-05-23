import medtrack from "../assets/medtrack.png"
import ishoppe from "../assets/ishoppe.png"
import Pokedex from "../assets/Pokedex.png"
import './Projects.css'; 

const projects = [
  {
    id: 1,
    title: 'Medicine Tracker',
    description: 'HTML/CSS/Javascript/ReactJS',
    image: medtrack,
    link: 'https://dryp-tracker.netlify.app/',
    source: 'https://github.com/Dreynnn/Medicine-Tracker-App',
 
  },
  {
    id: 2,
    title: 'Fake Store with API',
    description: 'HTML/CSS/Javascript/ReactJS',
    image: ishoppe, 
    link: 'https://fake-storereact.netlify.app/',
    source: 'https://github.com/Dreynnn/fakestore',
  },
  {
    id: 3,
    title: 'Pokedex',
    description: 'HTML/CSS/Javascript/ReactJS',
    image: Pokedex, 
    link: 'https://drynpokedex.netlify.app/',
    source: 'https://github.com/Dreynnn/Pokedex',
  },
];

const Projects = () => {
  return (
    <div className="photo-card-container">
      {projects.map((project) => (
        <div className="photo-card" key={project.id}>
          <img src={project.image} alt={project.title} className="card-image" />
          <div className="card-content">
            <h2>{project.title}</h2>
            <p>{project.description}</p>
            <div className='projectbuttons'>
            <a href={project.link} target="_blank" rel="noopener noreferrer">
              live demo
            </a>
            <a href={project.source} target="_blank" rel="noopener noreferrer">
              view code
            </a>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Projects;
