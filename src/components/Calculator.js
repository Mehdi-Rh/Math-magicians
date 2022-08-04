import React, { useState } from 'react';
import './Calculator.css';
import calculate from '../logic/calculate';

const Calculator = () => {
  const [state, setState] = useState({
    total: 0,
    next: null,
    operation: null,
  });

  const handleClick = (e) => {
    e.preventDefault();
    setState((prevState) => {
      const newState = calculate(prevState, e.target.id);
      return newState;
    });
  };

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
        onClick={handleClick}
      >
        {key}
      </button>
    ))
  ));

  const { total, next, operation } = state;

  return (
    <div id="calculator">
      <div id="screen">{next || operation || total || 0}</div>
      <div id="keyboardContainer">
        { keyboard }
      </div>
    </div>
  );
};

export default Calculator;
