import React from "react";
import { range } from "../../utils.js";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants.js";
import EachGuess from "../EachGuess/EachGuess.js";
function GuessWords({ words }) {
  return (
    <div>
      <div className="guess-results">
        {range(NUM_OF_GUESSES_ALLOWED).map((num) => (
          <EachGuess EachWord={words[num]} key={num} />
        ))}
      </div>
    </div>
  );
}

export default GuessWords;
