import React, { useRef } from "react";
import { ChevronLeft, ChevronRight } from "react-bootstrap-icons";
import ProjectList from "./projectList";
import "./projects.css";

export default function Projects() {
  const sliderRef = useRef(null);

  const slideLeft = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({ left: -400, behavior: "smooth" });
    }
  };

  const slideRight = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({ left: 400, behavior: "smooth" });
    }
  };

  const projects = [
    {
      projectName: "Research papers recommender system",
      description: "A web based system which allows students and researchers to find relevant papers based on title and abstract.",
      languages: ["React", "Flask"],
      backgroundImage: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=1200",
      status: "Completed",
      github: "#",
    },
    {
      projectName: "Unified Help Desk Solution (UHDS)",
      description: "An efficient way of monitoring and tracking requests and services between different institutional offices for Dilla University.",
      languages: ["React (Next.js)", "Node.js (NestJS)"],
      backgroundImage: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=1200",
      status: "In Progress",
      github: "#",
    },
    {
      projectName: "Campus-navigation",
      description: "A web-based app that allows fresh students to find directories, locations, and buildings while accessing real-time news and announcements. Features an integrated map for easy navigation.",
      languages: ["React.js", "Python (Flask)", "MongoDB"],
      backgroundImage: "https://images.unsplash.com/photo-1569336415962-a4bd9f69cd83?auto=format&fit=crop&q=80&w=1200",
      status: "Completed",
      github: "#",
    },
  ];

  return (
    <section className="projects-showcase-section" id="projects">
      <div className="mesh-background" style={{ opacity: 0.1 }}></div>
      <div className="decorative-orb" style={{ top: '5%', right: '-10%', opacity: 0.05 }}></div>
      <div className="decorative-orb" style={{ bottom: '10%', left: '-5%', opacity: 0.08, background: 'var(--accent-secondary)' }}></div>

      <div className="projects-header-container">
        <h2 className="luxury-title">Selected Works</h2>
        <p className="luxury-subtitle">
          Explore a curated collection of my most impactful projects in Web Development,
          Artificial Intelligence, and Institutional Systems.
        </p>
      </div>

      <div className="slider-container-relative">
        <button className="nav-btn prev-btn" onClick={slideLeft}>
          <ChevronLeft size={24} />
        </button>

        <div className="projects-track" ref={sliderRef}>
          {projects.map((project, index) => (
            <div className="slider-item" key={index}>
              <ProjectList index={index} {...project} />
            </div>
          ))}
        </div>

        <button className="nav-btn next-btn" onClick={slideRight}>
          <ChevronRight size={24} />
        </button>
      </div>

      <div className="projects-footer">
        <a href="https://github.com/adisu-mulu" target="_blank" rel="noopener noreferrer" className="btn-premium-outline">
          View More on GitHub
        </a>
      </div>
    </section>
  );
}
