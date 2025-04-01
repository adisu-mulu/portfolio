import React from "react";
import ProjectList from "./projectList";
import "./projects.css";
import colMgm from "./research_images/collegeMgm.jpg";
import health from "./research_images/health.jpeg";

export default function Projects() {
  const projects = [
    {
      projectName: "Project 1",
      description: "A brief description of Project 1.",
      languages: ["JavaScript", "React"],
      backgroundImage: colMgm,
      status: "Completed",
    },
    {
      projectName: "Project 1",
      description: "A brief description of Project 1.",
      languages: ["JavaScript", "React"],
      backgroundImage: health,
      status: "In progress",
    },
    {
      projectName: "Project 1",
      description: "A brief description of Project 1.",
      languages: ["JavaScript", "React"],
      backgroundImage: health,
      status: "Completed",
    },
 
    // Add more projects as needed
  ];
  return (
  <div className="projects-section">

<div className="d-flex flex-wrap justify-content-start" id="projectsList">
  {projects.map((project, index) => (
    <div className="p-2" key={index}>
      <ProjectList {...project} />
    </div>
  ))}
</div>
    </div>

  );
}
