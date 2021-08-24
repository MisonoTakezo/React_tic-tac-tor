import React, { useState } from "react";
import Board from "./board.js";
import calculateWinner from "../utils/calcWin.js";

const Game = () => {
  const [history, setHistory] = useState([{ squares: Array(9).fill(null) }]);
  const [xIsNext, setXisNext] = useState(true);

  const handleClick = (i) => {
    const _history = history.slice();
    const current = _history[_history.length - 1];
    const squares = current.squares.slice();

    if (calculateWinner(squares) || squares[i]) {
      return;
    }
    squares[i] = xIsNext ? "X" : "O";
    setHistory(_history.concat([{ squares: squares }]));
    setXisNext(!xIsNext);
  };

  const _history = history;
  const current = _history[_history.length - 1];
  const winner = calculateWinner(current.squares);

  let status;

  if (winner) {
    status = "Winner:" + winner;
  } else {
    status = "Next Player:" + (xIsNext ? "X" : "O");
  }
  return (
    <div className="game">
      <div className="game-board">
        <Board squares={current.squares} onClick={(i) => handleClick(i)} />
      </div>
      <div className="game-info">
        <div>{status}</div>
        <ol>{/* TODO */}</ol>
      </div>
    </div>
  );
};
export default Game;
