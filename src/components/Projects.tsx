import React from "react";
import { FaGithub } from "react-icons/fa"; // Importing React Icons
import { FaDownload } from "react-icons/fa6";
import { projects } from "../data/portfolio"; // Importing project data from portfolio.ts
import "../assets/style/project.css"; // Import CSS file for styling

const Project = () => {
  return (
    <div className="projects-section mx-auto px-4" id="projects">
      <h2 className="projects-heading">&lt;Projects./&gt;</h2>{" "}
      {/* Project Section Heading */}
      <div className="projects-container">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <div className="project-image">
              <img src={project.imageUrl} alt={project.title} />
            </div>
            <h2 className="project-title">{project.title}</h2>
            <p className="project-description">{project.description}</p>
            <ul className="project-skills">
              {project.techStack.split(", ").map((skill, index) => (
                <li key={index} className="skill-bubble">
                  {skill}
                </li>
              ))}
            </ul>
            <div className="project-buttons">
              <a
                href={project.apkUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="button apk-btn"
              >
                <FaDownload size={18} className="icon" />{" "}
                {/* React Icon for APK */}
                Download APK
              </a>
              <a
                href={project.apkUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="button gtihub-btn"
              >
                <FaDownload size={18} className="icon" />{" "}
                {/* React Icon for APK */}
                View Code
              </a>
            </div>
          </div>
        ))}
      </div>
      {/* New section to encourage visiting GitHub */}
      <div className="github-prompt">
        <h3>Explore More of My Projects</h3>
        <p>
          Dive deeper into my work and discover even more of my projects, code
          snippets, and ideas. All of my open-source projects can be found on
          GitHub.
        </p>
        <div className="github-info">
          <FaGithub size={32} className="github-icon" />
          <a
            href="https://github.com/ag-richa-13"
            target="_blank"
            rel="noopener noreferrer"
            className="github-link"
          >
            Visit My GitHub Profile
          </a>
        </div>
      </div>
    </div>
  );
};

export default Project;
