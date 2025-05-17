import React from "react";
import { range } from "../../utils.js";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants.js";
import EachGuess from "../EachGuess/EachGuess.js";
import { checkGuess } from "../../game-helpers.js";

function GuessWords({ words, answer }) {
  return (
    <div>
      <div className="guess-results">
        {range(NUM_OF_GUESSES_ALLOWED).map((num) => (
          <EachGuess EachWord={checkGuess(words[num], answer)} key={num} />
        ))}
      </div>
    </div>
  );
}

export default GuessWords;
