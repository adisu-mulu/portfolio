import React from "react";

import my_photo from "../imgs/bg2.jpg";
import { Envelope } from "react-bootstrap-icons";
import Projects from "./projects/Projects";
import ResearchAndPublications from "./researches/Researches";
// import { BiPhoneCall } from 'bootstrap-icons';

function MainBody() {
  return (
    <div className="body-content">
      <div className="home-intro">
        <div className="home-intro-text">
          <h2>Adisu Mulu</h2>
          <p className="job-title">
            Full-Stack Developer | Web API Developer | AI Researcher & CoSc
            Lecturer @ Dilla University
          </p>
          <p className="about-myself">+251 924 703 531</p>
          <div className="contact-emails">
            <p className="about-myself">
              <Envelope size={20} /> kulhabesh31@gmail.com ||
            </p>
            &nbsp;
            <p className="about-myself">adisumulu.du.edu.et</p>
          </div>
        </div>
        <div className="home-intro-photo">
          <img src={my_photo} alt="" className="my_photo" />
        </div>
      </div>
      <div className="home-about" id="about">
        <p className="home-about-heading">About Me</p>
        <p className="home-about-description">
          With a deep passion for technology and education, I am a Computer
          Science Lecturer, Full-Stack Developer, Web API developer and
          Researcher dedicated to bridging the gap between theory and real-world
          application. I hold a BSc in Computer Science from Hawassa University
          and an MSc in Computer Science and Engineering from ASTU, equipping me
          with a strong foundation in computing and advanced problem-solving
          skills. My expertise spans modern web technologies, including React,
          Next.js, NestJS, Node.js, Express, Django, Flask, and Python, allowing
          me to design and develop scalable, high-performance web applications
          and APIs.
        </p>
        <p className="home-about-description">
          Beyond software development, my research focuses on Artificial
          Intelligence, Machine Learning, and Deep Learning, exploring
          cutting-edge techniques to drive innovation in intelligent systems. I
          am particularly interested in leveraging AI for automation, predictive
          analytics, and real-world problem-solving. As a lecturer, I am
          committed to mentoring and shaping the next generation of developers
          and researchers, ensuring they gain both theoretical knowledge and
          practical skills. I thrive on solving complex challenges, building
          impactful solutions, and pushing the boundaries of technology through
          continuous learning and research.
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
            <h2>
              Full-stack & Web API development | Data Analysis & ML Model
              development
            </h2>
            <p>
              I specialize in creating Front-end and Back-end applications and
              Web API using frameworks like react, next.js, nestJS, express,
              flask and django
            </p>
            <p>
              As a Data Analyst and AI model developer, I utilize
              machine learning and deep learning algorithms to extract
              insights from data, build predictive models, and implement
              solutions that drive data-based decision-making.
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
      <br />
      <br />
      <div className="blogs">
        <p className="blogs-description">
          <br />
          <br />
          Join me and learn and share experiences
        </p>
        <div className="blogs-list">
          <a href="https://medium.com/@adisu_mulu">Medium</a>
          <a href="https://www.quora.com/profile/Adis-Mulu">Quora</a>
          <a href="https://www.researchgate.net/profile/Adisu-Mulu">
            ResearchGate
          </a>
        </div>
      </div>
      <br />
      <br />
      {/* <hr style={{ width: "80%", margin: "0 auto" }} /> */}
      <br />
      <br />
      <div className="home-projects" id="projects">
        <p className="home-projects-heading">Projects</p>
        <br />
        <Projects />
      </div>

      <div className="home-publications" id="research_publications">
        <br />
        <br />
        <p className="home-publications-heading">Research and Publications</p>
        <ResearchAndPublications />
        <br />
        <br />
        <br />
        <br />
      </div>
    </div>
  );
}

export default MainBody;
