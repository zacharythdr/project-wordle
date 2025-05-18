import React from "react";

function ResultBanner({ handleRestart, status, answer, wordsLen }) {
  return (
    <div className={`${status === "won" ? "happy" : "sad"} banner`}>
      {status === "won" ? (
        <p>
          <strong>Congratulations!</strong> Got it in
          <strong> {wordsLen} guesses</strong>.
        </p>
      ) : (
        <p>
          Sorry, the correct answer is <strong>{answer}</strong>.
        </p>
      )}
      <button onClick={handleRestart}>Restart Game</button>
    </div>
  );
}
export default ResultBanner;
