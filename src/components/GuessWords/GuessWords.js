import React from 'react';

function GuessWords({words}) {
  

  return <div>
    <div className="guess-results">
      {words.map((word,index) => {
        return (
          <p className="guess" key={index}>{word}</p>
        )
      })}
 
</div>
  </div>;
}

export default GuessWords;
