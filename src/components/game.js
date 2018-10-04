import React from 'react';

import Header from './header';
import GuessSection from './guess-section';
import GuessCount from './guess-count';
import GuessList from './guess-list';

export default class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentGuess: 0,
      pastGuesses: [],
      targetNumber: 0,
      feedback: 'Make your guess!'
    };
  }

  setCurrentGuess(number) {
    this.setState({
      currentGuess: number
    });
  }

  render() {
    return (
      <div>
        <Header />
        <GuessSection
          guess={number => this.setCurrentGuess(number)}
          feedback={this.state.feedback}
        />
        <GuessCount count={this.state.pastGuesses.length} />
        <GuessList guesses={this.state.pastGuesses} />
      </div>
    );
  }
}
