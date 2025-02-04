import React, { useState, useEffect } from "react";

const Button = ({ onClick, children }) => {
  return (
    <button 
      onClick={onClick} 
      className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
    >
      {children}
    </button>
  );
};

const generateBoard = () => {
  return Array(9)
    .fill(null)
    .map(() => Array(9).fill(0));
};

const SudokuPage = () => {
  const [board, setBoard] = useState(generateBoard());
  const [selectedCell, setSelectedCell] = useState(null);

  useEffect(() => {
    generateNewPuzzle();
  }, []);

  const generateNewPuzzle = () => {
    // For now, generate an empty board (future: add puzzle generation logic)
    setBoard(generateBoard());
  };

  const handleCellClick = (row, col) => {
    setSelectedCell([row, col]);
  };

  const handleKeyPress = (e) => {
    if (!selectedCell) return;
    const [row, col] = selectedCell;
    const value = parseInt(e.key);
    if (value >= 1 && value <= 9) {
      const newBoard = [...board];
      newBoard[row][col] = value;
      setBoard(newBoard);
    }
  };

  useEffect(() => {
    window.addEventListener("keydown", handleKeyPress);
    return () => window.removeEventListener("keydown", handleKeyPress);
  }, [selectedCell, board]);

  return (
    <div className="flex flex-col items-center gap-4 p-4">
      <h1 className="text-2xl font-bold">Sudoku</h1>
      <div className="grid grid-cols-9 gap-1 border-2 border-gray-700 p-2">
        {board.map((row, rowIndex) =>
          row.map((num, colIndex) => (
            <div
              key={`${rowIndex}-${colIndex}`}
              onClick={() => handleCellClick(rowIndex, colIndex)}
              className={`w-10 h-10 flex items-center justify-center border border-gray-400 text-lg font-semibold cursor-pointer
                ${selectedCell?.[0] === rowIndex && selectedCell?.[1] === colIndex ? "bg-blue-200" : "bg-white"}`}
            >
              {num !== 0 ? num : ""}
            </div>
          ))
        )}
      </div>
      <Button onClick={generateNewPuzzle}>New Game</Button>
    </div>
  );
};

export default SudokuPage;