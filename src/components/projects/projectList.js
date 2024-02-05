// ProjectCard.js

import React from "react";
import "./projects.css";

const ProjectList = ({projectName,description,languages,backgroundImage}) => {
  return (
    <div className="project-card"  style={{ backgroundImage: `url(${backgroundImage})` }}>
      <div className="project-details">
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
