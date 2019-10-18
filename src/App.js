import React, { Component } from 'react';
import './App.css';
import { Keyboard } from './components/keyboard/keyboard.component';
import { WordToGuess } from './components/wordToGuess/wordToGuess.component';

class App extends Component {
  constructor() {
    super();

    this.state = {
      letters: [
        { name: 'a', id: 1 },
        { name: 'z', id: 2 },
        { name: 'e', id: 3 },
        { name: 'r', id: 4 },
        { name: 't', id: 5 },
        { name: 'y', id: 6 },
        { name: 'u', id: 7 },
        { name: 'i', id: 8 },
        { name: 'o', id: 9 },
        { name: 'p', id: 10 },
        { name: 'q', id: 11 },
        { name: 's', id: 12 },
        { name: 'd', id: 13 },
        { name: 'f', id: 14 },
        { name: 'g', id: 15 },
        { name: 'h', id: 16 },
        { name: 'j', id: 17 },
        { name: 'k', id: 18 },
        { name: 'l', id: 19 },
        { name: 'm', id: 20 },
        { name: 'w', id: 21 },
        { name: 'x', id: 22 },
        { name: 'c', id: 23 },
        { name: 'v', id: 24 },
        { name: 'b', id: 25 },
        { name: 'n', id: 26 },
      ],
      // words: [
      //   "bonjour",
      //   "parapluie",
      //   "buzz",
      //   "chocolat",
      //   "ornythorinque",
      //   "hortensia",
      //   "jardinier"
      // ],
      isMatch: false,
      revealLetter: [],
    };
  }

  handleClick = letter => {
    const { revealLetter } = this.state;
    revealLetter.push(letter);
    console.log(revealLetter);
    this.setState({ revealLetter });
  };

  render() {
    const { revealLetter, letters } = this.state;
    return (
      <div className="App">
        <WordToGuess revealLetter={revealLetter} />
        <Keyboard letters={letters} onClick={this.handleClick} />
      </div>
    );
  }
}

export default App;
