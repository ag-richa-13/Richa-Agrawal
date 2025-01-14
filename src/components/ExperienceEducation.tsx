import React, { useState } from "react";
import { motion } from "framer-motion";
import { experiences, education } from "../data/portfolio";
import {
  Building2,
  MapPin,
  GraduationCap,
  Calendar,
  Award,
} from "lucide-react";
import { MdDiamond } from "react-icons/md";
import { RiCloseCircleLine } from "react-icons/ri";
import experienceImg from "../assets/images/experience.png";

const ExperienceEducation = () => {
  const [showPrompt, setShowPrompt] = useState(false);
  const [selectedSkills, setSelectedSkills] = useState<string[]>([]);
  const [activeTab, setActiveTab] = useState("experience");

  const handleSkillsClick = (skills: string[]) => {
    setSelectedSkills(skills);
    setShowPrompt(true);
  };

  return (
    <section className="journey-section">
      <div className="container">
        <div className="tab-container">
          <button
            className={`tab-button ${
              activeTab === "experience" ? "active" : ""
            }`}
            onClick={() => setActiveTab("experience")}
          >
            &lt;Experience /&gt;
          </button>
          <button
            className={`tab-button ${
              activeTab === "education" ? "active" : ""
            }`}
            onClick={() => setActiveTab("education")}
          >
            &lt;Education /&gt;
          </button>
        </div>

        <div className="content-container">
          <div className="timeline-wrapper">
            {activeTab === "experience" ? (
              // Experience Timeline
              <div className="timeline">
                {experiences.map((exp, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="timeline-item"
                  >
                    <div className="timeline-content experience-card">
                      <div className="card-header">
                        <div className="company-logo">
                          <img
                            src={exp.logo}
                            alt={exp.company}
                            className="logo-img"
                          />
                        </div>
                        <h3>{exp.role}</h3>
                      </div>

                      <div className="card-body">
                        <div className="info-row">
                          <Building2 className="icon" />
                          <span>{exp.company}</span>
                        </div>
                        <div className="info-row">
                          <Calendar className="icon" />
                          <span>{exp.duration}</span>
                        </div>
                        <div className="info-row">
                          <MapPin className="icon" />
                          <span>{exp.location}</span>
                        </div>

                        <div
                          className="skills-badge"
                          onClick={() => handleSkillsClick(exp.skills)}
                        >
                          <MdDiamond className="icon" />
                          <span>View Skills</span>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            ) : (
              // Education Timeline
              <div className="timeline">
                {education.map((edu, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="timeline-item"
                  >
                    <div className="timeline-content education-card">
                      <div className="card-header">
                        <GraduationCap className="icon" />
                        <h3>{edu.degree}</h3>
                      </div>

                      <div className="card-body">
                        <div className="info-row">
                          <Award className="icon" />
                          <span>{edu.institution}</span>
                        </div>
                        <div className="info-row">
                          <Calendar className="icon" />
                          <span>{edu.duration}</span>
                        </div>
                        <div className="info-row">
                          <MapPin className="icon" />
                          <span>{edu.location}</span>
                        </div>

                        {edu.grade && (
                          <div className="grade-badge">
                            <span>Grade: {edu.grade}</span>
                          </div>
                        )}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            )}
          </div>

          <div className="illustration">
            <img src={experienceImg} alt="Journey illustration" />
          </div>
        </div>
      </div>

      {/* Skills Prompt */}
      {showPrompt && (
        <div className="prompt-overlay" onClick={() => setShowPrompt(false)}>
          <div className="prompt-content" onClick={(e) => e.stopPropagation()}>
            <button
              className="close-button"
              onClick={() => setShowPrompt(false)}
            >
              <RiCloseCircleLine />
            </button>
            <h3>Skills & Technologies</h3>
            <div className="skills-grid">
              {selectedSkills.map((skill, index) => (
                <span key={index} className="skill-tag">
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

export default ExperienceEducation;
