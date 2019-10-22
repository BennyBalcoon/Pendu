import React from 'react';

import './wordToGuess.styles.css';

const HIDDEN_SYMBOL = '❓';

const WordToGuess = ({ revealLetters, word }) => {
  const wordToGuess = word.split('').map(letter => ({ letter, visible: revealLetters.includes(letter) }));

  return (
    <div>
      {wordToGuess.map(({ letter, visible }, i) => (
        <span className="symbol" key={`${word}${i}`}>
          {visible ? letter : HIDDEN_SYMBOL }
        </span>
      ))}
    </div>
  );
};

export default WordToGuess;
