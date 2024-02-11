// ProjectCard.js

import React from "react";
import "./projects.css";
const ProjectList = ({
  projectName,
  description,
  languages,
  backgroundImage,
}) => {
  return (
    <div className="project-card">
      <div className="project-images">
        <img src={backgroundImage} alt="" className="project-image" />
      </div>
      <div className="project-body">
        <h3 className="project-name">{projectName}</h3>
        <p className="project-description">{description}</p>
        <div className="lang-demo">
          <div className="project-languages">
            <strong>Languages:</strong>
            {languages.map((language) => (
              <span className="lang-btn-text">{language}</span>
            ))}
          </div>
          <a href="#demo" className="lang-btn-demo">Demo</a>
        </div>
      </div>
    </div>
  );
};

export default ProjectList;
