import React, { Component } from 'react';
import './App.css';
import Keyboard from './components/keyboard/keyboard.component';
import WordToGuess from './components/wordToGuess/wordToGuess.component';


const WORDS = [
  'bonjour',
  'parapluie',
  'buzz',
  'chocolat',
  'ornithorynque',
  'hortensia',
  'jardinier',
  'contexte',
];

const LIMIT = 10;

const getWord = () => WORDS[Math.floor(Math.random()*WORDS.length)];

class App extends Component {
  constructor() {
    super();

    this.state = this.getNewState();
  }

  getNewState = () => ({
    word: getWord(),
    revealLetters: [],
    mistakes: 0,
    status: 'PENDING', // PENDING, FAILED, VICTORY
  });

  handleReset = () => {
    this.setState(this.getNewState());
  }

  handleClick = letter => {
    const { revealLetters, word, mistakes, status } = this.state;
    if(status !== 'PENDING' ) {
      return;
    }
    if(!revealLetters.includes(letter)) {
      // Si le word ne contient la lettre => On incrémente l'erreur
      if(!word.split('').includes(letter)) {
        this.setState({ mistakes: mistakes + 1, status: mistakes === 9 ? 'FAILED' : 'PENDING' });
      }
      const newRevealLetters = [...revealLetters, letter];
      this.setState({ revealLetters: newRevealLetters });
      const isVictory = word.split('').every(l => newRevealLetters.includes(l));
      if(isVictory) this.setState({ status: 'VICTORY'});
    }
    // do nothing
  };

  render() {
    const { revealLetters, word, mistakes, status } = this.state;
    return (
      <div className="App">
        {status === 'PENDING' && <span>Mistakes : {mistakes}</span>}
        {status === 'FAILED' && <span>Perdu</span>}
        {status === 'VICTORY' && <span>Victoire <button onClick={this.handleReset}>Reset</button></span>}
        <WordToGuess revealLetters={revealLetters} word={word} />
        <Keyboard onLetterClick={this.handleClick} />
      </div>
    );
  }
}

export default App;
