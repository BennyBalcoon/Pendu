import React from "react";
import LetterToGuess from "./letterToGuess/LetterToGuess.component";

const words = [
  'bonjour',
  'parapluie',
  'buzz',
  'chocolat',
  'ornithorynque',
  'hortensia',
  'jardinier'
];

function randomWord(words) {
  return words[Math.floor(Math.random()*words.length)];
}
const word = randomWord(words).split("");

//! RANDOM HARDCODÉ TEMPORAIREMENT
// const word = "buzz".split('');

export const WordToGuess = (props) => {
  console.log(props.revealLetter);
  // console.log(toGuess);
  const toGuess = word.map(el => {
    console.log(el);
    if (props.revealLetter.includes(el)) {
      return ({"value": el, "reveal": true})
    } 
      return ({"value": el, "reveal": false})
    
  });
  
  return(
  <div>
  {toGuess.map((el, i) => (
      <LetterToGuess letter={el} key={el + i}/>
     ))}
  </div>
)}

// export default wordToGuess;