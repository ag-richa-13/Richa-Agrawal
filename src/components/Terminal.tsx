import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Terminal = ({ onComplete }: { onComplete: () => void }) => {
  const [commands, setCommands] = useState<string[]>([]);
  const [isComplete, setIsComplete] = useState(false);

  const commandSequence = [
    { text: "> Loading system modules...", delay: 500 },
    { text: "> Initializing development environment...", delay: 800 },
    { text: "> npm install @richa/portfolio", delay: 1000 },
    { text: "> Compiling portfolio assets...", delay: 1200 },
    { text: "> Loading Richa Agrawal's Portfolio...", delay: 1500 },
    { text: "> Portfolio ready!", delay: 1800 },
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
          className="fixed inset-0 bg-gradient-to-r from-[#0F172A] via-[#1E293B] to-[#0F172A] z-50 flex items-center justify-center overflow-hidden"
        >
          {/* Dynamic Background Effect */}
          <motion.div
            className="absolute inset-0 pointer-events-none"
            animate={{
              backgroundPosition: ["0% 0%", "100% 100%"],
            }}
            transition={{
              duration: 10,
              ease: "linear",
              repeat: Infinity,
            }}
            style={{
              backgroundImage:
                "radial-gradient(circle, #475569 1%, transparent 40%)",
              backgroundSize: "300% 300%",
              opacity: 0.1,
            }}
          />

          <div className="w-full max-w-3xl mx-4 bg-[#1E293B] text-white rounded-lg shadow-xl border border-[#475569] overflow-hidden relative">
            {/* Header */}
            <div className="flex items-center px-2 sm:px-4 py-2 sm:py-3 bg-[#0F172A] border-b border-[#475569]">
              <div className="flex gap-1 sm:gap-2">
                <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-[#F87171]"></div>
                <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-[#FBBF24]"></div>
                <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-[#34D399]"></div>
              </div>
              <span className="ml-2 sm:ml-3 text-[10px] sm:text-xs font-semibold text-gray-300">
                portfolio-terminal
              </span>
            </div>

            {/* Terminal Body */}
            <div className="p-3 sm:p-6 font-mono text-xs sm:text-sm text-white">
              {/* Loop through commands and display each line */}
              {commands.map((cmd, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{
                    duration: 0.3,
                    delay: index * 0.3, // Delay for each command
                  }}
                  className="mb-3"
                >
                  <span className="text-[#67E8F9]">{cmd}</span>
                </motion.div>
              ))}

              {/* Blinking cursor */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="flex items-center"
              >
                <motion.span
                  animate={{ opacity: [0, 1] }}
                  transition={{ repeat: Infinity, duration: 0.8 }}
                  className="inline-block w-2 h-4 bg-[#67E8F9] ml-1"
                ></motion.span>
              </motion.div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Terminal;
