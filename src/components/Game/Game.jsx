import React from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";
import Guess from "../Guess";
import GuessWords from "../GuessWords/GuessWords";
import ResultBanner from "../ResultBanner/ResultBanner";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants.js";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [words, setWords] = React.useState([]);
  const [gameStatus, setGameStatus] = React.useState("running");

  function handleAddGuess(guess) {
    const nextGuuess = [...words, guess];
    setWords(nextGuuess);

    //cek statusnya win/lose
    if (guess.toUpperCase() === answer) {
      setGameStatus("won");
    } else if (nextGuuess.length >= NUM_OF_GUESSES_ALLOWED) {
      setGameStatus("lost");
    }
  }

  return (
    <>
      <GuessWords words={words} answer={answer}></GuessWords>
      <Guess handleAddGuess={handleAddGuess} status={gameStatus}></Guess>
      {(gameStatus === "won" || gameStatus === "lost") && (
        <ResultBanner
          status={gameStatus}
          answer={answer}
          wordsLen={words.length}
        ></ResultBanner>
      )}
    </>
  );
}

export default Game;
