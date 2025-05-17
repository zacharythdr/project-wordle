import React from "react";
import { range } from "../../utils.js";
function EachGuess({ EachWord }) {
  return (
    <>
      <p className="guess">
        {/* {range(5
        ).map((index) => (
          <span class="cell" key={index}>
            {words ? words[index] : undefined}
          </span>
        ))} */}
        {range(5).map((index) => (
          <span className="cell" key={index}>
            {EachWord ? EachWord[index] : undefined}
          </span>
        ))}
        {/* <span class="cell"></span> */}
      </p>
    </>
  );
}

export default EachGuess;
