import React from 'react';
import { motion } from 'framer-motion';

export function Skills() {
  const skills = {
    "Game Development": ["Unity", "C#"],
    "Web Development": ["Node.js", "HTML5", "CSS3", "JavaScript"],
    "Database": ["SQL", "MongoDB"],
    "Tools": ["Postman", "Git", "Figma", "Android Studio"],
    "API Integration": ["RESTful APIs"]
  };

  return (
    <section className="py-20 bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-4">Technical Skills</h2>
          <p className="text-gray-400">Technologies I work with</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {Object.entries(skills).map(([category, items], index) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-gray-900 rounded-xl p-6 border border-gray-700"
            >
              <h3 className="text-lg font-semibold text-indigo-400 mb-4">{category}</h3>
              <div className="flex flex-wrap gap-2">
                {items.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="px-3 py-1 bg-gray-800 text-gray-300 rounded-full border border-gray-700"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}