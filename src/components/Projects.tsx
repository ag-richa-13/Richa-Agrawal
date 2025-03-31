import React, { useState } from "react";
import { FaGithub } from "react-icons/fa";
import { FaDownload } from "react-icons/fa6";
import { projects } from "../data/portfolio";
import "../assets/style/project.css";

const Projects = () => {
  const [filter, setFilter] = useState<"all" | "games" | "web">("all");

  const filteredProjects = projects.filter((project) => {
    if (filter === "all") return true;
    if (filter === "games") return project.type === "game";
    if (filter === "web") return project.type === "web";
    return true;
  });

  return (
    <div className="projects-section" id="projects">
      <div className="section-header">
        <h2 className="neon-text">Projects Archive</h2>
        <div className="header-decoration">
          <span className="line"></span>
          <FaGithub className="header-icon" />
          <span className="line"></span>
        </div>
      </div>

      <p className="section-description">
        Level up with my collection of games and web applications
      </p>

      <div className="filter-controls">
        <button
          className={`control-btn ${filter === "all" ? "active" : ""}`}
          onClick={() => setFilter("all")}
        >
          All Projects
        </button>
        <button
          className={`control-btn ${filter === "games" ? "active" : ""}`}
          onClick={() => setFilter("games")}
        >
          Games
        </button>
        <button
          className={`control-btn ${filter === "web" ? "active" : ""}`}
          onClick={() => setFilter("web")}
        >
          Web Apps
        </button>
      </div>

      <div className="projects-grid">
        {filteredProjects.map((project, index) => (
          <div className="project-card" key={index}>
            <div className="card-content">
              <div className="project-badge">
                {project.type === "game" ? "🎮 Game" : "🌐 Web"}
              </div>
              <h3 className="card-title">{project.title}</h3>
              <p className="card-description">{project.description}</p>

              <div className="tech-stack">
                <h4 className="stack-title">TECH STACK</h4>
                <div className="tech-tags">
                  {project.techStack.map((tech, idx) => (
                    <span key={idx} className="tech-tag">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="card-actions">
                {(project.type === "game" || project.title === "Power Ludo") && (
                  <a
                    href={project.apkUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="action-btn download-btn"
                  >
                    <FaDownload /> Download
                  </a>
                )}
                {(project.githubUrl || project.type === "web") && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="action-btn github-btn"
                  >
                    <FaGithub /> Source
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="more-projects">
        <div className="github-box">
          <div className="github-header">
            <FaGithub className="github-header-icon" />
            <h3>More Projects</h3>
          </div>
          <div className="github-content">
            <div className="github-stats">
              <div className="stat">
                <span className="stat-number">10+</span>
                <span className="stat-label">Projects</span>
              </div>
            </div>
            <a
              href="https://github.com/ag-richa-13"
              target="_blank"
              rel="noopener noreferrer"
              className="github-view-btn"
            >
              <FaGithub /> View GitHub Profile
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
