import React from "react";
import LetterToGuess from "../letterToGuess/letterToGuess.component";

export const WordToGuess = props => (
  <div>
    <LetterToGuess feedback="hidden" {...props}/>
  </div>
);
