import styles from "./Game.module.css";
import Square from "./Square";

type Props = {
  xIsNext: boolean;
  squares: (string | null)[];
  onPlay: (nextSquares: (string | null)[]) => void;
};

const Board = ({ xIsNext, squares, onPlay }: Props) => {
  const handleClick = (index: number) => {
    // this is closure in action. handle click has acess to outer variable and function. of Board. (squares, setSquares)

    if (squares[index] || calculateWinner(squares)) {
      // early return if user has already clicked that square or the game is won.
      return;
    }

    const nextSquares = [...squares];
    nextSquares[index] = xIsNext ? "X" : "O";
    onPlay(nextSquares);
  };

  const winner = calculateWinner(squares);
  let status;

  if (winner) {
    status = `Winner : ${winner.player}`;
  } else {
    status = `Next player : ${xIsNext ? "X" : "O"}`;
    if (!squares.includes(null)) {
      status = `Draw`;
    }
  }

  // const squareElements = squares.map((square, index) => (
  //   <Square
  //     key={index}
  //     value={square}
  //     onSquareClick={() => handleClick(index)}
  //   />
  // ));

  // const elements = [0, 1, 2].map((_, index) => {
  //   return (
  //     <div key={index} className={styles["board-row"]}>
  //       {squareElements.slice(index * 3, (index + 1) * 3)}
  //     </div>
  //   );
  // }); // for rendering square just render elements.

  return (
    <>
      <div className={styles.status}>{status}</div>

      {[0, 1, 2].map((row) => (
        <div key={row} className={styles["board-row"]}>
          {[0, 1, 2].map((col) => {
            const index = row * 3 + col;
            return (
              <Square
                key={index}
                value={squares[index]}
                onSquareClick={() => handleClick(index)}
                isHighlight={winner?.positions.includes(index) ?? false}
              ></Square>
            );
          })}
        </div>
      ))}
    </>
  );
};

//we can put method above or below main component : choosing below becausee i don't want to scroll past it everytime.

type Winner = {
  player: string | null;
  positions: number[];
};

function calculateWinner(squares: (string | null)[]): Winner | null {
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
      return { player: squares[a], positions: line };
    }
  }

  return null;
}

export default Board;
