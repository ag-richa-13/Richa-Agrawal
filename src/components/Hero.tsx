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
      className="relative bg-[#000] min-h-[calc(100vh-64px)] flex items-center justify-center px-4 sm:px-8 md:px-16"
      style={{ fontFamily: "'Quicksand', sans-serif" }}
    >
      <ParticleBackground />
      <div className="container mx-auto max-w-7xl px-2 sm:px-4 pt-16 sm:pt-20 md:pt-24">
        <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-8 sm:gap-12 max-w-full">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 1.2,
              ease: "easeInOut",
              delay: 0.2,
            }}
            className="text-left w-full md:w-1/2 lg:w-3/5 space-y-4 sm:space-y-6 mt-8 md:mt-0"
          >
            <div className="space-y-3 sm:space-y-4">
              <motion.h2
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 1.4,
                  ease: "easeInOut",
                  delay: 0.6,
                }}
                className="text-lg sm:text-xl md:text-2xl font-semibold"
              >
                <span className="text-[#F3D7CA] text-lg sm:text-xl md:text-2xl font-bold">
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
                className="text-xl sm:text-2xl md:text-4xl lg:text-5xl font-bold"
              >
                <span className="text-[#86A789]">Richa Agrawal</span>
              </motion.h1>

              <motion.h2
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 1.4,
                  ease: "easeInOut",
                  delay: 0.6,
                }}
                className="text-lg sm:text-xl md:text-2xl font-semibold"
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
                className="text-sm sm:text-base md:text-lg text-gray-300 max-w-prose"
              >
                I'm passionate about technology and solving real-world problems.
                With a strong development background and a love for learning, I
                aim to contribute to innovative projects.
              </motion.p>

              {/* Game Developer Resume Button */}
              <motion.div>
                <button
                  onClick={handleResumeClick}
                  className="mt-4 px-8 py-4 bg-[#0A0A0A] 
                  text-[#00FF94] font-bold text-lg tracking-wider
                  transform transition-all duration-300 
                  border-2 border-[#00FF94] relative overflow-hidden group
                  hover:bg-[#00FF94] hover:text-black
                  hover:shadow-[0_0_20px_rgba(0,255,148,0.5)]
                  active:scale-95 flex items-center gap-3"
                  style={{
                    clipPath:
                      "polygon(90% 0, 100% 30%, 100% 100%, 0 100%, 0 0)",
                    textShadow: "0 0 8px rgba(0,255,148,0.5)",
                  }}
                >
                  <span className="relative z-10 uppercase group-hover:animate-pulse">
                    <span className="mr-1 text-[#FF2E63]">&lt;</span>
                    Download_CV
                    <span className="ml-1 text-[#FF2E63]">/&gt;</span>
                  </span>

                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 transform transition-all duration-500
                    group-hover:rotate-[360deg] group-hover:scale-125"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                    />
                  </svg>

                  {/* Glitch Effect Layers */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100">
                    <div className="absolute inset-0 translate-x-1 translate-y-1 bg-[#FF2E63] mix-blend-screen"></div>
                    <div className="absolute inset-0 -translate-x-1 -translate-y-1 bg-[#00FF94] mix-blend-screen"></div>
                  </div>

                  {/* Scan Line Effect */}
                  <div
                    className="absolute inset-0 bg-gradient-to-b from-transparent via-[#00FF94]/10 to-transparent 
                    opacity-0 group-hover:opacity-100 animate-scan"
                  />

                  {/* Border Glow Effect */}
                  <div
                    className="absolute -inset-px bg-[#00FF94] opacity-0 group-hover:opacity-50 
                    animate-pulse rounded-sm"
                    style={{ zIndex: -1 }}
                  />
                </button>
              </motion.div>
            </div>
          </motion.div>

          {/* Image Section */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="w-full md:w-1/2 lg:w-2/5 flex justify-center relative"
          >
            <div
              className="relative w-full max-w-[300px] md:max-w-[400px] lg:max-w-[512px]"
              style={{
                aspectRatio: "1/1",
              }}
            >
              <img
                ref={imageRef}
                src={programmerImage}
                alt="Programmer Working on a Project"
                className="object-contain w-full h-full rounded-lg"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
