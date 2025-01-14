import React from "react";
import { motion } from "framer-motion";
import { education } from "../data/portfolio";
import { GraduationCap, MapPin } from "lucide-react";
import { IoSchool } from "react-icons/io5";
import { AiFillStar } from "react-icons/ai";
import "../assets/style/education.css";

const Education = () => {
  return (
    <section id="education">
      <div className="container mx-auto px-4">
        <h2 className="section-title">&lt;Education./&gt;</h2>
        <div className="timeline">
          {education.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className={`timeline-item ${index % 2 === 0 ? "left" : "right"}`}
            >
              <div className="timeline-dot">
                <IoSchool className="timeline-icon" />
              </div>
              <div className="timeline-content">
                <div className="content-header">
                  <h3 className="degree">{edu.degree}</h3>
                  <div className="institution">
                    <GraduationCap size={18} className="icon" />
                    <span>{edu.institution}</span>
                  </div>
                </div>
                <div className="details">
                  <div className="duration">{edu.duration}</div>
                  <div className="location">
                    <MapPin size={16} className="location-icon" />
                    <span>{edu.location}</span>
                  </div>
                  {edu.grade && <div className="grade">{edu.grade}</div>}
                </div>
              </div>
            </motion.div>
          ))}
          <div className="timeline-end">
            <AiFillStar className="timeline-end-icon" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
