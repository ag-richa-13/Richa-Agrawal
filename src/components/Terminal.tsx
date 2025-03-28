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
          className="fixed inset-0 bg-[#000300] z-50 flex items-center justify-center overflow-hidden"
        >
          {/* Matrix Rain Effect */}
          <div className="absolute inset-0 opacity-20">
            <canvas id="matrixRain" className="w-full h-full"></canvas>
          </div>

          {/* Hexagon Grid Pattern */}
          <div 
            className="absolute inset-0" 
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 0l25.98 15v30L30 60 4.02 45V15L30 0z' fill-opacity='0.1' fill='%2300FF94'/%3E%3C/svg%3E")`,
              backgroundSize: '60px 60px',
              opacity: 0.1
            }}
          />

          <div className="w-full max-w-4xl mx-4 bg-black/90 backdrop-blur-md text-[#00FF94] rounded-xl shadow-[0_0_30px_rgba(0,255,148,0.4)] border border-[#00FF94]/30 overflow-hidden relative">
            {/* Terminal Header with enhanced design */}
            <div className="flex items-center justify-between px-4 py-3 bg-[#001a10] border-b border-[#00FF94]/30">
              <div className="flex items-center gap-3">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-[#FF2E63] shadow-[0_0_10px_#FF2E63] transition-all hover:scale-110"></div>
                  <div className="w-3 h-3 rounded-full bg-[#FFE700] shadow-[0_0_10px_#FFE700] transition-all hover:scale-110"></div>
                  <div className="w-3 h-3 rounded-full bg-[#00FF94] shadow-[0_0_10px_#00FF94] transition-all hover:scale-110"></div>
                </div>
                <span className="text-sm font-mono text-[#00FF94]/90 tracking-wider">
                  NEURAL.MATRIX_v2.0
                </span>
              </div>
              <div className="flex items-center gap-3">
                <div className="h-1.5 w-12 bg-[#00FF94]/20 rounded-full overflow-hidden">
                  <motion.div 
                    className="h-full bg-[#00FF94]"
                    animate={{ x: [-48, 48] }}
                    transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
                  />
                </div>
                <span className="text-sm font-mono text-[#00FF94]/90">
                  {new Date().toLocaleTimeString()}
                </span>
              </div>
            </div>

            {/* Rest of the terminal body remains the same */}
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

            {/* Enhanced Scanline Effect */}
            <div className="pointer-events-none absolute inset-0 bg-scanline opacity-15 mix-blend-overlay"></div>
            
            {/* Glowing Corner Accents */}
            <div className="absolute top-0 left-0 w-2 h-2 border-t-2 border-l-2 border-[#00FF94]"></div>
            <div className="absolute top-0 right-0 w-2 h-2 border-t-2 border-r-2 border-[#00FF94]"></div>
            <div className="absolute bottom-0 left-0 w-2 h-2 border-b-2 border-l-2 border-[#00FF94]"></div>
            <div className="absolute bottom-0 right-0 w-2 h-2 border-b-2 border-r-2 border-[#00FF94]"></div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Terminal;
