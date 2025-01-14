import React from "react";
import { motion } from "framer-motion";
import "../assets/style/about.css"; // Import the CSS file
import richaImage from "../assets/images/about.png";

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
    <section id="about" className="py-20 bg-[#181818]">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="space-y-12"
        >
          {/* About Me Section */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex items-center space-x-8"
          >
            {/* Image Section */}
            <div className="flex-shrink-0">
              <img
                src={richaImage}
                alt="About Me"
                className="w-512 h-308 object-cover"
              />
            </div>

            {/* Content Section */}
            <div className="text-gray-300 flex-1">
              <h2 className="text-4xl font-extrabold mb-8 text-[#B6A28E]">
                &lt;AboutMe. /&gt;
              </h2>
              <p className="leading-relaxed mb-4 text-lg">
                Hi, I'm a passionate{" "}
                <span className="font-semibold text-purple-400">
                  Software Development Engineer
                </span>
                , focused on creating engaging user experiences and solving
                complex challenges. My journey in tech has been driven by a love
                for creativity and problem-solving.
              </p>
              <p className="leading-relaxed mb-4 text-lg">
                Currently, I work at{" "}
                <span className="font-semibold text-pink-400">
                  MyTeam11 Fantasy Sports
                </span>
                , contributing to projects like Power Ludo, where I enhance user
                experiences and develop innovative features.
              </p>
              <p className="leading-relaxed text-lg">
                I believe in combining{" "}
                <span className="font-semibold text-blue-400">
                  technical expertise
                </span>{" "}
                with{" "}
                <span className="font-semibold text-green-400">
                  creative problem-solving
                </span>{" "}
                to deliver exceptional solutions.
              </p>
              <p className="leading-relaxed text-lg mt-4">
                <span className="skills-heading">Stuff I Know:</span>
                <div className="skills-container">
                  {/* Add data-skill attribute for hover customization */}
                  <div className="skill-icon" data-skill="unity">
                    <img src={UnityIcon} alt="Unity" />
                  </div>
                  <div className="skill-icon" data-skill="csharp">
                    <img src={CSharpIcon} alt="C#" />
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
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
