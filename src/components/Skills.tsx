import React from "react";
import { motion } from "framer-motion";
import "../assets/style/skills.css";

const Skills = () => {
  const skillCategories = [
    {
      title: "Game Development",
      skills: "Unity, C#, Figma",
      color: "text-purple-400",
      // "background-color": "#14022e", // Dark Green
    },
    {
      title: "Web Development",
      skills: "HTML, CSS, JavaScript, Node.js, Express.js, MySQL",
      color: "text-blue-400",
      // "background-color": "#38031a", // Dark Purple
    },
    {
      title: "Tools",
      skills: "Git, Postman, Android Studio, GitHub, Jira, VS Code",
      color: "text-pink-400",
      // "background-color": "#04022a", // Dark Red
    },
  ];

  return (
    <section id="skills" className="py-20 bg-[#252526]">
      <div className="container mx-auto px-4">
        <h2
          className="text-3xl font-bold mb-8 text-green-400"
          id="skill-heading"
        >
          &lt;MySkills./&gt;
        </h2>
        <div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 skills-container"
          id="skill-grid"
        >
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="p-6 rounded-lg hover:scale-105 hover:shadow-lg transition-transform duration-300"
              id="skill-card"
              // Dynamically setting background color
            >
              <h3
                className={`text-xl font-bold mb-4 ${category.color}`}
                id="skill-title"
              >
                {category.title}
              </h3>
              <p className="text-gray-300" id="skill-text">
                {category.skills}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
