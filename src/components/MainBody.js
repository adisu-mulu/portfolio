import React from "react";
import my_photo from "../imgs/bg2.jpg";
import { CodeSlash, Cpu, Mortarboard, ShareFill, Briefcase, Award, Envelope, Telephone } from "react-bootstrap-icons";
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
          <div className="hero-contact-info">
            <a href="mailto:kulhabesh31@gmail.com" className="contact-pill glow-glow">
              <Envelope /> <span>kulhabesh31@gmail.com</span>
            </a>
            <a href="tel:+251924703531" className="contact-pill glow-glow">
              <Telephone /> <span>+251-924-703-531</span>
            </a>
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
        <div className="about-grid">
          <div className="about-bio">
            <p className="bio-lead">
              With a deep passion for technology and education, I am a <span>Computer Science Lecturer</span>, <span>Full-Stack Developer</span>, and <span>AI Researcher</span> dedicated to bridging the gap between theory and real-world application.
            </p>
            <p className="bio-sub">
              My research focuses on <span>Artificial Intelligence</span>, <span>Machine Learning</span>, and <span>Deep Learning</span>, exploring cutting-edge techniques to drive innovation in intelligent systems.
            </p>
          </div>

          <div className="about-cards">
            {/* Education Card */}
            <div className="about-card glass-v2">
              <div className="card-icon">
                <Mortarboard size={24} color="var(--accent-primary)" />
              </div>
              <div className="card-content">
                <h3>Education</h3>
                <p><strong>MSc</strong> in Computer Science & Engineering (ASTU)</p>
                <p><strong>BSc</strong> in Computer Science (Hawassa University)</p>
              </div>
            </div>

            {/* Role Card */}
            <div className="about-card glass-v2">
              <div className="card-icon">
                <Briefcase size={24} color="var(--accent-secondary)" />
              </div>
              <div className="card-content">
                <h3>Current Role</h3>
                <p>Lecturer & Researcher</p>
                <p className="highlight">Dilla University</p>
              </div>
            </div>

            {/* Expertise Card */}
            <div className="about-card glass-v2">
              <div className="card-icon">
                <Award size={24} color="#f59e0b" />
              </div>
              <div className="card-content">
                <h3>Research Focus</h3>
                <p>AI, Deep Learning, Systems Engineering</p>
              </div>
            </div>
          </div>
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
