import React from "react";
import ProjectList from "./projectList";
import "./projects.css";
import colMgm from "./research_images/collegeMgm.jpg";
import health from "./research_images/health.jpeg";

export default function Projects() {
  const projects = [
    {
      projectName: "Campus-navigation",
      description: "A web based app that allows fresh students to find different directories, locations and buildings easily while also getting latest news, announcements and other information easily. It will also allow students to navigate the campus easily by using the integrated map.",
      languages: ["React.js", "Python(flask)", "MongoDB"],
      backgroundImage: colMgm,
      status: "Completed",
    },
    {
      projectName: "Research papers recommender system",
      description: "A web based system which allows students and researchers to find relevant papers based on title and abstract.",
      languages: ["React, Flask"],
      backgroundImage: health,
      status: "Completed",
    },
    {
      projectName: "Unified Help Desk Solution (UHDS) for DU",
      description: "An efficient way of monitoring and tracking requests and services between different offices",
      languages: ["React(next.js)", "nodejs(nestJS)"],
      backgroundImage: health,
      status: "In progress",
    },

    // Add more projects as needed
  ];
  return (
    <div className="projects-section">
      <div
        className="d-flex flex-wrap justify-content-center"
        id="projectsList"
      >
        {projects.map((project, index) => (
          <div className="p-2" key={index}>
            <ProjectList {...project} />
          </div>
        ))}
      </div>
    </div>
  );
}
