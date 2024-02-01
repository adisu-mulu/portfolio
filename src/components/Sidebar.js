import React from "react";
import "../App.css";
function Sidebar({ sidebarDisplay }) {
  const sidebarStyle = {
    display: `${sidebarDisplay}`,
  };
  return (
    <div className="Sidebar" style={sidebarStyle}>
      <ul className="sidebar-items">
        <li>
          <a href="/projects">Projects</a>
        </li>
        <li>
          <a href="/researches">Research</a>
        </li>
        <li>
          <a href="up-events">Upcoming Events</a>
        </li>
        <li>
          <a href="/link1">link1</a>
        </li>
        <li>
          <a href="/link1">link1</a>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;
