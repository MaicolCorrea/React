import { Square } from "./Square";
import confetti from "canvas-confetti";
import { TURNS } from "../constants";
import { checkWinnerFrom, checkEndGame } from "../logic/board";

export function Board({ board, setBoard, turn, setTurn, setWinner }) {
  const updateBoard = (index) => {
    if (board[index]) return;

    const newBoard = [...board];
    newBoard[index] = turn;
    setBoard(newBoard);

    const newWinner = checkWinnerFrom(newBoard);
    if (newWinner) {
      confetti();
      setWinner(newWinner);
    } else if (checkEndGame(newBoard)) {
      setWinner(false);
    }

    const newTurn = turn === TURNS.X ? TURNS.O : TURNS.X;
    setTurn(newTurn);
  };

  return (
    <section className="game">
      {board.map((_, index) => {
        return (
          <Square key={index} index={index} updateBoard={updateBoard}>
            {board[index]}
          </Square>
        );
      })}
    </section>
  );
}
