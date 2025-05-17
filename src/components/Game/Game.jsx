import React from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';
import Guess from '../Guess';
import GuessWords from '../GuessWords/GuessWords';

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [words,setWords] = React.useState([])

  function handleAddGuess(guess){
    setWords([...words,guess])
  }
  
  return <>
  <GuessWords words={words} ></GuessWords>
  <Guess handleAddGuess={handleAddGuess}></Guess>
  </>;
}

 export default Game;

