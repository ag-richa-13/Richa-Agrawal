// Remove the unused import
// import React from "react";
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
    <section id="about" className="about-section">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-8"
        >
          {/* Introduction */}
          <div className="text-center md:text-left mb-10 flex flex-col gap-4 items-center md:items-start md:w-[60%]">
            <h2 className="text-4xl font-bold heading mb-4">About Me</h2>
            <p className="text-lg text-gray-300">
              I'm Richa Agrawal, a proactive Software Development Engineer
              passionate about building engaging digital experiences through
              game and web development. With hands-on expertise in Unity, C#,
              and API integration, I’ve led the development of high-performance
              games and dynamic web solutions. From crafting intuitive user
              interfaces to enhancing system performance, I thrive on delivering
              quality, user-focused results. Recognized as a 'Quality Enforcer'
              and 'Intern of the Month', I bring creativity, collaboration, and
              precision to every project. Let's connect and turn ideas into
              impactful digital products!
            </p>

            <div className="text-center">
              <button className="hire-me-button px-6 py-3 rounded-full text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:shadow-lg transition-transform transform hover:scale-105">
                Hire Me
              </button>
            </div>
          </div>

          {/* Education Card */}
          <div className="glass-card hover:glass-card-hover md:w-30% rounded-2xl p-8 mb-8">
            <div className="flex items-center gap-4 mb-6">
              <GraduationCap className="w-8 h-8 text-purple-500" />
              <h3 className="text-2xl font-semibold">Education Quest</h3>
            </div>
            <div className="space-y-4">
              <h4 className="text-xl font-medium">B.Tech in IT</h4>
              <p className="text-gray-400 text-lg">Engineering College Ajmer</p>
              <div className="flex justify-between text-gray-500">
                <span>2019 - 2023</span>
                <div className="flex items-center gap-2">
                  <MapPin className="w-5 h-5" />
                  <span>Ajmer, Rajasthan</span>
                </div>
              </div>
            </div>
          </div>

          {/* Hire Me Button */}
        </motion.div>
      </div>
    </section>
  );
};

export default About;
