import React, { useState, useEffect } from "react";

interface TypeWriterProps {
  words: string[];
  colors: string[]; // New prop for colors
  delay?: number;
  infinite?: boolean;
}

const TypeWriter: React.FC<TypeWriterProps> = ({
  words,
  colors,
  delay = 100,
  infinite = true,
}) => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const word = words[currentWordIndex];
    const color = colors[currentWordIndex] || "#000"; // Default color if not provided

    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          // Typing
          if (currentText.length < word.length) {
            setCurrentText(word.slice(0, currentText.length + 1));
          } else {
            // Start deleting after a pause
            setTimeout(() => setIsDeleting(true), 1500);
          }
        } else {
          // Deleting
          if (currentText.length > 0) {
            setCurrentText(word.slice(0, currentText.length - 1));
          } else {
            setIsDeleting(false);
            setCurrentWordIndex((prev) =>
              infinite
                ? (prev + 1) % words.length
                : Math.min(prev + 1, words.length - 1)
            );
          }
        }
      },
      isDeleting ? delay / 2 : delay
    );

    return () => clearTimeout(timeout);
  }, [currentText, isDeleting, words, currentWordIndex, delay, infinite]);

  return (
    <span className="inline-block" style={{ color: colors[currentWordIndex] }}>
      {currentText}
      <span className="animate-pulse">|</span>
    </span>
  );
};

export default TypeWriter;
