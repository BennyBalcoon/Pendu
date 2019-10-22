import React from "react";

import './keyboard.styles.css';

import {Letter} from '../letter/letter.component';

const LETTERS = 'abcdefghijklmnopqrstuvwxyz';

const Keyboard = ({onLetterClick }) => (
    <div className='keyboard'>
    {LETTERS.split('').map(letter => (
          <Letter key={letter} letter={letter} onLetterClick={onLetterClick}/>
        ))}
    </div>
);

export default Keyboard;