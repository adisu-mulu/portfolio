import React from "react";
import { Github, ArrowUpRight } from "react-bootstrap-icons";

const ProjectList = ({
  projectName,
  description,
  languages,
  backgroundImage,
  status,
  github,
}) => {
  return (
    <div className="project-gallery-card">
      {/* Visual Top */}
      <div className="gallery-image-wrapper">
        <img src={backgroundImage} alt={projectName} />
        <div className="gallery-overlay"></div>
      </div>

      {/* Content Bottom */}
      <div className="gallery-content">
        <span className="gallery-status-badge">{status}</span>
        <h3 className="gallery-title">{projectName}</h3>
        <p className="gallery-desc">{description}</p>

        <div className="gallery-tech-row">
          {languages.map((lang, i) => (
            <span key={i} className="gallery-tag">{lang}</span>
          ))}
        </div>

        {github && (
          <div className="gallery-actions">
            <a href={github} target="_blank" rel="noopener noreferrer" className="btn-gallery">
              CODE <Github className="ms-2" />
            </a>
            <a href={github} target="_blank" rel="noopener noreferrer" className="btn-gallery-link">
              <ArrowUpRight size={16} />
            </a>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectList;
