// ProjectCard.js

import React from "react";
import "./projects.css";
const ProjectList = ({
  projectName,
  description,
  languages,
  backgroundImage,
  status,
}) => {
  return (
    <div className="project-card">
      <div className="project-images">
        <img src={backgroundImage} alt="" className="project-image" />
      </div>
      <div className="project-body">
        <div>
          <h3 className="project-name">{projectName}</h3>
          <p className="project-description">{description}</p>
        </div>
        <div>
          <div className="lang-demo">
            <div className="project-languages">
              <strong>Languages:</strong>
              {languages.map((language) => (
                <span className="lang-btn-text">{language}</span>
              ))}
            </div>
          </div>
          <div className="status-demo">
            <p className="project-status">
              Status: <i>{status}</i>
            </p>
            <a href="#demo" className="lang-btn-demo">
              <i>Github</i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectList;
