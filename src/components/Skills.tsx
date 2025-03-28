import React from "react";
import { motion } from "framer-motion";
import "../assets/style/skills.css";

const Skills = () => {
  const skillCategories = [
    {
      title: "Game Development",
      skills: ["Unity", "C#", "Figma"],
      icon: "🎮"
    },
    {
      title: "Web Development",
      skills: ["HTML", "CSS", "JavaScript", "Node.js", "Express.js", "MySQL"],
      icon: "🌐"
    },
    {
      title: "Tools & Technologies",
      skills: ["Git", "Postman", "Android Studio", "GitHub", "Jira", "VS Code"],
      icon: "🛠️"
    },
  ];

  return (
    <section id="skills" className="skills-section w-full">
      <div className="container w-full">
        <h2 className="section-title">
          <span className="title-accent">&lt;</span>
          Skills Matrix
          <span className="title-accent">/&gt;</span>
        </h2>
        
        <div className="skills-grid">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="skill-card"
            >
              <div className="card-icon">{category.icon}</div>
              <h3 className="skill-title">{category.title}</h3>
              <div className="skills-list">
                {category.skills.map((skill, idx) => (
                  <span key={idx} className="skill-tag">{skill}</span>
                ))}
              </div>
              <div className="card-glow"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
