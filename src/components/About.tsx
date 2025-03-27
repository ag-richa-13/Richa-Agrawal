import React from "react";
import { motion } from "framer-motion";
import "../assets/style/about.css";
// Remove this import
// import richaImage from "../assets/images/about.png";
import { GraduationCap, MapPin, Terminal, Code2, Gamepad2 } from "lucide-react";

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
    <section id="about" className="about-section py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12"
        >
          {/* Left Column - Player Info and Education */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-6 md:space-y-8" // Adjusted spacing for mobile
          >
            <div className="player-card p-4 md:p-6">
              <div className="player-info">
                <h3 className="player-name text-lg sm:text-xl md:text-2xl mb-2 md:mb-3">RICHA AGRAWAL</h3>
                <p className="player-title text-xs sm:text-sm md:text-base mb-4">Software Development Engineer</p>
                <div className="player-stats grid grid-cols-1 sm:grid-cols-3 gap-3 md:gap-4">
                  <div className="stat flex items-center gap-2 p-2 md:p-3">
                    <Terminal className="stat-icon w-4 h-4 md:w-5 md:h-5 flex-shrink-0" />
                    <span className="text-xs sm:text-sm md:text-base">Level 1 SDE</span>
                  </div>
                  <div className="stat flex items-center gap-2 p-2 md:p-3">
                    <Code2 className="stat-icon w-4 h-4 md:w-5 md:h-5 flex-shrink-0" />
                    <span className="text-xs sm:text-sm md:text-base">Full Stack Dev</span>
                  </div>
                  <div className="stat flex items-center gap-2 p-2 md:p-3">
                    <Gamepad2 className="stat-icon w-4 h-4 md:w-5 md:h-5 flex-shrink-0" />
                    <span className="text-xs sm:text-sm md:text-base">Game Developer</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="education-card p-4 md:p-6">
              <div className="card-header flex items-center justify-center sm:justify-start gap-3 mb-4">
                <GraduationCap className="header-icon w-5 h-5 md:w-6 md:h-6" />
                <h3 className="text-base md:text-lg">Education Quest</h3>
              </div>
              <div className="education-content text-center sm:text-left">
                <h4 className="text-base md:text-lg mb-2">B.Tech in IT</h4>
                <p className="institution text-sm md:text-base mb-3">Engineering College Ajmer</p>
                <div className="education-details flex flex-col sm:flex-row items-center sm:items-start justify-center sm:justify-between text-xs md:text-sm gap-2">
                  <span className="duration">2019 - 2023</span>
                  <div className="location flex items-center gap-2">
                    <MapPin className="w-3 h-3 md:w-4 md:h-4" />
                    <span>Ajmer, Rajasthan</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column - About Content and Skills */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="about-content">
              <h2 className="content-title flex items-center justify-center sm:justify-start gap-2 sm:gap-3 mb-6 sm:mb-8">
                <span className="bracket text-lg sm:text-xl md:text-2xl">[</span>
                <span className="title-text text-base sm:text-lg md:text-xl">PLAYER_PROFILE</span>
                <span className="bracket text-lg sm:text-xl md:text-2xl">]</span>
                <span className="status-dot w-2 h-2 sm:w-3 sm:h-3"></span>
              </h2>
              <div className="content-text">
                <p>
                  Greetings, fellow developers! I'm a passionate{" "}
                  <span className="highlight-text">
                    Software Development Engineer
                  </span>{" "}
                  on a quest to create engaging digital experiences.
                </p>
                <p>
                  Currently stationed at{" "}
                  <span className="highlight-text">
                    MyTeam11 Fantasy Sports
                  </span>
                  , where I'm crafting immersive gaming experiences in projects
                  like Power Ludo.
                </p>
                <p>
                  My mission is to combine{" "}
                  <span className="highlight-text">technical mastery</span> with{" "}
                  <span className="highlight-text">creative innovation</span> to
                  forge exceptional digital solutions.
                </p>
              </div>
            </div>

            <div className="skills-card">
              <h3 className="skills-title">Tech Arsenal</h3>
              <div className="skills-grid">
                <div className="skill-item" data-skill="unity">
                  <img src={UnityIcon} alt="Unity" />
                </div>
                <div className="skill-item" data-skill="csharp">
                  <img src={CSharpIcon} alt="C#" />
                </div>
                <div className="skill-item" data-skill="nodejs">
                  <img src={NodeJsIcon} alt="Node.js" />
                </div>
                <div className="skill-item" data-skill="html">
                  <img src={HtmlIcon} alt="HTML5" />
                </div>
                <div className="skill-item" data-skill="css">
                  <img src={CssIcon} alt="CSS3" />
                </div>
                <div className="skill-item" data-skill="javascript">
                  <img src={JsIcon} alt="JavaScript" />
                </div>
                <div className="skill-item" data-skill="sql">
                  <img src={SqlIcon} alt="SQL" />
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
