import React from 'react';

import './LetterToGuess.styles.css'

const HIDDEN_SYMBOL = '❓'

const LetterToGuess = (props) => {
    return(
        <span className="symbol"> {props.letter.reveal ? props.letter.value : HIDDEN_SYMBOL} </span>
)}

export default LetterToGuess;

