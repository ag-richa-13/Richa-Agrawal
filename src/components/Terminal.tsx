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
          className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-2 sm:p-4"
        >
          <div className="w-full max-w-3xl bg-[#1a1a1a] rounded-lg shadow-2xl border border-gray-700">
            {/* Simplified Terminal Header */}
            <div className="flex items-center px-2 sm:px-4 py-2 bg-[#2a2a2a] rounded-t-lg border-b border-gray-700">
              <div className="flex gap-1.5 sm:gap-2">
                <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-red-500"></div>
                <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-yellow-500"></div>
                <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-green-500"></div>
              </div>
              <span className="ml-3 sm:ml-4 text-xs sm:text-sm text-gray-400 font-mono">terminal@richa</span>
            </div>

            {/* Terminal Content */}
            <div className="p-3 sm:p-6 font-mono text-xs sm:text-sm overflow-x-auto">
              {commands.map((cmd, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                  className="mb-2 sm:mb-3 whitespace-pre-wrap break-words"
                >
                  <span className="text-green-500">$ </span>
                  <span className="text-gray-300">{cmd}</span>
                </motion.div>
              ))}

              {/* Simplified Cursor */}
              <motion.div
                animate={{ opacity: [0, 1] }}
                transition={{ repeat: Infinity, duration: 0.8 }}
                className="inline-block w-1.5 sm:w-2 h-4 sm:h-5 bg-green-500 ml-2"
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Terminal;
