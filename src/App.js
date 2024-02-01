import React, { useState } from "react";
import Navbar_navbar from "./components/navbar";
import "./App.css";
import Sidebar from "./components/Sidebar";
import MainBody from "./components/MainBody";
import Footer from "./components/Footer";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Projects from "./components/projects/Projects";
import Researches from "./components/researches/Researches";
function App() {
  const [sidebarDisplay, setSidebarWidth] = useState("none");
  function show_hide_sidebar() {
    setSidebarWidth(sidebarDisplay === "none" ? "Block" : "none");
  }
  return (
    <div className="App">
      <Router>
      <Navbar_navbar show_hide_sidebar={show_hide_sidebar} />
      <Sidebar sidebarDisplay={sidebarDisplay} />
        <Routes>
          <Route path="/" exact Component={MainBody} />
          <Route path="/projects" exact Component={Projects} />
          <Route path="/researches" exact Component={Researches} />
        </Routes>
        <Footer />
      </Router>



      
      
    </div>
  );
}

export default App;
