import React from 'react';
import { Github, ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';

export function Projects() {
  const projects = [
    {
      title: "Tic Tac Toe",
      description: "Multiplayer game with AI, offline, and online modes using PUN2",
      tech: ["Unity", "C#", "Figma"],
      github: "#",
      demo: "#"
    },
    {
      title: "Crash Astral",
      description: "Aviator-inspired multiplayer game with real-time prediction mechanics",
      tech: ["Unity", "C#", "Figma"],
      github: "#",
      demo: "#"
    },
    {
      title: "CineCraze Watchlist",
      description: "Dynamic feature for managing personalized movie and drama watchlists",
      tech: ["Node.js", "MySQL", "HTML", "CSS"],
      github: "#",
      demo: "#"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-4">Featured Projects</h2>
          <p className="text-gray-400">Some of my notable works</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-gray-800 rounded-xl overflow-hidden border border-gray-700 hover:border-indigo-500 transition-all hover:-translate-y-1"
            >
              <div className="p-6">
                <h3 className="text-xl font-bold text-white">{project.title}</h3>
                <p className="mt-2 text-gray-400">{project.description}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.tech.map((tech, techIndex) => (
                    <span key={techIndex} className="px-3 py-1 text-sm bg-gray-900 text-indigo-400 rounded-full">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="mt-6 flex space-x-4">
                  <a href={project.github} className="flex items-center text-gray-400 hover:text-indigo-400">
                    <Github size={20} className="mr-1" />
                    <span>Code</span>
                  </a>
                  <a href={project.demo} className="flex items-center text-gray-400 hover:text-indigo-400">
                    <ExternalLink size={20} className="mr-1" />
                    <span>Demo</span>
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}