import React from "react";
import { motion } from "framer-motion";
import "../assets/style/about.css";
import { GraduationCap, MapPin, Terminal, Code2, Gamepad2, User2, Briefcase } from "lucide-react";

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
    <section id="about" className="about-section py-20 bg-gradient-to-b from-gray-900 to-black w-full">
      <div className="container mx-auto px-4 w-full">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto w-full"
        >
          {/* Header Section */}
          <div className="text-center mb-12">
            <motion.h2
              initial={{ y: -20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="text-3xl md:text-4xl font-bold text-gradient mb-4"
            >
              About Me
            </motion.h2>
            <div className="flex items-center justify-center space-x-4">
              <span className="h-[1px] w-20 bg-gradient-to-r from-transparent via-purple-500 to-transparent"></span>
              <User2 className="w-6 h-6 text-purple-500" />
              <span className="h-[1px] w-20 bg-gradient-to-r from-transparent via-purple-500 to-transparent"></span>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Left Column - Profile & Experience */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-8"
            >
              {/* Profile Card */}
              <div className="glass-card p-6 rounded-xl">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center">
                    <User2 className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400">
                      RICHA AGRAWAL
                    </h3>
                    <p className="text-gray-400">Software Development Engineer</p>
                  </div>
                </div>
                
                <div className="grid grid-cols-3 gap-4">
                  <div className="stat-card p-4 rounded-lg">
                    <Terminal className="w-6 h-6 mb-2 text-purple-500" />
                    <p className="text-sm">Level 1 SDE</p>
                  </div>
                  <div className="stat-card p-4 rounded-lg">
                    <Code2 className="w-6 h-6 mb-2 text-purple-500" />
                    <p className="text-sm">Full Stack</p>
                  </div>
                  <div className="stat-card p-4 rounded-lg">
                    <Gamepad2 className="w-6 h-6 mb-2 text-purple-500" />
                    <p className="text-sm">Game Dev</p>
                  </div>
                </div>
              </div>

              {/* Experience Card */}
              <div className="glass-card p-6 rounded-xl">
                <div className="flex items-center gap-3 mb-6">
                  <Briefcase className="w-6 h-6 text-purple-500" />
                  <h3 className="text-xl font-semibold">Current Quest</h3>
                </div>
                <div className="space-y-4">
                  <p className="text-gray-300">
                    Currently crafting immersive gaming experiences at{" "}
                    <span className="text-purple-400">MyTeam11 Fantasy Sports</span>
                  </p>
                  <p className="text-gray-300">
                    Specializing in projects like Power Ludo and combining{" "}
                    <span className="text-purple-400">technical mastery</span> with{" "}
                    <span className="text-purple-400">creative innovation</span>
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Right Column - Education & Skills */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-8"
            >
              {/* Education Card */}
              <div className="glass-card p-6 rounded-xl">
                <div className="flex items-center gap-3 mb-6">
                  <GraduationCap className="w-6 h-6 text-purple-500" />
                  <h3 className="text-xl font-semibold">Education Quest</h3>
                </div>
                <div className="space-y-4">
                  <h4 className="text-lg font-medium">B.Tech in IT</h4>
                  <p className="text-gray-400">Engineering College Ajmer</p>
                  <div className="flex justify-between text-sm text-gray-500">
                    <span>2019 - 2023</span>
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4" />
                      <span>Ajmer, Rajasthan</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Skills Card */}
              <div className="glass-card p-6 rounded-xl">
                <div className="flex items-center gap-3 mb-6">
                  <Code2 className="w-6 h-6 text-purple-500" />
                  <h3 className="text-xl font-semibold">Tech Arsenal</h3>
                </div>
                <div className="grid grid-cols-4 md:grid-cols-7 gap-4 md:gap-6 place-items-center">
                  <div className="skill-icon unity-icon w-14 h-14" data-skill="unity">
                    <img src={UnityIcon} alt="Unity" className="w-10 h-10" />
                  </div>
                  <div className="skill-icon w-14 h-14" data-skill="csharp">
                    <img src={CSharpIcon} alt="C#" className="w-10 h-10" />
                  </div>
                  <div className="skill-icon" data-skill="nodejs">
                    <img src={NodeJsIcon} alt="Node.js" />
                  </div>
                  <div className="skill-icon" data-skill="html">
                    <img src={HtmlIcon} alt="HTML5" />
                  </div>
                  <div className="skill-icon" data-skill="css">
                    <img src={CssIcon} alt="CSS3" />
                  </div>
                  <div className="skill-icon" data-skill="javascript">
                    <img src={JsIcon} alt="JavaScript" />
                  </div>
                  <div className="skill-icon" data-skill="sql">
                    <img src={SqlIcon} alt="SQL" />
                  </div>
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
