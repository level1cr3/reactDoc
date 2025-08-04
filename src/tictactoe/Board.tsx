import { useState } from "react";
import styles from "./Game.module.css";
import Square from "./Square";

const Board = () => {
  const [xIsNext, setXIsNext] = useState(true); // by default first move is X
  const [squares, setSquares] = useState<string[]>(Array(9).fill(null));

  const handleClick = (index: number) => {
    // this is closure in action. handle click has acess to outer variable and function. of Board. (squares, setSquares)

    if (squares[index] || calculateWinner(squares)) {
      // early return if user has already clicked that square or the game is won.
      return;
    }

    const nextSquares = [...squares];
    nextSquares[index] = xIsNext ? "X" : "O";
    setSquares(nextSquares);
    setXIsNext(!xIsNext);
  };

  const winner = calculateWinner(squares);
  let status;

  if (winner) {
    status = `Winner : ${winner}`;
  } else {
    status = `Next player : ${xIsNext ? "X" : "O"}`;
  }

  return (
    <>
      <div className={styles.status}>{status}</div>

      <div className={styles["board-row"]}>
        <Square value={squares[0]} onSquareClick={() => handleClick(0)} />

        <Square value={squares[1]} onSquareClick={() => handleClick(1)} />
        <Square value={squares[2]} onSquareClick={() => handleClick(2)} />
      </div>

      <div className={styles["board-row"]}>
        <Square value={squares[3]} onSquareClick={() => handleClick(3)} />
        <Square value={squares[4]} onSquareClick={() => handleClick(4)} />
        <Square value={squares[5]} onSquareClick={() => handleClick(5)} />
      </div>

      <div className={styles["board-row"]}>
        <Square value={squares[6]} onSquareClick={() => handleClick(6)} />
        <Square value={squares[7]} onSquareClick={() => handleClick(7)} />
        <Square value={squares[8]} onSquareClick={() => handleClick(8)} />
      </div>
    </>
  );
};

//we can put method above or below main component : choosing below becausee i don't want to scroll past it everytime.

function calculateWinner(squares: string[]) {
  // i will get all possible winner lines. and if any of these lines have same values that. value wins.

  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    // covers all horizontal win condition.

    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    // convers all vertical win condition

    [0, 4, 8],
    [2, 4, 6],
    // diagonal win condition
  ];

  for (const line of lines) {
    const [a, b, c] = line;

    if (squares[a] && squares[a] === squares[b] && squares[b] === squares[c]) {
      return squares[a];
    }
  }

  return null;
}

export default Board;
