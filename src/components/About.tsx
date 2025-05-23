import React from "react";
import { motion } from "framer-motion";
import "../assets/style/about.css";
import {
  GraduationCap,
  MapPin,
  Terminal,
  Code2,
  Gamepad2,
  User2,
  Briefcase,
} from "lucide-react";

// Import your SVG files
import UnityIcon from "../assets/Icons/unity.svg";
import CSharpIcon from "../assets/Icons/csharp.svg";
import NodeJsIcon from "../assets/Icons/node.svg";
import HtmlIcon from "../assets/Icons/html.svg";
import CssIcon from "../assets/Icons/css.svg";
import JsIcon from "../assets/Icons/js.svg";
import SqlIcon from "../assets/Icons/mysql.svg";

const About = () => {
  return (
    <section id="about" className="about-section py-16 md:py-24">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-6xl mx-auto"
        >
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-4">
              About Me
            </h2>
            <div className="flex items-center justify-center space-x-4">
              <div className="h-[2px] w-24 bg-gradient-to-r from-purple-500/20 via-purple-500 to-purple-500/20"></div>
              <User2 className="w-6 h-6 text-purple-500" />
              <div className="h-[2px] w-24 bg-gradient-to-r from-purple-500/20 via-purple-500 to-purple-500/20"></div>
            </div>
          </div>

          {/* Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Left Column */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-8"
            >
              {/* Profile Card */}
              <div className="glass-card hover:glass-card-hover rounded-2xl p-8">
                <div className="flex items-start gap-6 mb-8">
                  <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-purple-500 to-pink-500 p-5">
                    <User2 className="w-full h-full text-white" />
                  </div>
                  <div>
                    <h3 className="text-3xl font-bold gradient-text mb-2">
                      RICHA AGRAWAL
                    </h3>
                    <p className="text-gray-400 text-lg">
                      Software Development Engineer
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-4">
                  <div className="stat-card hover:stat-card-hover p-4 rounded-xl text-center">
                    <Terminal className="w-8 h-8 mb-3 mx-auto text-purple-500" />
                    <p className="text-sm font-medium">Level 1 SDE</p>
                  </div>
                  <div className="stat-card hover:stat-card-hover p-4 rounded-xl text-center">
                    <Code2 className="w-8 h-8 mb-3 mx-auto text-purple-500" />
                    <p className="text-sm font-medium">Full Stack</p>
                  </div>
                  <div className="stat-card hover:stat-card-hover p-4 rounded-xl text-center">
                    <Gamepad2 className="w-8 h-8 mb-3 mx-auto text-purple-500" />
                    <p className="text-sm font-medium">Game Dev</p>
                  </div>
                </div>
              </div>

              {/* Experience Card */}
              <div className="glass-card hover:glass-card-hover rounded-2xl p-8">
                <div className="flex items-center gap-4 mb-6">
                  <Briefcase className="w-8 h-8 text-purple-500" />
                  <h3 className="text-2xl font-semibold">Current Quest</h3>
                </div>
                <div className="space-y-4 text-lg">
                  <p className="text-gray-300">
                    Currently crafting immersive gaming experiences at{" "}
                    <span className="text-purple-400 font-medium">
                      MyTeam11 Fantasy Sports
                    </span>
                  </p>
                  <p className="text-gray-300">
                    Specializing in projects like Power Ludo and combining{" "}
                    <span className="text-purple-400 font-medium">
                      technical mastery
                    </span>{" "}
                    with{" "}
                    <span className="text-purple-400 font-medium">
                      creative innovation
                    </span>
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Right Column */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-8"
            >
              {/* Education Card */}
              <div className="glass-card hover:glass-card-hover rounded-2xl p-8">
                <div className="flex items-center gap-4 mb-6">
                  <GraduationCap className="w-8 h-8 text-purple-500" />
                  <h3 className="text-2xl font-semibold">Education Quest</h3>
                </div>
                <div className="space-y-4">
                  <h4 className="text-xl font-medium">B.Tech in IT</h4>
                  <p className="text-gray-400 text-lg">
                    Engineering College Ajmer
                  </p>
                  <div className="flex justify-between text-gray-500">
                    <span>2019 - 2023</span>
                    <div className="flex items-center gap-2">
                      <MapPin className="w-5 h-5" />
                      <span>Ajmer, Rajasthan</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Skills Card */}
              <div className="glass-card hover:glass-card-hover rounded-2xl p-8">
                <div className="flex items-center gap-4 mb-8">
                  <Code2 className="w-8 h-8 text-purple-500" />
                  <h3 className="text-2xl font-semibold">Tech Arsenal</h3>
                </div>
                <div className="grid grid-cols-4 md:grid-cols-7 gap-6 place-items-center">
                  {[
                    { icon: UnityIcon, alt: "Unity", skill: "unity" },
                    { icon: CSharpIcon, alt: "C#", skill: "csharp" },
                    { icon: NodeJsIcon, alt: "Node.js", skill: "nodejs" },
                    { icon: HtmlIcon, alt: "HTML5", skill: "html" },
                    { icon: CssIcon, alt: "CSS3", skill: "css" },
                    { icon: JsIcon, alt: "JavaScript", skill: "javascript" },
                    { icon: SqlIcon, alt: "SQL", skill: "sql" },
                  ].map((tech, index) => (
                    <div
                      key={index}
                      className={`skill-icon hover:skill-icon-hover ${tech.skill}-icon`}
                      data-skill={tech.skill}
                    >
                      <img
                        src={tech.icon}
                        alt={tech.alt}
                        className="w-12 h-12"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
