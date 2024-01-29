import React, { useState } from "react";
import Navbar_navbar from "./components/navbar";
import "./App.css";
import Sidebar from "./components/Sidebar";
import MainBody from "./components/MainBody";


function App() {
  const [sidebarDisplay, setSidebarWidth] = useState("none");
  function show_hide_sidebar() {
    setSidebarWidth(sidebarDisplay === "none" ? "Block" : "none");
  }
  return (
    <div className="App">
      <Navbar_navbar show_hide_sidebar={show_hide_sidebar} />
      <Sidebar sidebarDisplay={sidebarDisplay} />
      <MainBody />
    </div>
  );
}

export default App;
