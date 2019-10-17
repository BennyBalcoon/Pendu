import React from "react";

import './Keyboard.styles.css';

import {Letter} from '../letter/letter.component';

export const Keyboard = (props) => (
    <div className='keyboard'>
    {props.letters.map(letter => (
          <Letter key={letter.id} letter={letter} onClick={props.onClick}/>
        ))}
    </div>
);