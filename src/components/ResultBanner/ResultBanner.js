import React from "react";

function ResultBanner({ status, answer, wordsLen }) {
  if (status === "won") {
    return (
      <div className="happy banner">
        <p>
          <strong>Congratulations!</strong> Got it in
          <strong> {wordsLen} guesses</strong>.
        </p>
      </div>
    );
  } else {
    return (
      <div className="sad banner">
        <p>
          Sorry, the correct answer is <strong>{answer}</strong>.
        </p>
      </div>
    );
  }
}
export default ResultBanner;
