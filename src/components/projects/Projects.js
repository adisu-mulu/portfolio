import React from "react";
import ProjectList from "./projectList";
import "./projects.css";
import colMgm from "./research_images/collegeMgm.jpg";
import health from "./research_images/health.jpeg";
// import health2 from "./research_images/health2.jpg";
// import bg from './bg.jpg';
export default function Projects() {
  const projects = [
    {
      projectName: "Project 1",
      description: "A brief description of Project 1.",
      languages: ["JavaScript", "React"],
      backgroundImage: colMgm,
    },
    {
      projectName: "Project 1",
      description: "A brief description of Project 1.",
      languages: ["JavaScript", "React"],
      backgroundImage: health,
    },
    {
      projectName: "Project 1",
      description: "A brief description of Project 1.",
      languages: ["JavaScript", "React"],
      backgroundImage: health,
    },
    {
      projectName: "Project 1",
      description: "A brief description of Project 1.",
      languages: ["JavaScript", "React"],
      backgroundImage: health,
    },
    // Add more projects as needed
  ];
  return (
    <div className="projects-section">
      {projects.map((project, index) => (
          <ProjectList key={index} {...project} />
        ))}
    </div>
  );
}
