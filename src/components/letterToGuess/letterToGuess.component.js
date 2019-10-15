import React from 'react';

import './letterToGuess.styles.css'

function randomWord(words) {
    return words[Math.floor(Math.random()*words.length)];
}

const words = [
    'bonjour',
    'parapluie',
    'buzz',
    'chocolat',
    'ornithorynque',
    'hortensia',
    'jardinier'
];

const wordToGuess = randomWord(words);
const wordSplitted = wordToGuess.split("");
console.log(wordSplitted);

const HIDDEN_SYMBOL = '❓'

const LetterToGuess = (props) => (
    <div>
        {wordSplitted.map((letter, i) => (
            <span className="symbol" key={letter+i}>
                {props.feedback === 'hidden' ? HIDDEN_SYMBOL : letter}
            </span>
        ))}
    </div>
)

export default LetterToGuess;

