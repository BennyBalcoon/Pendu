import React from "react";

import './letter.styles.css';

export const Letter = props => (
  <div className="letter-container">
    <button className="button" onClick={() => alert('click')}> {props.letter.name} </button>
  </div>
);
