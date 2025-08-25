import React from "react";
import { motion } from "framer-motion";
import "../assets/style/skills.css";
import { Code2 } from "lucide-react";
const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      skills: ["C#", "C++", "JavaScript", "HTML5", "CSS3"],
      icon: "💻",
    },
    {
      title: "Frameworks & Libraries",
      skills: [
        "Unity",
        "React.js",
        "TypeScript",
        "Express.js",
        "Node.js",
        "APIs",
      ],
      icon: "📚",
    },
    {
      title: "Databases",
      skills: ["MySQL", "MongoDB"],
      icon: "🗄️",
    },
    {
      title: "Tools & Platforms",
      skills: [
        "VS Code",
        "Postman",
        "Git",
        "GitHub",
        "Android Studio",
        "Figma",
        "Jira",
      ],
      icon: "🛠️",
    },
  ];

  return (
    <section id="skills" className="skills-section w-full">
      <div className="container w-full">
        <div className="text-center mb-12">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="section-title"
          >
            Skills Matrix
          </motion.h2>
          <div className="flex items-center justify-center space-x-4 mt-2">
            <span className="h-[1px] w-20 bg-gradient-to-r from-transparent via-purple-500 to-transparent"></span>
            <Code2 className="w-5 h-5 text-purple-500" />
            <span className="h-[1px] w-20 bg-gradient-to-r from-transparent via-purple-500 to-transparent"></span>
          </div>
        </div>

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
                  <span key={idx} className="skill-tag">
                    {skill}
                  </span>
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
