import Board from "./Board";
import styles from "./Game.module.css";
import { useState } from "react";

const Game = () => {
  const [currentMove, setCurrentMove] = useState(0);
  const [history, setHistory] = useState<string[][]>([Array(9).fill(null)]); // default value is array with single item. which itself is array.
  const currentSquares = history[currentMove];
  const xIsNext = currentMove % 2 === 0;

  const handlePlay = (nextSquares: string[]) => {
    const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
    setHistory(nextHistory);
    setCurrentMove(nextHistory.length - 1);
  };

  const jumpTo = (nextMove: number) => {
    setCurrentMove(nextMove);
  };

  const moves = history.map((_, move) => {
    let description = move > 0 ? `Go to move # ${move}` : `Go to game start`;
    return (
      <li key={move} onClick={() => jumpTo(move)}>
        {description}
      </li>
    );
  });

  return (
    <>
      <div className={styles.game}>
        <div className="game-board">
          <Board
            xIsNext={xIsNext}
            squares={currentSquares}
            onPlay={handlePlay}
          />
        </div>

        <div className={styles["game-info"]}>
          <ol>{moves}</ol>
        </div>
      </div>
    </>
  );
};

// writing this component to show past moves.

export default Game;
