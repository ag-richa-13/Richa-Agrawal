import React from "react";
import { motion } from "framer-motion";
import { Code2, GamepadIcon, Database } from "lucide-react";
import richaImage from "../assets/richa.jpg";
export function Hero() {
  return (
    <section className="min-h-screen bg-gray-900 text-white py-20 flex items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl font-bold mb-6">
              <span className="block">Hi, I'm</span>
              <span className="block text-indigo-500">Richa Agrawal</span>
              <span className="block text-3xl mt-2">
                Software Development Engineer
              </span>
            </h1>
            {/* <p className="text-xl text-gray-400 mb-8">
              Passionate about creating engaging digital experiences through game and web development.
              Specialized in Unity, C#, and modern web technologies.
            </p> */}
            <div className="flex gap-4">
              <a
                href="#contact"
                className="px-8 py-3 bg-indigo-600 rounded-lg hover:bg-indigo-700 transition-colors"
              >
                Contact Me
              </a>
              <a
                href="#projects"
                className="px-8 py-3 border border-indigo-600 rounded-lg hover:bg-indigo-600/10 transition-colors"
              >
                View Work
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative w-80 h-80 mx-auto">
              <img
                src={richaImage}
                alt="Richa Agrawal"
                className="rounded-full w-full h-full object-cover border-4 border-indigo-600"
              />
              <div className="absolute -right-4 -bottom-4 bg-indigo-600 p-4 rounded-full">
                <GamepadIcon className="h-8 w-8" />
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {[
            { icon: GamepadIcon, title: "Game Dev", desc: "Unity & C# Expert" },
            { icon: Code2, title: "Web Dev", desc: "Full Stack Developer" },
            {
              icon: Database,
              title: "Backend",
              desc: "API & Database Specialist",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="bg-gray-800 p-6 rounded-xl border border-gray-700 hover:border-indigo-600 transition-colors"
            >
              <item.icon className="h-10 w-10 text-indigo-500 mb-4" />
              <h3 className="text-xl font-bold mb-2">{item.title}</h3>
              <p className="text-gray-400">{item.desc}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
