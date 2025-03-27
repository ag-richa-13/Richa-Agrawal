import React, { useState } from 'react';
import { motion } from 'framer-motion';

const TicTacToe = () => {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [isXNext, setIsXNext] = useState(true);

  const calculateWinner = (squares: (string | null)[]) => {
    const lines = [
      [0, 1, 2], [3, 4, 5], [6, 7, 8],
      [0, 3, 6], [1, 4, 7], [2, 5, 8],
      [0, 4, 8], [2, 4, 6]
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a];
      }
    }
    return null;
  };

  const handleClick = (i: number) => {
    if (calculateWinner(board) || board[i]) return;
    const newBoard = board.slice();
    newBoard[i] = isXNext ? 'X' : 'O';
    setBoard(newBoard);
    setIsXNext(!isXNext);
  };

  const winner = calculateWinner(board);
  const status = winner 
    ? `Winner: ${winner}` 
    : board.every(square => square) 
    ? "Game Draw!" 
    : `Next player: ${isXNext ? 'X' : 'O'}`;

  return (
    <div className="flex flex-col items-center">
      <div className="text-[#00FF94] text-xl mb-4">{status}</div>
      <div className="grid grid-cols-3 gap-2">
        {board.map((square, i) => (
          <motion.button
            key={i}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="w-20 h-20 bg-[#2a2a2a] text-3xl font-bold rounded-lg
                     border-2 border-[#00FF94] text-[#00FF94]
                     hover:bg-[#3a3a3a] transition-all duration-200"
            onClick={() => handleClick(i)}
          >
            {square}
          </motion.button>
        ))}
      </div>
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="mt-4 px-4 py-2 bg-[#FF2E63] text-white rounded-lg
                 hover:bg-[#ff4778] transition-colors"
        onClick={() => setBoard(Array(9).fill(null))}
      >
        Reset Game
      </motion.button>
    </div>
  );
};

export default TicTacToe;