import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Gamepad, Database, Brain } from 'lucide-react';

export function About() {
  const features = [
    {
      icon: Gamepad,
      title: 'Game Development',
      description: 'Specialized in Unity and C# for creating engaging gaming experiences'
    },
    {
      icon: Code2,
      title: 'Web Development',
      description: 'Full-stack development with modern frameworks and technologies'
    },
    {
      icon: Database,
      title: 'Backend Systems',
      description: 'Expertise in API development and database management'
    },
    {
      icon: Brain,
      title: 'Problem Solving',
      description: 'Strong analytical and algorithmic thinking skills'
    }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-b from-gray-900 to-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Proactive Software Development Engineer passionate about creating innovative solutions
            through game and web development. Committed to delivering high-quality, user-focused experiences.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative bg-gray-800 p-6 rounded-2xl border border-gray-700 hover:border-indigo-500 transition-all duration-300"
            >
              <div className="absolute -top-4 left-4 bg-gradient-to-r from-indigo-500 to-purple-500 p-3 rounded-xl shadow-lg group-hover:-translate-y-1 transition-transform duration-300">
                <feature.icon className="h-6 w-6 text-white" />
              </div>
              <div className="mt-8">
                <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mt-16 bg-gray-800 p-8 rounded-2xl border border-gray-700"
        >
          <div className="prose prose-invert max-w-none">
            <p className="text-gray-300 leading-relaxed">
              With a strong foundation in both game and web development, I bring a unique perspective to software engineering.
              My experience at MyTeam11 Fantasy Sports has honed my skills in creating performant and scalable applications,
              while my time at Labdox allowed me to develop a keen eye for user experience and design.
            </p>
            <p className="text-gray-300 leading-relaxed mt-4">
              I'm particularly passionate about creating interactive experiences that engage users and solve real-world problems.
              Whether it's developing games that entertain millions or building web applications that streamline processes,
              I approach each project with dedication and attention to detail.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}