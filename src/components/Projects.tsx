import React, { useState } from "react";
import { FaGithub } from "react-icons/fa";
import { FaDownload } from "react-icons/fa6";
import { projects } from "../data/portfolio";
import "../assets/style/project.css";

const Projects = () => {
  const [filter, setFilter] = useState<'all' | 'games' | 'web'>('all');

  const filteredProjects = projects.filter(project => {
    if (filter === 'all') return true;
    if (filter === 'games') return project.type === 'game';
    if (filter === 'web') return project.type === 'web';
    return true;
  });

  return (
    <div className="projects-section mx-auto px-4 w-full" id="projects">
      <h2 className="projects-heading pixel-font">[PROJECTS_ARCHIVE]</h2>
      <p className="text-center mb-8 font-mono">
        A showcase of my work in game development and web applications, demonstrating my
        skills and passion for creating interactive experiences.
      </p>

      <div className="filter-buttons mb-8 flex justify-center gap-4">
        <button 
          className={`button font-mono ${filter === 'all' ? 'active' : ''}`}
          onClick={() => setFilter('all')}
        >
          All Projects
        </button>
        <button 
          className={`button font-mono ${filter === 'games' ? 'active' : ''}`}
          onClick={() => setFilter('games')}
        >
          Games
        </button>
        <button 
          className={`button font-mono ${filter === 'web' ? 'active' : ''}`}
          onClick={() => setFilter('web')}
        >
          Web Apps
        </button>
      </div>
      
      <div className="projects-container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
        {filteredProjects.map((project, index) => (
          <div className="project-card" key={index}>
            <div className="card-content">
              <div className="project-type-bubble font-mono">
                {project.type === 'game' ? '🎮 Game' : '🌐 Web'}
              </div>
              <h2 className="project-title pixel-font">{project.title}</h2>
              <div className="project-description">{project.description}</div>
              
              <div className="tech-stack-container">
                <h3 className="tech-stack-title pixel-font">{'>'} TECH STACK_</h3>
                <ul className="project-skills">
                  {project.techStack.map((skill, index) => (
                    <li key={index} className="skill-bubble">
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="project-buttons">
                {project.type === 'game' && project.apkUrl && (
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
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="button github-btn"
                  >
                    <FaGithub size={16} className="icon" />
                    SOURCE
                  </a>
                )}
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

export default Projects;
