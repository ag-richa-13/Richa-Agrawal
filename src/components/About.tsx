// Remove the unused import
// import React from "react";
import { motion } from "framer-motion";
import "../assets/style/about.css";
import { GraduationCap, MapPin, User } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="about-section">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <motion.h2
            initial={{ y: -20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold heading-gradient mb-4"
          >
            About Me
          </motion.h2>
          <div className="flex items-center justify-center space-x-4">
            <span className="h-[1px] w-20 bg-gradient-to-r from-transparent via-[#ea7907] to-transparent"></span>
            <User className="w-6 h-6 text-[#ea7907]" />
            <span className="h-[1px] w-20 bg-gradient-to-r from-transparent via-[#ea7907] to-transparent"></span>
          </div>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-8"
        >
          {/* Introduction */}
          <div className="text-center md:text-left mb-10 flex flex-col gap-6 items-center md:items-start md:w-[60%] bg-gradient-to-r from-[#1a1f2c] to-[#0f1218] p-6 rounded-lg shadow-lg">
            <p className="text-md text-gray-300 leading-relaxed">
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

            <div className="text-center mt-6 flex gap-4">
              <button
                className="freelancer-button px-8 py-3 text-white hover:shadow-xl transition-transform transform hover:scale-110"
                onClick={() =>
                  window.open(
                    "https://www.freelancer.com/u/agricha13",
                    "_blank"
                  )
                }
              >
                Freelancer
              </button>
              <button
                className="email-button px-8 py-3 text-white hover:shadow-xl transition-transform transform hover:scale-110"
                onClick={() =>
                  (window.location.href = "mailto:your-email@example.com")
                }
              >
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
        </motion.div>
      </div>
    </section>
  );
};

export default About;
