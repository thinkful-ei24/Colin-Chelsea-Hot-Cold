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
      targetNumber: Math.floor(Math.random() * 101),
      feedback: 'Make your guess!',
      isHidden: true
    };
  }

  setCurrentGuess(number) {
    this.setState(
      {
        currentGuess: number,
        pastGuesses: [...this.state.pastGuesses, number]
      },
      () =>
        this.evaluateFeedback(this.state.targetNumber, this.state.currentGuess)
    );
  }

  evaluateFeedback(targetNumber, currentGuess) {
    console.log(this.state.currentGuess);
    if (!Number(currentGuess)) {
      this.setState({
        feedback: 'learn what a number is'
      });
    } else if (targetNumber - currentGuess === 0) {
      this.setState({
        feedback: 'You did it!'
      });
    } else if (
      targetNumber - currentGuess >= -5 &&
      targetNumber - currentGuess <= 5
    ) {
      this.setState({
        feedback: 'very hot'
      });
    } else if (
      targetNumber - currentGuess >= -15 &&
      targetNumber - currentGuess <= 15
    ) {
      this.setState({
        feedback: 'hot'
      });
    } else if (
      targetNumber - currentGuess >= -30 &&
      targetNumber - currentGuess <= 30
    ) {
      this.setState({
        feedback: 'cold'
      });
    } else {
      this.setState({
        feedback: 'ice cold'
      });
    }
  }

  toggleHidden() {
    this.setState({
      isHidden: !this.state.isHidden
    });
  }

  render() {
    return (
      <div>
        <Header
          tutorial={() => this.toggleHidden()}
          isHidden={this.state.isHidden}
        />
        <GuessSection
          guess={number => this.setCurrentGuess(Number(number))}
          feedback={this.state.feedback}
        />
        <GuessCount count={this.state.pastGuesses.length} />
        <GuessList guesses={this.state.pastGuesses} />
      </div>
    );
  }
}
