import Board from "./Board";
import styles from "./Game.module.css";
import { useState } from "react";

const Game = () => {
  const [asc, setAsc] = useState(true);
  const [currentMove, setCurrentMove] = useState(0);
  const [history, setHistory] = useState<(string | null)[][]>([
    Array(9).fill(null),
  ]); // default value is array with single item. which itself is array.
  const currentSquares = history[currentMove];
  const xIsNext = currentMove % 2 === 0;

  const handlePlay = (nextSquares: (string | null)[]) => {
    const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
    setHistory(nextHistory);
    setCurrentMove(nextHistory.length - 1);
  };

  const jumpTo = (nextMove: number) => {
    setCurrentMove(nextMove);
  };

  let moves = history.map((_, move) => {
    const description = move > 0 ? `Go to move # ${move}` : `Go to game start`;
    const isCurrentMove = history.length - 1 === move;
    const moveControl = isCurrentMove ? (
      <span>{description}</span>
    ) : (
      <button onClick={() => jumpTo(move)} style={{ marginBlockEnd: "10px" }}>
        {description}
      </button>
    );

    return <li key={move}>{moveControl}</li>;
  });

  moves = asc ? moves : [...moves].reverse(); // don't do moves.reverse() this is not react way.

  // React’s rendering works best when you treat all data as immutable — meaning you create new arrays/objects rather than changing them directly.

  return (
    <>
      <button
        onClick={() => {
          setAsc(!asc);
        }}
      >
        {asc ? "Ascending" : "Descending"}
      </button>

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
