import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import ParticleBackground from "./ParticleBackground";
import TypeWriter from "./TypeWriter";
import "../assets/style/curser.css";
import resume from "../assets/images/Richa Agrawal.pdf";
import programmerImage from "../assets/images/profileImg.png"; // Update this with your image path

const Hero = () => {
  const imageRef = useRef<HTMLImageElement>(null); // Ref for the image

  useEffect(() => {
    const homeSection = document.querySelector("#home");
    const cursorTrailContainer = document.createElement("div");
    cursorTrailContainer.classList.add("cursor-trail-container");
    document.body.appendChild(cursorTrailContainer);

    const colorCycle = [
      "#008080",
      "#0000FF",
      "#430A5D",
      "#AF0171",
      "#FF0000",
      "#FFA500",
      "#EB8317",
      "#118B50",
      "#A28B55",
    ];

    let colorIndex = 0;
    let colorCount = 0;

    const createCursorRing = (e: MouseEvent) => {
      // Skip the cursor effect if mouse is over the image
      if (imageRef.current && imageRef.current.contains(e.target as Node))
        return;

      const chatbotContainer = document.querySelector(".chatbot-container");
      if (chatbotContainer && chatbotContainer.contains(e.target as Node))
        return;

      if (!homeSection?.contains(e.target as Node)) return;

      if (colorCount >= 50) {
        colorCount = 0;
        colorIndex = (colorIndex + 1) % colorCycle.length;
      }

      const ring = document.createElement("div");
      const size = 10;
      const color = colorCycle[colorIndex];

      ring.style.position = "absolute";
      ring.style.width = `${size}px`;
      ring.style.height = `${size}px`;
      ring.style.border = `1px solid ${color}`;
      ring.style.borderRadius = "50%";
      ring.style.transform = "translate(-50%, -50%)";
      ring.style.pointerEvents = "none";
      ring.style.transition =
        "transform 1s ease-out, opacity 1s ease-out, width 0.3s, height 0.3s";
      ring.style.left = `${e.pageX}px`;
      ring.style.top = `${e.pageY}px`;

      cursorTrailContainer.appendChild(ring);

      setTimeout(() => {
        ring.style.transform = `translate(-50%, -50%) translate(${
          Math.random() * 300 - 150
        }px, ${Math.random() * 300 - 150}px)`;
        ring.style.width = `${size * 3}px`;
        ring.style.height = `${size * 3}px`;
        ring.style.opacity = "0";
      }, 10);

      setTimeout(() => {
        ring.remove();
      }, 1000);

      colorCount++;
    };

    const stopRingEffectOnHover = (e: MouseEvent) => {
      const hoveredElement = e.target as HTMLElement;
      if (
        hoveredElement.matches(
          "#home h1, #home p, #home a, #home .text-left"
        ) ||
        hoveredElement.closest("#home h1, #home p, #home a, #home .text-left")
      ) {
        document.removeEventListener("mousemove", createCursorRing);
      } else {
        document.addEventListener("mousemove", createCursorRing);
      }
    };

    document.addEventListener("mousemove", createCursorRing);
    document.addEventListener("mouseover", stopRingEffectOnHover);

    return () => {
      document.removeEventListener("mousemove", createCursorRing);
      document.removeEventListener("mouseover", stopRingEffectOnHover);
      document.body.removeChild(cursorTrailContainer);
    };
  }, []);

  const roles = [
    "Software Developer",
    "Game Developer",
    "Curiosity Fueled Developer",
    "Tech Adventurer",
    "Skills Explorer",
    "Learning Enthusiast",
  ];

  const roleColors = [
    "#FA7070", //"#FFE700",
    "#88D66C", // "#FF0000",
    "#FFE700", //  "#FF0080",
    "#FF7EE2", // "#FF8000",
    "#FFA62F", //"#F05A7E",
    "#F2613F", // "#D2649A",
  ];

  const handleResumeClick = () => {
    window.open(resume, "_blank");
  };

  return (
    <section
      id="home"
      className="relative bg-[#000] min-h-screen flex items-center justify-center px-8 md:px-16"
      style={{ fontFamily: "'Quicksand', sans-serif" }}
    >
      <ParticleBackground />
      <div className="container mx-auto px-4 pt-16 md:pt-32">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 1.2,
              ease: "easeInOut",
              delay: 0.2,
            }}
            className="text-left md:w-2/5 space-y-6"
          >
            <div className="space-y-4">
              <motion.h2
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 1.4,
                  ease: "easeInOut",
                  delay: 0.6,
                }}
                className="text-xl md:text-2xl font-semibold"
              >
                <span className="text-[#F3D7CA] text-xl md:text-2xl font-bold">
                  Hello, I'm
                </span>
              </motion.h2>
              <motion.h1
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 1.4,
                  ease: "easeInOut",
                  delay: 0.4,
                }}
              >
                <span className="text-2xl md:text-4xl font-bold">
                  <span className="text-[#86A789]">Richa Agrawal</span>
                </span>
              </motion.h1>

              <motion.h2
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 1.4,
                  ease: "easeInOut",
                  delay: 0.6,
                }}
                className="text-xl md:text-2xl font-semibold"
              >
                <span className="text-[#57A6A1]">A </span>{" "}
                {/* Decrease font size of "A" */}
                <span className="text-[#D2FF72]">
                  <TypeWriter
                    words={roles}
                    colors={roleColors}
                    delay={100}
                    infinite={true}
                  />
                </span>
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 1.4,
                  ease: "easeInOut",
                  delay: 0.8,
                }}
                className="text-sm md:text-base text-gray-300"
              >
                I'm passionate about technology and solving real-world problems.
                With a strong development background and a love for learning, I
                aim to contribute to innovative projects.
              </motion.p>

              {/* Game Developer Style Resume Button */}
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.4, ease: "easeInOut", delay: 1.0 }}
                className="relative group"
              >
                <button
                  onClick={handleResumeClick}
                  className="relative px-10 py-4 font-mono text-lg uppercase tracking-wider
                    bg-transparent border-2 border-[#4ade80] text-[#4ade80] 
                    hover:bg-[#4ade80]/10 hover:shadow-[0_0_20px_#4ade80] 
                    active:scale-95 transition-all duration-300 overflow-hidden
                    rounded-none font-bold"
                  style={{
                    clipPath:
                      "polygon(10px 0, 100% 0, 100% calc(100% - 10px), calc(100% - 10px) 100%, 0 100%, 0 10px)",
                  }}
                >
                  {/* Glitch Effect Container */}
                  <div className="absolute inset-0 group-hover:animate-glitch opacity-50">
                    <div className="absolute inset-0 bg-[#4ade80]"></div>
                  </div>

                  {/* Corner Decorations */}
                  <div className="absolute top-0 left-0 w-2 h-2 border-l-2 border-t-2 border-[#4ade80]"></div>
                  <div className="absolute top-0 right-0 w-2 h-2 border-r-2 border-t-2 border-[#4ade80]"></div>
                  <div className="absolute bottom-0 left-0 w-2 h-2 border-l-2 border-b-2 border-[#4ade80]"></div>
                  <div className="absolute bottom-0 right-0 w-2 h-2 border-r-2 border-b-2 border-[#4ade80]"></div>

                  {/* Button Content */}
                  <div className="relative flex items-center justify-center gap-3 z-10">
                    <span className="relative">
                      <span className="relative z-10 group-hover:animate-pulse text-white mix-blend-difference">
                        DOWNLOAD_RESUME
                      </span>
                      <span
                        className="absolute -left-1 -right-1 top-0 h-full bg-[#4ade80]/20 
                        transform -skew-x-12 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      ></span>
                    </span>
                    <svg
                      className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      />
                    </svg>
                  </div>

                  {/* Scan Line Effect */}
                  <div
                    className="absolute inset-0 bg-gradient-to-b from-transparent via-[#4ade80]/10 to-transparent opacity-0 
                    group-hover:opacity-100 animate-scan"
                  ></div>
                </button>

                {/* Glow Effect */}
                <div className="absolute -inset-1 bg-[#4ade80] opacity-0 group-hover:opacity-30 blur-xl transition-opacity duration-300 -z-10"></div>
              </motion.div>
            </div>
          </motion.div>

          {/* Rectangle Image Section */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="md:w-2/5 flex justify-center relative"
          >
            <div
              className="relative"
              style={{
                width: "512px", // Maintain original image size
                height: "308px", // Maintain original image size
              }}
            >
              <img
                ref={imageRef} // Attach the ref to the image
                src={programmerImage}
                alt="Programmer Working on a Project"
                className="object-contain w-full h-full rounded-lg" // Use object-contain to ensure the image remains clear and proportionate
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
