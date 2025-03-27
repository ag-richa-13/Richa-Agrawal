import React from "react";
import { FaGithub } from "react-icons/fa";
import { FaDownload } from "react-icons/fa6";
import { projects } from "../data/portfolio";
import "../assets/style/project.css";

const Project = () => {
  return (
    <div className="projects-section mx-auto px-4" id="projects">
      <h2 className="projects-heading pixel-font">[PROJECTS_ARCHIVE]</h2>
      
      <div className="projects-container">
        {projects.map((project, index) => (
          <div 
            className="project-card" 
            key={index}
          >
            <div className="card-content">
              <h2 className="project-title pixel-font">/{project.title}/</h2>
              <div className="project-description">{project.description}</div>
              
              <div className="tech-stack-container">
                <h3 className="tech-stack-title pixel-font">{'>'} TECH STACK_</h3>
                <ul className="project-skills">
                  {project.techStack.split(", ").map((skill, index) => (
                    <li key={index} className="skill-bubble">
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="project-buttons">
                {project.type === 'game' && (
                  <a
                    href={project.apkUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="button download-btn"
                  >
                    <FaDownload size={16} className="icon" />
                    DOWNLOAD
                  </a>
                )}
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="button github-btn"
                >
                  <FaGithub size={16} className="icon" />
                  SOURCE
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="github-prompt">
        <h3 className="pixel-font">{'>'} MORE_PROJECTS</h3>
        <p>[ Explore the complete archive of my digital creations ]</p>
        <div className="github-info">
          <FaGithub size={24} className="github-icon" />
          <a
            href="https://github.com/ag-richa-13"
            target="_blank"
            rel="noopener noreferrer"
            className="github-link"
          >
            OPEN GITHUB PROFILE
          </a>
        </div>
      </div>
    </div>
  );
};

export default Project;
