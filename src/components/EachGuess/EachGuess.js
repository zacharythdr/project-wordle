import React from "react";
import { range } from "../../utils.js";

function EachGuess({ EachWord }) {
  return (
    <>
      <p className="guess">
        {range(5).map((index) => (
          <span
            className={`cell ${EachWord ? EachWord[index].status : ""}`}
            key={index}
          >
            {EachWord ? EachWord[index].letter : undefined}
          </span>
        ))}
      </p>
    </>
  );
}

export default EachGuess;
