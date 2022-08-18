import React from 'react';
import { fadeInLeft, fadeIn } from 'react-animations';
import Radium, { StyleRoot } from 'radium';
import Calculator from '../../components/calculator/Calculator';
import './CalculatorPage.css';

const styles = {
  fadeInLeftH1: {
    animation: 'x 1s',
    animationName: Radium.keyframes(fadeInLeft, 'fadeInLeft'),
  },
  fadeIn: {
    animation: 'x 3s',
    animationName: Radium.keyframes(fadeIn, 'fadeIn'),
  },
};

const CalculatorPage = () => (
  <StyleRoot>
    <div id="calculatorPage">
      <h1 style={styles.fadeInLeftH1}>Let&apos;s do some Math!</h1>
      <div id="calculator" style={styles.fadeIn}><Calculator /></div>
    </div>
  </StyleRoot>
);

export default CalculatorPage;
