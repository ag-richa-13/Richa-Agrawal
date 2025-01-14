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
          className="fixed inset-0 bg-gradient-to-r from-[#0a0a0a] via-[#1a1a1a] to-[#0a0a0a] z-50 flex items-center justify-center overflow-hidden"
        >
          {/* Enhanced Background Effect */}
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
                "radial-gradient(circle at center, rgba(99, 102, 241, 0.15) 0%, transparent 70%)",
              backgroundSize: "200% 200%",
              opacity: 0.3,
            }}
          />

          <div className="w-full max-w-3xl bg-[#1a1a1a]/90 backdrop-blur-lg text-white rounded-xl shadow-2xl border border-indigo-500/20 overflow-hidden relative">
            {/* Enhanced Header */}
            <div className="flex items-center justify-between px-4 py-3 bg-[#151515] border-b border-indigo-500/20">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500 hover:bg-red-600 transition-colors duration-200"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500 hover:bg-yellow-600 transition-colors duration-200"></div>
                <div className="w-3 h-3 rounded-full bg-green-500 hover:bg-green-600 transition-colors duration-200"></div>
              </div>
              <span className="text-xs font-mono text-gray-400">
                richa@portfolio:~$
              </span>
            </div>

            {/* Enhanced Terminal Body */}
            <div className="p-6 font-mono text-sm bg-gradient-to-b from-transparent to-black/20">
              {commands.map((cmd, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{
                    duration: 0.4,
                    delay: index * 0.2,
                  }}
                  className="mb-3"
                >
                  <span className="text-emerald-400 brightness-110">{cmd}</span>
                </motion.div>
              ))}

              {/* Enhanced Blinking Cursor */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="flex items-center"
              >
                <motion.span
                  animate={{ opacity: [0, 1] }}
                  transition={{ repeat: Infinity, duration: 0.7 }}
                  className="inline-block w-2.5 h-5 bg-emerald-400 ml-1"
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
