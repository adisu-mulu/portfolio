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
        <div className="project-languages">
          <strong>Languages:</strong> {languages.join(", ")}
        </div>
        
      </div>
    </div>
  );
};

export default ProjectList;
