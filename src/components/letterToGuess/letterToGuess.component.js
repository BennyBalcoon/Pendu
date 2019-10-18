import React from 'react';

import './letterToGuess.styles.css';

function randomWord(words) {
  return words[Math.floor(Math.random() * words.length)];
}

const words = [
  'bonjour',
  'parapluie',
  'buzz',
  'chocolat',
  'ornithorynque',
  'hortensia',
  'jardinier',
  'contexte',
];

const word = randomWord(words);
const wordSplitted = word.split('');
const wordArray = wordSplitted.map(el => ({ letter: el, hidden: true }));
// console.log(wordArray)

const HIDDEN_SYMBOL = '❓';

const LetterToGuess = ({ revealLetter }) => {
  const wordToGuess = wordArray.map(el => {
    if (revealLetter.indexOf(el.letter) !== -1) {
      return { letter: el.letter, hidden: false };
    }
    return el;
  });
  console.log(wordSplitted);

  if (revealLetter.length > 10) {
    alert('loser');
  }

  //   function isInRevealLetter(el) {
  //     console.log(el);
  //     return revealLetter.indexOf(el) !== -1;
  //   }

  if (
    wordSplitted.every(el => revealLetter.indexOf(el) !== -1) &&
    revealLetter.length <= 10
  ) {
    console.log("c'est bon!!!");
  }

  return (
    <div>
      {wordToGuess.map(({ letter, hidden }, i) => (
        <span className="symbol" key={letter + i}>
          {hidden ? HIDDEN_SYMBOL : letter}
        </span>
      ))}
    </div>
  );
};

export default LetterToGuess;
