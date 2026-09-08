import React, { useEffect } from "react";
import portfolioData from './data.json';
import './App.css';
import ContactForm from './ContactForm';
import AOS from 'aos';
import 'aos/dist/aos.css';

function App(){
  useEffect(() => {
    AOS.init({
      duration: 1000, // How long the animation takes (1000ms = 1 second)
      once: false,    
    });
  }, []);

  return(
    <div>
      {/* Animated Background Shapes */}
      <div className="background-shapes">
        <div className="shape shape-1"></div>
        <div className="shape shape-2"></div>
        <div className="shape shape-3"></div>
      </div>

      {/* Navigation */}
      <nav>
        <a href="#about">About</a>
        <a href="#education">Education</a>
        <a href="#skills">Skills</a>
        <a href="#projects">Projects</a>
        <a href="#certifications">Certifications</a>        
        <a href="#leadership">Leadership</a>
        <a href="#achievements">Achievements</a>
        <a href="#experience">Experience</a>
        <a href="#contact">Contact</a>
      </nav>
      
      {/* Hero  / AboutSection */}
      <section id="about">
        <h1>{portfolioData.name}</h1>
        <h2>{portfolioData.role}</h2>
        <p>{portfolioData.bio}</p>
      </section>

      {/* Education Section */}
      <section id="education" data-aos="fade-up">
        <h3>Education</h3>
        <div className="card-grid">
          {portfolioData.education.map((edu, index) => (
            <div key={index} data-aos="zoom-in">
              <h4>{edu.degree}</h4>
              <p><em>{edu.institution} ({edu.year})</em></p>
              <p>{edu.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Skills / Tech Stack Section */}
      <section id="skills">
        <h3>Technical Skills</h3>
        {portfolioData.techStack.map((group, index) =>(
          <div key={index} data-aos="zoom-in">
            <strong>{group.category} :  </strong>
            <span>{group.skills.join(', ')}</span>
          </div>
        ))}
      </section>
      
      {/*Projects Section*/}
      <section id="projects">
        <h3>Projects</h3>
        <div className="card-grid">
          {portfolioData.projects.map((project, index) => (
            <div key={index} data-aos="zoom-in">
              <h4>{project.title}</h4>
              <p><em>Tech: {project.techStack}</em></p>
              <p>{project.description}</p>
              <a href={project.link} target="_blank" rel="noopener noreferrer">View Project</a>
            </div>
          ))}
        </div>
      </section>

      {/* Certifications Section */}
      <section id="certifications" data-aos="fade-up">
        <h3>Certifications</h3>
        <div className="card-grid">
          {portfolioData.certifications.map((cert, index) => (
            <div key={index} data-aos="zoom-in">
              <h4>{cert.title}</h4>
              <p>{cert.issuer} </p>
              <p>({cert.year})</p>
            </div>
          ))}
        </div>
      </section>

      {/*Leadership and Organizations Section*/}
      <section id="leadership">
        <h3>Organizational & Leadership Experience</h3>
        <div className="card-grid">
        {portfolioData.leadership.map((lead,index) => (
          <div key={index} data-aos="zoom-in">
            {lead.image && (
              <img 
                src={lead.image} 
                alt={lead.role} 
                style={{ width: '100%', borderRadius: '6px', marginBottom: '1rem', objectFit: 'cover' }} 
              />
            )}
            <h4>{lead.role}</h4>
            <p>{lead.organization}</p>
            <p>{lead.description}</p>
          </div>
        ))}
        </div>
      </section>

      {/*Achievements Section*/}
      <section id="achievements">
        <h3>Achievements</h3>
        <div className="card-grid">
        {portfolioData.achievements.map((achievement, index) => (
          <div key={index} data-aos="zoom-in">
            {achievement.image && (
              <img 
                src={achievement.image} 
                alt={achievement.title} 
                style={{ width: '100%', borderRadius: '6px', marginBottom: '1rem', objectFit: 'cover' }} 
              />
            )}
            <h4>{achievement.title}</h4>
            <p>{achievement.description}</p>
          </div>
        ))}
        </div>
      </section>

      {/*Experience Section*/}
      <section id="experience">
        <h3>Professional Experience</h3>
        <div className="card-grid">
        {portfolioData.experience.map((exp, index) => (
          <div key={index} data-aos="zoom-in">
            <h4>{exp.role}</h4>
            <p>{exp.organization} ({exp.duration})</p>
            <p>{exp.description}</p>
          </div>
        ))}
        </div>
      </section>

      {/* Contact & Languages */}
      <section id="contact">
        <h3>Contact</h3>
        
        {/* The flex container */}
        <div className="contact-container">
          
          {/* Left Side: Contact Info */}
          <div className="contact-info" data-aos="fade-right">
            <p><strong>Languages:</strong> {portfolioData.languages.join(', ')}</p>
            <p>Email: {portfolioData.contact.email}</p>
            <p>Phone: {portfolioData.contact.phone}</p>
            <p>Location: {portfolioData.contact.location}</p>
            <p>GitHub: <a href={portfolioData.contact.github}>{portfolioData.contact.github}</a></p>
            <p>LinkedIn: <a href={portfolioData.contact.linkedin}>{portfolioData.contact.linkedin}</a></p>
          </div>

          {/* Right Side: The Form */}
          <div className="contact-form-wrapper" data-aos="fade-left">
            <ContactForm />
          </div>

        </div>
      </section>

    </div>
  );
}

export default App;