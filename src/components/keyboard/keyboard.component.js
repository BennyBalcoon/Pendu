import React from "react";

import './keyboard.styles.css';

import {Letter} from '../letter/letter.component';

export const Keyboard = (props) => (
    <div className='keyboard'>
    {props.letters.map(letter => (
          <Letter key={letter.id} letter={letter}/>
        ))}
    </div>
);