import React from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";


function NavbarNavbar({show_hide_sidebar, sidebarDisplay}) {

  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      className="bg-menu"
      data-bs-theme="dark"
      id="menu"
    >
      <Nav>
           </Nav>
      <Navbar.Brand href="/"></Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
      <Navbar.Collapse id="responsive-navbar-nav justify-content-center">
        <Nav className="ms-auto">
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="/#about">About Me</Nav.Link>
          <Nav.Link href="/#service">Services</Nav.Link>
          <Nav.Link href="/#projects">Projects</Nav.Link>
          <Nav.Link href="/#research_publications">Publications</Nav.Link>
          <Nav.Link href="/#contact">Contact</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
export default NavbarNavbar;
