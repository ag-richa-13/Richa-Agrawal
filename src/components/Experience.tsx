import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { experiences } from "../data/portfolio";
import { Building2, MapPin } from "lucide-react";
import experienceImg from "../assets/images/experience.png"; // Right-aligned image
import myteam11 from "../assets/images/myteam11_logo.jpg";
import labdox from "../assets/images/labdox_logo.jpg";
import { MdDiamond } from "react-icons/md";
import { RiCloseCircleLine } from "react-icons/ri";

import "../assets/style/experience.css"; // Import the CSS file

const Experience = () => {
  const [showPrompt, setShowPrompt] = useState(false);
  const [selectedSkills, setSelectedSkills] = useState<string[]>([]);

  // Disable body scrolling when prompt is open
  useEffect(() => {
    if (showPrompt) {
      document.body.style.overflow = "hidden"; // Disable scrolling
    } else {
      document.body.style.overflow = "auto"; // Enable scrolling
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
    <section id="experience">
      <div className="experience-container mx-auto px-4">
        <h2 className="experience-heading">&lt;Experience./&gt;</h2>
        <div className="experience-content flex flex-col lg:flex-row gap-8">
          <div className="experience-cards flex-1 space-y-6">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="experience-card bg-[#1a1a1a] rounded-xl p-6 hover:shadow-lg transition-all"
              >
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6">
                  <div className="experience-logo-container w-16 h-16 sm:w-20 sm:h-20 flex-shrink-0">
                    <img
                      src={
                        exp.company === "MyTeam11 Fantasy Sports"
                          ? myteam11
                          : labdox
                      }
                      alt={exp.company}
                      className="experience-logo-img w-full h-full object-contain rounded-lg"
                    />
                  </div>
                  <div className="experience-details flex-1">
                    <h3 className="experience-role text-xl font-semibold mb-2">
                      {exp.role}
                    </h3>
                    <div className="experience-company-duration flex items-center gap-2 text-gray-300 mb-1">
                      <Building2 size={16} />
                      <span>{exp.company}</span>
                    </div>
                    <div className="experience-duration text-gray-400 mb-1">
                      {exp.duration}
                    </div>
                    <div className="experience-location flex items-center gap-2 text-gray-300 mb-3">
                      <MapPin size={16} />
                      <span>{exp.location}</span>
                    </div>
                    <div
                      onClick={() => handleSkillsClick(exp.skills)}
                      className="skills-section inline-flex items-center gap-2 bg-[#2a2a2a] px-3 py-2 rounded-lg cursor-pointer hover:bg-[#333] transition-colors"
                    >
                      <MdDiamond
                        size={20}
                        className="skills-icon text-blue-400"
                      />
                      <span className="skills-text text-sm">
                        {exp.skills.slice(0, 2).join(", ")}
                        {exp.skills.length > 2 && (
                          <span className="skills-expanded text-blue-400">
                            {" "}
                            +{exp.skills.length - 2} more
                          </span>
                        )}
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          <div className="experience-image hidden lg:block w-1/3">
            <img
              src={experienceImg}
              alt="Experience illustration"
              className="experience-right-image w-full h-auto sticky top-24"
            />
          </div>
        </div>
      </div>

      {/* Skills Prompt Overlay */}
      {showPrompt && (
        <div className="skills-prompt-overlay fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="skills-prompt relative bg-[#1a1a1a] rounded-xl p-6 max-w-md w-full mx-auto">
            <button
              onClick={handlePromptClose}
              className="skills-prompt-close-btn absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
            >
              <RiCloseCircleLine size={24} />
            </button>
            <h3 className="skills-prompt-heading text-2xl font-semibold mb-4">
              Skills
            </h3>
            <div className="skills-prompt-list text-gray-300">
              {selectedSkills.map((skill, index) => (
                <span
                  key={index}
                  className="inline-block bg-[#2a2a2a] rounded-full px-3 py-1 text-sm mr-2 mb-2"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Experience;
