import React from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";
import Guess from "../Guess";
import GuessWords from "../GuessWords/GuessWords";
import ResultBanner from "../ResultBanner/ResultBanner";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants.js";
import Keyboard from "../Keyboard/Keyboard.js";
import { checkGuess } from "../../game-helpers.js";

// Pick a random word on every pageload.
// const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
// console.info({ answer });

function Game() {
  const [answer, setAnswer] = React.useState(() => sample(WORDS));
  const [words, setWords] = React.useState([]);
  const [gameStatus, setGameStatus] = React.useState("running");

  console.info({ answer });

  function handleRestart() {
    const newAnswer = sample(WORDS);
    setAnswer(newAnswer);
    setWords([]);
    setGameStatus("running");
  }
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

  const validatedGuesses = words.map((word) => checkGuess(word, answer));

  return (
    <>
      <GuessWords words={words} answer={answer}></GuessWords>
      <Guess handleAddGuess={handleAddGuess} status={gameStatus}></Guess>
      <Keyboard validatedGuesses={validatedGuesses}></Keyboard>
      {(gameStatus === "won" || gameStatus === "lost") && (
        <ResultBanner
          handleRestart={handleRestart}
          status={gameStatus}
          answer={answer}
          wordsLen={words.length}
        ></ResultBanner>
      )}
    </>
  );
}

export default Game;
