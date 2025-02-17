import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import ParticleBackground from "./ParticleBackground";
import TypeWriter from "./TypeWriter";
import "../assets/style/hero.css";
import "../assets/style/curser.css";
import resume from "../assets/images/Richa Agrawal.pdf";
import programmerImage from "../assets/images/profileImg.png"; // Update this with your image path

const Hero = () => {
  const imageRef = useRef<HTMLImageElement>(null); // Ref for the image
  const [showStrengths, setShowStrengths] = useState(false);
  const [showWeaknesses, setShowWeaknesses] = useState(false);

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

  const strengths = [
    "Problem Solving",
    "Game Logic Implementation",
    "3D Mathematics",
    "Unity/Unreal Engine",
    "Performance Optimization"
  ];

  const weaknesses = [
    "Still Learning Shader Programming",
    "Networking Implementation",
    "Advanced AI Algorithms",
    "Mobile Game Optimization"
  ];

  const renderPrompt = (items: string[], isStrength: boolean) => {
    return (
      <div className={`game-prompt ${isStrength ? 'success-prompt' : 'error-prompt'}`}>
        <div className="prompt-header">
          <h3>{isStrength ? 'POWER UPS 🎮' : 'DEBUFFS ⚠️'}</h3>
          <button 
            onClick={() => isStrength ? setShowStrengths(false) : setShowWeaknesses(false)}
            className="close-btn"
          >
            ×
          </button>
        </div>
        <ul>
          {items.map((item, index) => (
            <li key={index} className="prompt-item">
              {isStrength ? '🎯 ' : '⚡ '}{item}
            </li>
          ))}
        </ul>
      </div>
    );
  };

  return (
    <section
      id="home"
      className="relative bg-[#000] min-h-[calc(100vh-64px)] flex items-center justify-center px-4 sm:px-8 md:px-16"
      style={{ fontFamily: "'Quicksand', sans-serif" }}
    >
      <ParticleBackground />
      {showStrengths && renderPrompt(strengths, true)}
      {showWeaknesses && renderPrompt(weaknesses, false)}
      <div className="container mx-auto max-w-7xl px-4 sm:px-4 pt-16 pb-16 sm:pt-20 md:pt-24">
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
                  className="cyber-button"
                  aria-label="Download Resume"
                >
                  <span className="cyber-button__tag">exe.</span>
                  <span className="cyber-button__text">
                    <span className="glitch-text" data-text="DOWNLOAD_CV">
                      DOWNLOAD_CV
                    </span>
                  </span>
                  <span className="cyber-button__glitch"></span>
                  <span className="cyber-button__icon">
                    <svg 
                      xmlns="http://www.w3.org/2000/svg" 
                      className="download-icon" 
                      viewBox="0 0 24 24" 
                      fill="none" 
                      stroke="currentColor"
                    >
                      <path 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        strokeWidth="2" 
                        d="M12 15V3m0 12l-4-4m4 4l4-4M2 17l.621 2.485A2 2 0 004.561 21h14.878a2 2 0 001.94-1.515L22 17"
                      />
                    </svg>
                  </span>
                </button>
              </motion.div>

              <div className="flex gap-6 mt-6">
                <button
                  onClick={() => setShowStrengths(true)}
                  className="power-btn"
                >
                  <span className="power-btn__badge">LVL 99</span>
                  <span className="power-btn__content">
                    <span className="power-btn__icon">⚔️</span>
                    <span className="power-btn__text">POWER UPS</span>
                  </span>
                  <div className="power-btn__glitch"></div>
                  <div className="power-btn__scanlines"></div>
                </button>

                <button
                  onClick={() => setShowWeaknesses(true)}
                  className="challenge-btn"
                >
                  <span className="challenge-btn__badge">BOSS</span>
                  <span className="challenge-btn__content">
                    <span className="challenge-btn__icon">🛡️</span>
                    <span className="challenge-btn__text">CHALLENGES</span>
                  </span>
                  <div className="challenge-btn__glitch"></div>
                  <div className="challenge-btn__scanlines"></div>
                </button>
              </div>
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