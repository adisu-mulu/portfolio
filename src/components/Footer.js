import React from 'react';
import {
    Envelope,
    Twitter,
    Linkedin,
    Facebook,
    Github,
  } from "react-bootstrap-icons";
function Footer(){
  return (
    <div className="home-contact" id="contact">
        <p className="home-contact-heading">Contact me</p>
        <div className="contact-icons">
          <a href="mailto:kulhabesh31@gmail.com">
            <Envelope size={25} />
          </a>
          <a
            href="https://twitter.com/adismulu"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Twitter size={25} />
          </a>
          <a
            href="https://www.linkedin.com/in/adisu-mulu-241071295/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Linkedin size={25} />
          </a>
          <a
            href="https://www.facebook.com/profile.php?id=100093135571717"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Facebook size={25} />
          </a>
          <a
            href="https://www.github.com/adisu-mulu"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Github size={25} />
          </a>
        </div>
      </div>
  );
}
export default Footer;