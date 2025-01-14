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
      <div className="experience-container">
        <h2 className="experience-heading">&lt;Experience. /&gt;</h2>
        <div className="experience-content">
          <div className="experience-cards">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="experience-card"
              >
                <div className="flex items-center gap-6 mb-6">
                  <div className="experience-logo-container">
                    <img
                      src={
                        exp.company === "MyTeam11 Fantasy Sports"
                          ? myteam11
                          : labdox
                      }
                      alt={exp.company}
                      className="experience-logo-img"
                    />
                  </div>
                  <div className="experience-details">
                    <h3 className="experience-role">{exp.role}</h3>
                    <div className="experience-company-duration">
                      <Building2 size={16} />
                      <span>{exp.company}</span>
                    </div>
                    <div className="experience-duration">{exp.duration}</div>
                    <div className="experience-location">
                      <MapPin size={16} />
                      <span>{exp.location}</span>
                    </div>
                    <div
                      onClick={() => handleSkillsClick(exp.skills)}
                      className="skills-section"
                    >
                      <MdDiamond size={24} className="skills-icon" />
                      <span className="skills-text">
                        {exp.skills.slice(0, 2).join(", ")}
                        {exp.skills.length > 2 && (
                          <span className="skills-expanded">
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
          <div className="experience-image">
            <img
              src={experienceImg}
              alt="Experience illustration"
              className="experience-right-image"
            />
          </div>
        </div>
      </div>

      {/* Prompt Overlay */}
      {showPrompt && (
        <div className="skills-prompt-overlay">
          <div className="skills-prompt-glow"></div>
          <div className="skills-prompt">
            <button
              onClick={handlePromptClose}
              className="skills-prompt-close-btn"
            >
              <RiCloseCircleLine size={24} />
            </button>
            <h3 className="skills-prompt-heading">Skills</h3>
            <div className="skills-prompt-list">
              {selectedSkills.join(", ")}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Experience;
