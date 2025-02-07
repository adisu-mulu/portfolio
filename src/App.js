import React, { useState } from "react";
import NavbarNavbar from "./components/navbar";
import "./App.css";
import Sidebar from "./components/Sidebar";
import MainBody from "./components/MainBody";
import Footer from "./components/Footer";
import { BrowserRouter  as Router, Route, Routes } from "react-router-dom";
import Projects from "./components/projects/Projects";
import Researches from "./components/researches/Researches";

function App() {
  const [sidebarDisplay, setSidebarWidth] = useState("none");
  function show_hide_sidebar() {
    setSidebarWidth(sidebarDisplay === "none" ? "Block" : "none");
  }
  return (
    <div className="App">
      <div className="app-wrapper">
      <Router basename="/portfolio">
        <NavbarNavbar show_hide_sidebar={show_hide_sidebar} sidebarDisplay={sidebarDisplay}/>
        <Sidebar sidebarDisplay={sidebarDisplay} />
        <div className="body-wrapper">
        <Routes>
          <Route path="/" element={MainBody } />
          <Route path="/projects" element={Projects } />
          <Route path="/researches" element={Researches } />
          {/* Redirect unknown routes to home */}
          {/* <Route path="*" element={<Navigate to="/" />} /> */}
        </Routes>
        </div>
        <Footer />
      </Router>
    </div>
    </div>
  );
}

export default App;
