import React from "react";
import my_photo from "../imgs/bg2.jpg";
import { CodeSlash, Cpu, Mortarboard, ShareFill } from "react-bootstrap-icons";
import Projects from "./projects/Projects";
import ResearchAndPublications from "./researches/Researches";

function MainBody() {
  return (
    <div className="body-content">
      {/* Hero Section */}
      <section className="home-intro" id="home">
        <div className="mesh-background"></div>
        <div className="decorative-orb" style={{ top: '-250px', left: '-250px' }}></div>
        <div className="home-intro-text">
          <h2 className="heading-font">Adisu Mulu</h2>
          <p className="job-title">
            Full-Stack Developer | AI Researcher | Computer Science Lecturer
          </p>
          <div className="hero-actions">
            <a href="#projects" className="btn-premium">Explore My Work</a>
          </div>
        </div>
        <div className="home-intro-photo">
          <img src={my_photo} alt="Adisu Mulu" className="my_photo" />
        </div>
      </section>
      {/* About Section */}
      <section className="home-about" id="about">
        <div className="decorative-orb" style={{ bottom: '-200px', right: '-200px', opacity: 0.08 }}></div>
        <h2 className="section-title">Professional Background</h2>
        <div className="home-about-description">
          <p>
            With a deep passion for technology and education, I am a Computer
            Science Lecturer, Full-Stack Developer, and AI Researcher dedicated to
            bridging the gap between theory and real-world application. I hold a
            BSc from Hawassa University and an MSc in Computer Science and Engineering
            from ASTU, equipping me with a strong foundation in advanced computing.
          </p>
          <br />
          <p>
            My research focuses on Artificial Intelligence, Machine Learning, and
            Deep Learning, exploring cutting-edge techniques to drive innovation
            in intelligent systems. As a lecturer at Dilla University, I am
            committed to mentoring the next generation of developers and researchers.
          </p>
        </div>
      </section>
      {/* Services Section */}
      <section className="home-services" id="service">
        <div className="mesh-background" style={{ opacity: 0.15 }}></div>
        <h2 className="section-title">Core Expertise</h2>
        <p className="section-subtitle">
          Bridging the gap between robust engineering and innovative academic research.
        </p>
        <div className="home-service-lists">
          <div className="service-item glass">
            <CodeSlash size={36} color="var(--accent-secondary)" style={{ marginBottom: '1.5rem' }} />
            <h2>Web & API Architecture</h2>
            <p>
              Designing scalable, high-performance web applications and secure
              API ecosystems using modern JS and Python stacks.
            </p>
          </div>
          <div className="service-item glass">
            <Cpu size={36} color="var(--accent-primary)" style={{ marginBottom: '1.5rem' }} />
            <h2>AI & Data Engineering</h2>
            <p>
              Implementing advanced Machine Learning and Deep Learning models
              to transform raw data into intelligent, predictive solutions.
            </p>
          </div>
          <div className="service-item glass">
            <Mortarboard size={36} color="var(--accent-secondary)" style={{ marginBottom: '1.5rem' }} />
            <h2>Technical Consulting</h2>
            <p>
              Providing expert tutoring and advisory services for institutional
              research projects and individual skill development.
            </p>
          </div>
        </div>
      </section>
      {/* Connect Section */}
      <section className="blogs" id="social">
        <div className="decorative-orb" style={{ top: '50%', left: '50%', transform: 'translate(-50%, -50%)', opacity: 0.05 }}></div>
        <h2 className="section-title">Stay Connected</h2>
        <p className="section-subtitle">Follow my latest insights into coding, research, and technical education.</p>
        <div className="blogs-list">
          <a href="https://medium.com/@adisu_mulu" target="_blank" rel="noopener noreferrer">
            <ShareFill /> Medium
          </a>
          <a href="https://www.quora.com/profile/Adis-Mulu" target="_blank" rel="noopener noreferrer">
            <ShareFill /> Quora
          </a>
          <a href="https://www.researchgate.net/profile/Adisu-Mulu" target="_blank" rel="noopener noreferrer">
            <ShareFill /> ResearchGate
          </a>
        </div>
      </section>
      {/* <hr style={{ width: "80%", margin: "0 auto" }} /> */}
      {/* Projects Section */}
      <Projects />

      {/* Research Section */}
      <section className="home-publications" id="research">
        <h2 className="section-title">Research Contributions</h2>
        <ResearchAndPublications />
      </section>
    </div>
  );
}

export default MainBody;
