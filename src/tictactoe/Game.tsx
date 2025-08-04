import React, { useState } from "react";

const Game = () => {
  const [history, setHistory] = useState<string[][]>([Array(9).fill(null)]);

  return <div>Game</div>;
};

// writing this component to show past moves.

export default Game;
