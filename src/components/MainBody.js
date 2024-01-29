import React from "react";
import {
  Envelope,
  Twitter,
  Linkedin,
  Facebook,
  Github,
} from "react-bootstrap-icons";
import my_photo from "../imgs/bg2.jpg";

function MainBody() {
  return (
    <div className="body-content">
      <div className="home-intro">
        <div className="home-intro-text">
          <h2>Adisu Mulu</h2>
          <p className="job-title">
            Software engineer | Researcher | Lecturer @ Dilla University
          </p>
          <p className="about-myself">+251 924 703 531</p>
        </div>
        <div className="home-intro-photo">
          <img src={my_photo} alt="" className="my_photo" />
        </div>
      </div>
      <div className="home-about" id="about">
        <p className="home-about-heading">About me</p>
        <p className="home-about-description">
          Hello there, my name is Adisu Mulu. I am a software engineer,
          researcher and lecturer @ Dilla university, Ethiopia. I have been
          working as a full time computer science lecturer @DU since september
          2019. I also work as a part-time lecturer at private colleges.</p> 
          <p className="home-about-description">As an
          academian, I am also an active researcher, and collaborate with
          colloeagues on various researchable questions in the field of computer
          science. I have worked on various small scale to medium scale software
          development projects ranging from web apps to mobile and desktop apps,
          as individual project and as team work. I did my Bsc in computer
          science @hawassa university and Msc in computer science and
          engineering @ASTU.
        </p>
      </div>
      <div className="home-services" id="service">
        <p className="home-services-heading">Services</p>
        <p className="home-services-description">
          I offer a range of services to meet your needs as a lecturer, software
          engineer, and researcher.
        </p>
        <div className="home-service-lists">
          <div class="service-item">
            <h2>Web, Mobile and Desktop App Development</h2>
            <p>
              I specialize in creating applications using various languages and
              frameworks, including Python, Java, React, Flask, Django, Kivy,
              and more.
            </p>
          </div>
          <div class="service-item">
            <h2>Private Tutoring</h2>
            <p>
              As a lecturer, I provide private tutoring sessions to help you
              excel in your studies and gain a deeper understanding of computer
              science concepts.
            </p>
          </div>
          <div class="service-item">
            <h2>Research and Advisory</h2>
            <p>
              Leveraging my research background, I can assist in conducting
              research, guide students in their research projects, and provide
              advisory services in the field.
            </p>
          </div>
        </div>
      </div>
      <div className="blogs">
        <p className="blogs-description">Join me on popular blogs and learn and share experience</p>
        <div className="blogs-list">
          <a href="">Medium</a>
          <a href="">Quora</a>
        </div>
      </div>
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
    </div>
  );
}

export default MainBody;
