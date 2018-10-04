import React from 'react';

import './guess-form.css';

export default class GuessForm extends React.Component {
  render() {
    return (
      <form
        onSubmit={e => {
          e.preventDefault();
          // props.guess(e.input.value);
        }}
      >
        <input
          type="text"
          name="userGuess"
          id="userGuess"
          className="text"
          maxLength="3"
          autoComplete="off"
          placeholder="Enter your Guess"
          required
        />
        <input
          type="submit"
          id="guessButton"
          className="button"
          name="submit"
          value="Guess"
        />
      </form>
    );
  }
}
