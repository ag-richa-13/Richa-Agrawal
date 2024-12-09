import React from "react";
import { motion } from "framer-motion";
import { Code2, Gamepad, Database, Brain } from "lucide-react";

export function About() {
  const features = [
    {
      icon: Gamepad,
      title: "Game Development",
      description:
        "Skilled in Unity and C# for developing immersive and interactive gaming experiences.",
    },
    {
      icon: Code2,
      title: "Web Development",
      description:
        "Proficient in full-stack web development with expertise in Node.js, HTML5, CSS3, and JavaScript.",
    },
    {
      icon: Database,
      title: "Database Management",
      description:
        "Experienced in working with SQL and MongoDB for efficient data storage and retrieval.",
    },
    {
      icon: Brain,
      title: "Problem Solving",
      description:
        "Strong analytical and algorithmic thinking skills to solve complex problems.",
    },
  ];

  return (
    <section
      id="about"
      className="py-20 bg-gradient-to-b from-[#021526] to-[#17153B]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2
            className="text-4xl font-bold text-white mb-4"
            style={{ fontFamily: "Poppins, sans-serif" }}
          >
            About Me
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto font-mono">
            A proactive Software Development Engineer with a passion for
            creating innovative solutions through game and web development.
            Committed to delivering high-quality, user-focused experiences.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative bg-gray-800 p-6 rounded-xl border border-gray-700 hover:border-cyan-500 transition-all duration-300"
            >
              <div className="absolute -top-4 left-4 bg-gradient-to-r from-[#17153B] to-[#2D033B] p-3 rounded-xl shadow-lg group-hover:-translate-y-1 transition-transform duration-300">
                <feature.icon className="h-6 w-6 text-gray-300 group-hover:text-white" />
              </div>
              <div className="mt-8">
                <h3 className="text-xl font-bold text-white mb-2 font-mono">
                  {feature.title}
                </h3>
                <p
                  className="text-gray-300 font-mono"
                  dangerouslySetInnerHTML={{ __html: feature.description }}
                />
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mt-16 bg-gray-800 p-8 rounded-xl border border-gray-700"
        >
          <div className="prose prose-invert max-w-none">
            <p className="text-gray-300 leading-relaxed font-mono">
              With a strong foundation in game and web development, I bring a
              unique perspective to software engineering. I am highly skilled in
              developing interactive games with Unity and C#, as well as
              building dynamic, scalable web applications with Node.js, HTML5,
              CSS3, and JavaScript. My experience with SQL and MongoDB enables
              me to manage data efficiently, and I am adept at using various
              tools like Postman, Git, Figma, and Android Studio for streamlined
              development processes.
            </p>
            <p className="text-gray-300 leading-relaxed mt-4 font-mono">
              I'm passionate about creating applications that solve real-world
              problems and engaging users through interactive, user-friendly
              experiences. Whether it's developing games or building web
              applications, I take pride in delivering solutions that are both
              functional and visually appealing.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
