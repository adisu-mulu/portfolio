import React from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import Button from "react-bootstrap/Button";
import CloseIcon from '@mui/icons-material/Close';

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
        <Button variant="text" onClick={show_hide_sidebar}>
        {sidebarDisplay==='none'? <MenuOutlinedIcon /> : <CloseIcon /> }
        </Button>
      </Nav>
      <Navbar.Brand href="/">  My Profile</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="ms-auto">
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="#about">About</Nav.Link>
          <Nav.Link href="#service">Service</Nav.Link>
          <Nav.Link href="#contact">Contact</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
export default NavbarNavbar;
