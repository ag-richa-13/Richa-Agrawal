import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "../assets/style/terminal.css";
const Terminal = ({ onComplete }: { onComplete: () => void }) => {
  const [commands, setCommands] = useState<string[]>([]);
  const [isComplete, setIsComplete] = useState(false);

  const commandSequence = [
    { text: "SYSTEM://INITIALIZING_BOOT_SEQUENCE...", delay: 500 },
    { text: "LOADING_CORE_MODULES... [██████████] 100%", delay: 800 },
    { text: "ESTABLISHING_NEURAL_LINK... [CONNECTED]", delay: 1000 },
    { text: "COMPILING_PORTFOLIO_DATA... [⚡]", delay: 1200 },
    { text: "ACCESSING_RICHA.MATRIX... [AUTHORIZED]", delay: 1500 },
    { text: "MATRIX_STABILIZED... [READY_TO_HACK]", delay: 1800 },
  ];

  useEffect(() => {
    let currentIndex = 0;
    const typeCommand = () => {
      if (currentIndex < commandSequence.length) {
        const currentCommand = commandSequence[currentIndex];
        setCommands((prev) => [...prev, currentCommand.text]);
        currentIndex++;
        setTimeout(typeCommand, currentCommand.delay);
      } else {
        setIsComplete(true);
        setTimeout(onComplete, 500);
      }
    };

    typeCommand();
  }, []);

  return (
    <AnimatePresence>
      {!isComplete && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-[#000000] z-50 flex items-center justify-center overflow-hidden"
        >
          {/* Cyberpunk Grid Background */}
          <div 
            className="absolute inset-0" 
            style={{
              backgroundImage: `
                linear-gradient(#00FF9480 1px, transparent 1px),
                linear-gradient(90deg, #00FF9480 1px, transparent 1px)
              `,
              backgroundSize: '50px 50px',
              opacity: 0.1
            }}
          />

          {/* Glowing Orbs Background */}
          <motion.div
            className="absolute inset-0 pointer-events-none"
            animate={{
              backgroundPosition: ["0% 0%", "100% 100%"],
            }}
            transition={{
              duration: 15,
              ease: "linear",
              repeat: Infinity,
            }}
            style={{
              backgroundImage:
                "radial-gradient(circle, #00FF94 1%, transparent 10%)",
              backgroundSize: "100px 100px",
              opacity: 0.2,
            }}
          />

          <div className="w-full max-w-3xl mx-4 bg-black/80 backdrop-blur-sm text-[#00FF94] rounded-lg shadow-[0_0_20px_rgba(0,255,148,0.3)] border-2 border-[#00FF94] overflow-hidden relative">
            {/* Terminal Header */}
            <div className="flex items-center justify-between px-3 py-2 sm:px-4 sm:py-3 bg-[#0a0a0a] border-b-2 border-[#00FF94]">
              <div className="flex items-center gap-2">
                <div className="flex gap-1.5 sm:gap-2">
                  <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-[#FF2E63] shadow-[0_0_10px_#FF2E63]"></div>
                  <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-[#FFE700] shadow-[0_0_10px_#FFE700]"></div>
                  <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-[#00FF94] shadow-[0_0_10px_#00FF94]"></div>
                </div>
                <span className="hidden sm:inline text-xs font-mono text-[#00FF94]">
                  NEURAL.LINK//TERMINAL
                </span>
              </div>
              <div className="text-xs font-mono text-[#00FF94] animate-pulse">
                {new Date().toLocaleTimeString()}
              </div>
            </div>

            {/* Terminal Body */}
            <div className="p-4 sm:p-6 font-mono text-sm sm:text-base">
              {commands.map((cmd, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{
                    duration: 0.3,
                    delay: index * 0.2,
                  }}
                  className="mb-3 flex items-center gap-2"
                >
                  <span className="text-[#FF2E63]">&gt;</span>
                  <span className="text-[#00FF94] glitch-text">{cmd}</span>
                </motion.div>
              ))}

              {/* Animated Cursor */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="flex items-center"
              >
                <span className="text-[#FF2E63]">&gt;</span>
                <motion.span
                  animate={{ opacity: [0, 1], scaleY: [1, 1.2, 1] }}
                  transition={{ 
                    opacity: { repeat: Infinity, duration: 0.8 },
                    scaleY: { repeat: Infinity, duration: 1.2 }
                  }}
                  className="inline-block w-2.5 h-5 bg-[#00FF94] ml-2 shadow-[0_0_10px_#00FF94]"
                ></motion.span>
              </motion.div>
            </div>

            {/* Scanline Effect */}
            <div className="pointer-events-none absolute inset-0 bg-scanline opacity-10"></div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Terminal;
