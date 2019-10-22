import React from "react";

import './letter.styles.css';

export const Letter = ({letter, onLetterClick}) => (
  <div className="letter-container">
    <button className="button" onClick={() => onLetterClick(letter)}> {letter} </button>
  </div>
);
