import React from "react";

import './letter.styles.css';

export const Letter = props => (
  <div className="letter-container">
    <button className="button" onClick={() => {props.onClick(props.letter.name)}}> {props.letter.name} </button>
  </div>
);
