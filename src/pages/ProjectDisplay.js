import React from 'react';
import { useParams } from 'react-router-dom';
import { ProjectList } from '../helpers/ProjectList';
import GithubIcon from '@mui/icons-material/GitHub';
import '../styles/ProjectDisplay.css';

function ProjectDisplay() {
  const { id } = useParams();
  const project = ProjectList[id];
  return (
    <div className="project">
      <a
        href="https://gachonlab.netlify.app/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <h1>{project.name}</h1>
      </a>

      <img src={project.image} />
      <p>Skills: {project.skills}</p>

      <a
        href="https://github.com/metablog/Lab"
        target="_blank"
        rel="noopener noreferrer"
      >
        <GithubIcon />
      </a>
    </div>
  );
}

export default ProjectDisplay;
