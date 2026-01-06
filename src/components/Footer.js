import React from 'react';
import {
  Envelope,
  Twitter,
  Linkedin,
  Github,
} from "react-bootstrap-icons";

function Footer() {
  return (
    <footer className="home-contact" id="contact">
      <h2 className="home-contact-heading">Get In Touch</h2>
      <div className="contact-icons">
        <a href="mailto:kulhabesh31@gmail.com" title="Email Adisu">
          <Envelope size={22} />
        </a>
        <a href="https://twitter.com/adismulu" target="_blank" rel="noopener noreferrer" title="Twitter">
          <Twitter size={22} />
        </a>
        <a href="https://www.linkedin.com/in/adisu-mulu-241071295/" target="_blank" rel="noopener noreferrer" title="LinkedIn">
          <Linkedin size={22} />
        </a>
        <a href="https://www.github.com/adisu-mulu" target="_blank" rel="noopener noreferrer" title="GitHub">
          <Github size={22} />
        </a>
      </div>
      <div style={{ marginTop: '3rem', color: 'var(--text-muted)', fontSize: '0.9rem' }}>
        &copy; {new Date().getFullYear()} Adisu Mulu. All rights reserved.
      </div>
    </footer>
  );
}
export default Footer;