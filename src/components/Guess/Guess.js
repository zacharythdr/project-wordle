import React from 'react';

function Guess({handleAddGuess}) {
  const [guess, setGuess] = React.useState('');
  return <>
  <form className="guess-input-wrapper" onSubmit={(event) => {
     event.preventDefault();
      handleAddGuess(guess)
      setGuess('')
  }}>
  <label htmlFor="guess-input">Enter guess:</label>
  <input id="guess-input" type="text" minLength={5}
        maxLength={5}
        pattern="[a-zA-Z]{5}"
        title="5 letter word" value={guess} onChange={(event) => {
    const nextGuess = event.target.value.toUpperCase()
    setGuess(nextGuess)
  }}/>
  </form>
  </>;
}

export default Guess;
