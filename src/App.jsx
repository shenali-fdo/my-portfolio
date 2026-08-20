import React from "react";
import portfolioData from './data.json';
import './App.css';
import ContactForm from './ContactForm';

function App(){
  return(
    <div>
      {/* Navigation */}
      <nav>
        <a href="#about">About</a> |
        <a href="#skills">Skills</a> |
        <a href="#projects">Projects</a> |
        <a href="#education">Education & Certs</a> |
        <a href="#leadership">Leadership</a> |
        <a href="#achievements">Achievements</a> |
        <a href="#experience">Experience</a> |
        <a href="#contact">Contact</a>
      </nav>
      {/* Hero  / AboutSection */}
      <section id="about">
        <h1>{portfolioData.name}</h1>
        <h2>{portfolioData.role}</h2>
        <p>{portfolioData.bio}</p>
      </section>

      {/* Skills / Tech Stack Section */}
      <section id="skills">
        <h3>Technical Skills</h3>
        {portfolioData.techStack.map((group, index) =>(
          <div key={index}>
            <strong>{group.category}</strong>
            <span>{group.skills.join(', ')}</span>
          </div>
        ))}
      </section>
     
      {/*Projects Section*/}
      <section id="projects">
        <h3>My Projects</h3>
        {portfolioData.projects.map((project, index) => (
          <div key={index}>
            <h4>{project.title}</h4>
            <p>{project.description}</p>
            <p><strong>Status:</strong> {project.status}</p>
            <p><strong>Tech:</strong> {project.techStack}</p>
            <p><strong>Link:</strong> <a href={project.link} target="_blank" rel="noopener noreferrer">View Project</a></p>
          </div>
        ))}
      </section>

      {/* Education & Certifications */}
      <section id="education">
        <h3>Education</h3>
        {portfolioData.education.map((edu, index) => (
          <div key={index}>
            <h4>{edu.degree}</h4>
            <p>{edu.school} ({edu.year})</p>
            <p>{edu.description}</p>
          </div>
        ))}
        
        <h3>Certifications</h3>
        {portfolioData.certifications.map((cert, index) => (
          <div key={index}>
            <p><strong>{cert.title}</strong> - {cert.issuer} ({cert.year})</p>
          </div>
        ))}
      </section>

      {/*Leadership and Organizations Section*/}
      <section id = "leadership">
        <h3>Organizational & Leadership Experience</h3>
        {portfolioData.leadership.map((lead,index) => (
          <div key={index}>
            <h4>{lead.role}</h4>
            <p>{lead.organization}</p>
            <p>{lead.description}</p>
          </div>
        ))}
      </section>

      {/*Achievements Section*/}
      <section id="achievements">
        <h3>Achievements</h3>
        {portfolioData.achievements.map((achievement, index) => (
          <div key={index}>
            <p><strong>{achievement.title}</strong> - {achievement.description}</p>
          </div>
        ))}
      </section>

      {/*Experience Section*/}
      <section id="experience">
        <h3>Professional Experience</h3>
        {portfolioData.experience.map((exp, index) => (
          <div key={index}>
            <h4>{exp.position}</h4>
            <p>{exp.company} ({exp.duration})</p>
            <p>{exp.description}</p>
          </div>
        ))}
      </section>

      {/* Contact & Languages */}
      <section id="contact">
        <h3>Contact</h3>
        <p><strong>Languages:</strong> {portfolioData.languages.join(', ')}</p>
        <p>Email: {portfolioData.contact.email}</p>
        <p>GitHub: <a href={portfolioData.contact.github}>{portfolioData.contact.github}</a></p>
        <p>LinkedIn: <a href={portfolioData.contact.linkedin}>{portfolioData.contact.linkedin}</a></p>
      
        <ContactForm />
      </section>   

    </div>
  );
}

export default App;