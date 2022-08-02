import React, { PureComponent } from 'react';
import './Calculator.css';

export default class Calculator extends PureComponent {
  render() {
    const keyboardValue = [
      ['AC', '+/-', '%', '/'],
      ['7', '8', '9', 'x'],
      ['4', '5', '6', '-'],
      ['1', '2', '3', '+'],
      ['0', '.', '='],
    ];

    const operationClass = (element, index) => (index === (element.length - 1) ? 'operation' : '');

    const zeroClass = (value) => (
      value === keyboardValue[4][0] ? 'zero' : ''
    );

    const keyboard = keyboardValue.map((row) => (

      row.map((key, keyIndex) => (
        <button type="submit" className={`key ${operationClass(row, keyIndex)} ${zeroClass(key)}`} key={key}>{key}</button>
      ))
    ));

    return (
      <div id="calculator">
        <div id="screen">0</div>
        <div id="keyboardContainer">
          { keyboard }
        </div>
      </div>
    );
  }
}
