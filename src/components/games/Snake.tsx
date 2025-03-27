import React, { useState, useEffect, useCallback, useRef } from 'react';
import { motion } from 'framer-motion';
import { KeyboardEvent as ReactKeyboardEvent } from 'react';

const GRID_SIZE = 15; // Reduced grid size for better visibility
const CELL_SIZE = 20;
const INITIAL_SPEED = 200; // Slowed down the speed

const Snake = () => {
  const [snake, setSnake] = useState([{ x: 7, y: 7 }]);
  const [food, setFood] = useState({ x: 12, y: 7 });
  const [direction, setDirection] = useState('RIGHT');
  const [gameOver, setGameOver] = useState(false);
  const [score, setScore] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const gameContainerRef = useRef<HTMLDivElement>(null);

  const generateFood = useCallback(() => {
    return {
      x: Math.floor(Math.random() * GRID_SIZE),
      y: Math.floor(Math.random() * GRID_SIZE)
    };
  }, []);

  const resetGame = () => {
    setSnake([{ x: 7, y: 7 }]);
    setFood(generateFood());
    setDirection('RIGHT');
    setGameOver(false);
    setScore(0);
    setIsPaused(false);
    if (gameContainerRef.current) {
      gameContainerRef.current.focus();
    }
  };

  useEffect(() => {
    // Auto-focus the game container when mounted
    if (gameContainerRef.current) {
      gameContainerRef.current.focus();
    }
  }, []);

  const handleKeyPress = useCallback((e: ReactKeyboardEvent<HTMLDivElement>) => {
    e.preventDefault(); // Prevent page scrolling
    switch (e.key) {
      case 'ArrowUp':
        setDirection(prev => prev !== 'DOWN' ? 'UP' : prev);
        break;
      case 'ArrowDown':
        setDirection(prev => prev !== 'UP' ? 'DOWN' : prev);
        break;
      case 'ArrowLeft':
        setDirection(prev => prev !== 'RIGHT' ? 'LEFT' : prev);
        break;
      case 'ArrowRight':
        setDirection(prev => prev !== 'LEFT' ? 'RIGHT' : prev);
        break;
      case ' ': // Space bar to pause
        setIsPaused(prev => !prev);
        break;
    }
  }, []);

  useEffect(() => {
    if (gameOver || isPaused) return;

    const moveSnake = () => {
      setSnake(prevSnake => {
        const newSnake = [...prevSnake];
        const head = { ...newSnake[0] };

        switch (direction) {
          case 'UP': head.y = (head.y - 1 + GRID_SIZE) % GRID_SIZE; break;
          case 'DOWN': head.y = (head.y + 1) % GRID_SIZE; break;
          case 'LEFT': head.x = (head.x - 1 + GRID_SIZE) % GRID_SIZE; break;
          case 'RIGHT': head.x = (head.x + 1) % GRID_SIZE; break;
        }

        // Check self-collision
        if (newSnake.some(segment => segment.x === head.x && segment.y === head.y)) {
          setGameOver(true);
          return prevSnake;
        }

        if (head.x === food.x && head.y === food.y) {
          setFood(generateFood());
          setScore(prev => prev + 1);
          newSnake.unshift(head); // Add new head without removing tail
        } else {
          newSnake.pop(); // Remove tail
          newSnake.unshift(head); // Add new head
        }

        return newSnake;
      });
    };

    const gameInterval = setInterval(moveSnake, INITIAL_SPEED);
    return () => clearInterval(gameInterval);
  }, [direction, food, gameOver, generateFood, isPaused]);

  // Add touch control state
  const [touchStart, setTouchStart] = useState({ x: 0, y: 0 });

  // Add touch handlers
  const handleTouchStart = (e: React.TouchEvent) => {
    const touch = e.touches[0];
    setTouchStart({ x: touch.clientX, y: touch.clientY });
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    const touch = e.changedTouches[0];
    const deltaX = touch.clientX - touchStart.x;
    const deltaY = touch.clientY - touchStart.y;

    // Determine swipe direction
    if (Math.abs(deltaX) > Math.abs(deltaY)) {
      // Horizontal swipe
      if (deltaX > 0) {
        setDirection(prev => prev !== 'LEFT' ? 'RIGHT' : prev);
      } else {
        setDirection(prev => prev !== 'RIGHT' ? 'LEFT' : prev);
      }
    } else {
      // Vertical swipe
      if (deltaY > 0) {
        setDirection(prev => prev !== 'UP' ? 'DOWN' : prev);
      } else {
        setDirection(prev => prev !== 'DOWN' ? 'UP' : prev);
      }
    }
  };

  return (
    <div 
      ref={gameContainerRef}
      tabIndex={0}
      onKeyDown={handleKeyPress}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      className="focus:outline-none flex flex-col items-center"
    >
      {/* Add touch instructions for mobile */}
      <div className="text-gray-400 text-sm mb-2">
        {window.innerWidth <= 768 ? 
          "Swipe to control snake" : 
          "Use arrow keys to move • Space to pause"
        }
      </div>
      <div className="text-[#00FF94] text-xl mb-4">Score: {score}</div>
      {!gameOver && !isPaused && (
        <div className="text-gray-400 text-sm mb-2">
          Use arrow keys to move • Space to pause
        </div>
      )}
      {isPaused && (
        <div className="text-yellow-400 text-lg mb-2">PAUSED</div>
      )}
      <motion.div 
        className="grid gap-[1px] bg-[#2a2a2a] p-1 rounded-lg relative"
        style={{ 
          gridTemplateColumns: `repeat(${GRID_SIZE}, ${CELL_SIZE}px)`,
          width: GRID_SIZE * CELL_SIZE + GRID_SIZE + 2
        }}
      >
        {Array.from({ length: GRID_SIZE * GRID_SIZE }).map((_, i) => {
          const x = i % GRID_SIZE;
          const y = Math.floor(i / GRID_SIZE);
          const isSnake = snake.some(segment => segment.x === x && segment.y === y);
          const isFood = food.x === x && food.y === y;

          return (
            <motion.div
              key={i}
              className={`w-5 h-5 rounded-sm ${
                isSnake ? 'bg-[#00FF94]' : 
                isFood ? 'bg-[#FF2E63]' : 
                'bg-[#1a1a1a]'
              }`}
              animate={{
                scale: isFood ? [1, 1.1, 1] : 1
              }}
              transition={{
                repeat: isFood ? Infinity : 0,
                duration: 0.5
              }}
            />
          );
        })}
      </motion.div>
      {(gameOver || isPaused) && (
        <div className="mt-4 space-x-4">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="px-4 py-2 bg-[#FF2E63] text-white rounded-lg
                     hover:bg-[#ff4778] transition-colors"
            onClick={resetGame}
          >
            {gameOver ? 'Play Again' : 'Reset'}
          </motion.button>
          {!gameOver && (
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="px-4 py-2 bg-[#00FF94] text-black rounded-lg
                       hover:bg-[#00cc77] transition-colors"
              onClick={() => setIsPaused(false)}
            >
              Resume
            </motion.button>
          )}
        </div>
      )}
    </div>
  );
};

export default Snake;