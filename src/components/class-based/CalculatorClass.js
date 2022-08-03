import React, { PureComponent } from 'react';
import './Calculator.css';
import calculate from '../../logic/calculate';

export default class Calculator extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      total: 0,
      next: null,
      operation: null,
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    e.preventDefault();
    this.setState((prevState) => {
      const newState = calculate(prevState, e.target.id);
      return newState;
    });
  }

  render() {
    const keyboardValue = [
      ['AC', '+/-', '%', '÷'],
      [7, 8, 9, 'x'],
      [4, 5, 6, '-'],
      [1, 2, 3, '+'],
      [0, '.', '='],
    ];

    const operationClass = (element, index) => (index === (element.length - 1) ? 'operation' : '');

    const zeroClass = (value) => (
      value === keyboardValue[4][0] ? 'zero' : ''
    );

    const keyboard = keyboardValue.map((row) => (
      row.map((key, keyIndex) => (
        <button
          type="button"
          className={`key ${operationClass(row, keyIndex)} ${zeroClass(key)}`}
          key={key}
          id={key}
          onClick={this.handleClick}
        >
          {key}
        </button>
      ))
    ));

    const { total, next, operation } = this.state;

    return (
      <div id="calculator">
        <div id="screen">{next || operation || total || 0}</div>
        <div id="keyboardContainer">
          { keyboard }
        </div>
      </div>
    );
  }
}
