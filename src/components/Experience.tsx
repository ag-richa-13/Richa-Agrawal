import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { experiences } from "../data/portfolio";
import { Building2, MapPin } from "lucide-react";
import myteam11 from "../assets/images/myteam11_logo.jpg";
import labdox from "../assets/images/labdox_logo.jpg";
import { MdDiamond } from "react-icons/md";
import { RiCloseCircleLine } from "react-icons/ri";
import { FaGamepad } from "react-icons/fa";

import "../assets/style/experience.css";

const Experience = () => {
  const [showPrompt, setShowPrompt] = useState(false);
  const [selectedSkills, setSelectedSkills] = useState<string[]>([]);

  useEffect(() => {
    if (showPrompt) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [showPrompt]);

  const handlePromptClose = () => {
    setShowPrompt(false);
    setSelectedSkills([]);
  };

  const handleSkillsClick = (skills: string[]) => {
    setSelectedSkills(skills);
    setShowPrompt(true);
  };

  return (
    <section id="experience" className="min-h-screen py-20 bg-[#0a0a16] w-full">
      <div className="max-w-6xl mx-auto px-4 w-full">
        <div className="text-center mb-16">
          <motion.div
            initial={{ y: -20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-4 mb-4"
          >
            <FaGamepad className="text-4xl text-emerald-400 animate-pulse" />
            <h2 className="text-4xl font-bold font-pixel text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">
              [QUEST_LOG]
            </h2>
          </motion.div>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Chronicles of my digital adventures and conquests in the realm of technology
          </p>
        </div>
        
        <div className="grid gap-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ x: index % 2 === 0 ? -50 : 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="experience-card bg-[#12121f] rounded-lg p-6 border border-emerald-500/20 hover:border-emerald-500/40 transition-all duration-300"
            >
              <div className="flex flex-col lg:flex-row items-center gap-6">
                <div className="experience-logo-container w-20 h-20 lg:w-28 lg:h-28 flex-shrink-0">
                  <div className="w-full h-full relative group">
                    <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/20 to-cyan-500/20 rounded-lg transform rotate-6 group-hover:rotate-12 transition-transform duration-300"></div>
                    <img
                      src={exp.company === "MyTeam11 Fantasy Sports" ? myteam11 : labdox}
                      alt={exp.company}
                      className="w-full h-full object-contain rounded-lg relative z-10 p-2"
                    />
                  </div>
                </div>
                
                <div className="flex-1 space-y-4 text-center lg:text-left">
                  <div>
                    <h3 className="text-xl lg:text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400 mb-2">
                      {exp.role}
                    </h3>
                    <div className="flex flex-wrap justify-center lg:justify-start gap-4 text-gray-300">
                      <div className="flex items-center gap-2">
                        <Building2 size={16} className="text-emerald-400" />
                        <span>{exp.company}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin size={16} className="text-cyan-400" />
                        <span>{exp.location}</span>
                      </div>
                    </div>
                    <div className="text-emerald-400/80 mt-2 font-pixel text-sm">
                      {exp.duration}
                    </div>
                  </div>

                  <div
                    onClick={() => handleSkillsClick(exp.skills)}
                    className="inline-flex items-center gap-2 bg-emerald-500/5 px-4 py-3 rounded-lg cursor-pointer hover:bg-emerald-500/10 transition-colors border border-emerald-500/20 hover:border-emerald-500/30"
                  >
                    <MdDiamond size={20} className="text-emerald-400" />
                    <span className="text-sm">
                      {exp.skills.slice(0, 3).join(" • ")}
                      {exp.skills.length > 3 && (
                        <span className="text-emerald-400 ml-2">+{exp.skills.length - 3}</span>
                      )}
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {showPrompt && (
        <div className="fixed inset-0 bg-black/90 backdrop-blur-md z-50 flex items-center justify-center p-4">
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            className="relative bg-[#12121f]/90 backdrop-blur-sm rounded-lg p-4 sm:p-6 max-w-md w-full max-h-[80vh] overflow-y-auto border border-emerald-500/30"
          >
            <button
              onClick={handlePromptClose}
              className="absolute top-2 right-2 sm:top-4 sm:right-4 text-gray-400 hover:text-emerald-400 transition-colors"
            >
              <RiCloseCircleLine size={24} />
            </button>
            <h3 className="text-xl sm:text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400 mb-4 sm:mb-6">
              /SKILLS_ACQUIRED/
            </h3>
            <div className="grid grid-cols-2 gap-2 sm:gap-3">
              {selectedSkills.map((skill, index) => (
                <span
                  key={index}
                  className="px-3 py-1.5 sm:px-4 sm:py-2 bg-emerald-500/5 rounded-lg text-xs sm:text-sm border border-emerald-500/20 text-emerald-300 text-center hover:bg-emerald-500/10 transition-colors"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      )}
    </section>
  );
};

export default Experience;
