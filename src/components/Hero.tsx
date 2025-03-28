import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import ParticleBackground from "./ParticleBackground";
import TypeWriter from "./TypeWriter";
import "../assets/style/hero.css";
import resume from "../assets/images/Richa Agrawal.pdf";
import programmerImage from "../assets/images/richa.jpg"; // Update this with your image path
import { useState } from "react";

const Hero = () => {
  const roles = [
    "Software Developer",
    "Game Developer",
    "Unity Developer",
    "C# Developer",
    "Tech Adventurer",
    "Learning Enthusiast",
  ];

  const roleColors = [
    "#64ffda", // Cyan
    "#88ffea", // Light cyan
    "#64ffda", // Cyan
    "#88ffea", // Light cyan
    "#64ffda", // Cyan
    "#88ffea", // Light cyan
  ];

  const handleResumeClick = () => {
    window.open(resume, "_blank");
  };

  return (
    <section
      id="home"
      className="relative bg-[#0a192f] min-h-screen flex items-center justify-center p-4 sm:px-8 md:px-16 w-full"
      style={{
        fontFamily: "'JetBrains Mono', monospace",
      }}
    >
      <ParticleBackground />

      <div className="container mx-auto max-w-7xl px-4 sm:px-4 relative z-10 w-full">
        <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-8 sm:gap-12 max-w-full">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-left w-full md:w-1/2 lg:w-3/5 space-y-8 mt-8 md:mt-0"
          >
            <div className="space-y-6">
              <motion.div className="space-y-2">
                <motion.span
                  className="inline-flex items-center gap-2 text-[#64ffda] font-mono text-sm"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  <span className="opacity-50">[sys]</span>
                  <span className="animate-blink">▶</span>
                  <span className="typing-animation">
                    initializing_player_data
                  </span>
                </motion.span>
                <motion.h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-light">
                  <span className="text-slate-300">Richa Agrawal</span>
                </motion.h1>
              </motion.div>

              <motion.h2 className="text-lg sm:text-xl md:text-2xl font-light">
                <span className="text-[#64ffda] font-mono text-sm">
                  $ class{" "}
                </span>
                <span className="text-slate-400">
                  <TypeWriter
                    words={roles}
                    colors={roleColors}
                    delay={150}
                    infinite={true}
                  />
                </span>
              </motion.h2>

              <motion.p className="text-sm sm:text-base md:text-lg text-slate-400 font-light leading-relaxed">
                I'm passionate about game development and solving complex
                challenges. With expertise in Unity and C#, I create immersive
                gaming experiences that push creative boundaries.
              </motion.p>

              <motion.div>
                <button
                  onClick={handleResumeClick}
                  className="mt-8 mb-4 md:mb-0 px-8 py-3 bg-transparent 
                  text-[#64ffda] font-mono text-sm tracking-wider
                  transform transition-all duration-300 
                  border border-[#64ffda] relative
                  hover:bg-[#64ffda]/10
                  active:scale-98 flex items-center gap-4"
                >
                  <span className="relative">$ load_resume.exe</span>

                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 transition-all duration-300 group-hover:translate-x-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    />
                  </svg>
                </button>
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="w-full md:w-1/2 lg:w-2/5 flex items-center justify-center relative"
          >
            <div className="relative w-64 h-64 sm:w-80 sm:h-80">
              <img
                src={programmerImage}
                alt="Richa Agrawal"
                className="rounded-sm object-cover w-full h-full"
                style={{
                  border: "1px solid rgba(100,255,218,0.1)",
                  boxShadow: "4px 4px 0 rgba(100,255,218,0.1)",
                }}
              />
              <div className="absolute -inset-2 border border-[#64ffda]/20 rounded-sm -z-10"></div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
