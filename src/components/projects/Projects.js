import React from "react";
import ProjectList from "./projectList";
import "./projects.css";
import campnav from "./research_images/camp-nav.jpg";
import research from "./research_images/research.jpeg";
import uhds from "./research_images/uhds.jpg";

export default function Projects() {
  const projects = [
    {
      projectName: "Campus-navigation",
      description: "A web based app that allows fresh students to find different directories, locations and buildings easily while also getting latest news, announcements and other information easily. It will also allow students to navigate the campus easily by using the integrated map.",
      languages: ["React.js", "Python(flask)", "MongoDB"],
      backgroundImage: campnav,
      status: "Completed",
      github: "https://github.com/adisu-mulu/campus-navigation",
    },
    {
      projectName: "Research papers recommender system",
      description: "A web based system which allows students and researchers to find relevant papers based on title and abstract.",
      languages: ["React, Flask"],
      backgroundImage: research,
      status: "Completed",
      github: "https://github.com/adisu-mulu/research_recommender",
    },
    {
      projectName: "Unified Help Desk Solution (UHDS) for DU",
      description: "An efficient way of monitoring and tracking requests and services between different offices",
      languages: ["React(next.js)", "nodejs(nestJS)"],
      backgroundImage: uhds,
      status: "In progress",
      github: "",
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
