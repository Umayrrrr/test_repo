import { useState, useEffect } from "react";
import { supabase } from "../supabase-client";
import Switch from "@mui/material/Switch";

function minimax(squares, depth, isMaximizing, isHardMode) {
  const winner = calculateWinner(squares);
  if (winner === "O") return 10 - depth;
  if (winner === "X") return depth - 10;
  if (!squares.includes(null)) return 0;

  if (!isHardMode && depth > 0) return 0;

  if (isMaximizing) {
    let bestScore = -Infinity;
    for (let i = 0; i < 9; i++) {
      if (squares[i] === null) {
        squares[i] = "O";
        let score = minimax(squares, depth + 1, false, isHardMode);
        squares[i] = null;
        bestScore = Math.max(score, bestScore);
      }
    }
    return bestScore;
  } else {
    let bestScore = Infinity;
    for (let i = 0; i < 9; i++) {
      if (squares[i] === null) {
        squares[i] = "X";
        let score = minimax(squares, depth + 1, true, isHardMode);
        squares[i] = null;
        bestScore = Math.min(score, bestScore);
      }
    }
    return bestScore;
  }
}

function getBestMove(squares, isHardMode) {
  let bestScore = -Infinity;
  let move = null;
  for (let i = 0; i < 9; i++) {
    if (squares[i] === null) {
      squares[i] = "O";
      let score = minimax(squares, 0, false, isHardMode);
      squares[i] = null;
      if (score > bestScore) {
        bestScore = score;
        move = i;
      }
    }
  }
  return move;
}

function Square({ value, onSquareClick }) {
  return (
    <button
      onClick={onSquareClick}
      className="border w-10 h-10 hover:bg-gray-500 font-bold transition-colors"
    >
      {value}
    </button>
  );
}

export default function Game() {
  const [isHardMode, setIsHardMode] = useState(false);
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const [currentMove, setCurrentMove] = useState(0);
  const [scores, setScores] = useState({ X: 0, O: 0 });
  const [user, setUser] = useState(null);

  const xIsNext = currentMove % 2 === 0;
  const currentSquares = history[currentMove];

  useEffect(() => {
    async function getUserData() {
      const {
        data: { user },
      } = await supabase.auth.getUser();
      if (user) {
        setUser(user);
        const { data: profile } = await supabase
          .from("profiles")
          .select("x_wins, o_wins")
          .eq("id", user.id)
          .single();
        if (profile) setScores({ X: profile.x_wins, O: profile.o_wins });
      }
    }
    getUserData();
  }, []);

  useEffect(() => {
    const winner = calculateWinner(currentSquares);
    const isDraw = !winner && !currentSquares.includes(null);

    if (!xIsNext && !winner && !isDraw) {
      const timer = setTimeout(() => {
        const cpuMove = getBestMove([...currentSquares], isHardMode);
        if (cpuMove !== null) {
          const nextSquares = currentSquares.slice();
          nextSquares[cpuMove] = "O";
          handlePlay(nextSquares);
        }
      }, 500);
      return () => clearTimeout(timer);
    }
  }, [xIsNext, currentSquares]);

  async function handlePlay(nextSquares) {
    const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
    setHistory(nextHistory);
    setCurrentMove(nextHistory.length - 1);

    const winner = calculateWinner(nextSquares);
    if (winner && user) {
      const columnName = winner === "X" ? "x_wins" : "o_wins";
      const newScore = scores[winner] + 1;

      const { error } = await supabase
        .from("profiles")
        .update({ [columnName]: newScore })
        .eq("id", user.id);

      if (!error) {
        setScores((prev) => ({ ...prev, [winner]: newScore }));
      }
    }
  }

  function jumpTo(nextMove) {
    setCurrentMove(nextMove);
  }

  const moves = history.map((_, move) => (
    <li key={move} className="mb-1">
      <button
        className="px-2 py-1 border rounded bg-amber-300 hover:bg-amber-400 text-sm"
        onClick={() => jumpTo(move)}
      >
        {move > 0 ? `Go to move #${move}` : "Go to game start"}
      </button>
    </li>
  ));

  return (
    <div className="flex flex-row justify-center items-start gap-10 p-8">
      <div className="flex flex-col items-center">
        <Board xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay} />

        <div className="flex flex-col items-center mt-8">
          <p className="font-bold bg-black text-white px-4 py-1 rounded-sm mb-3">
            HARD MODE
          </p>
          <Switch
            checked={isHardMode}
            onChange={(e) => setIsHardMode(e.target.checked)}
          />

          <div className="flex flex-col gap-1 mt-6 font-bold text-center">
            <p>SCORES:</p>
            <p>You: {scores.X}</p>
            <p>AI: {scores.O}</p>
          </div>
        </div>
      </div>

      <div className="mt-2">
        <h4 className="text-center font-semibold mb-3 text-gray-600 uppercase text-xs tracking-wider  pb-1">
          History
        </h4>
        <ol className="flex flex-col items-center gap-2">{moves}</ol>
      </div>
    </div>
  );
}

function Board({ xIsNext, squares, onPlay }) {
  const winner = calculateWinner(squares);
  const isDraw = !winner && !squares.includes(null);

  function handleClick(i) {
    if (squares[i] || winner || !xIsNext) return;
    const nextSquares = squares.slice();
    nextSquares[i] = "X";
    onPlay(nextSquares);
  }

  const status = winner
    ? `Winner: ${winner}`
    : isDraw
      ? "It's a Draw!"
      : `Next Player: ${xIsNext ? "X (You)" : "O (AI)"}`;

  return (
    <div className="flex flex-col items-center ">
      <div className="mb-4 text-xl font-bold">{status}</div>
      {[0, 3, 6].map((row) => (
        <div key={row} className="flex bg-gray-600 text-white">
          {[0, 1, 2].map((col) => (
            <Square
              key={row + col}
              value={squares[row + col]}
              onSquareClick={() => handleClick(row + col)}
            />
          ))}
        </div>
      ))}
    </div>
  );
}

function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let [a, b, c] of lines) {
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}
