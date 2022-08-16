import React from 'react';
import './Quote.css';
import { fadeInLeft, fadeIn } from 'react-animations';
import Radium, { StyleRoot } from 'radium';

const styles = {
  fadeInLeft: {
    animation: 'x 1s',
    animationName: Radium.keyframes(fadeInLeft, 'fadeInLeft'),
  },
  fadeIn: {
    animation: 'x 3s',
    animationName: Radium.keyframes(fadeIn, 'fadeIn'),
  },
};

const Quote = () => (
  <StyleRoot>
    <div id="quoteContainer">
      <div style={styles.fadeInLeft} className="quote screen">
        <p>Enjoy Five before Five</p>
        <pre> Your Youth before your Old Age</pre>
        <pre>   Your Health before your Illness</pre>
        <pre>     Your Wealth before your Poverty</pre>
        <pre>       Your Free Time before your Busyness</pre>
        <pre>         and Your Life before your Death.</pre>
      </div>
      <div style={styles.fadeInLeft} className="quote mobile">
        <p>Enjoy Five before Five</p>
        <pre>Your Youth before your Old Age</pre>
        <pre>Your Health before your Illness</pre>
        <pre>Your Wealth before your Poverty</pre>
        <pre>Your Free Time before your Busyness</pre>
        <pre>and Your Life before your Death.</pre>
      </div>

      <p style={styles.fadeIn} className="author">Prophet Mohammed</p>
      <pre style={styles.fadeIn} className="author">Peace Upon Him</pre>
    </div>
  </StyleRoot>
);

export default Quote;
