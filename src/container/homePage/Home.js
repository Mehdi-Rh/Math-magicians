import React from 'react';
import './Home.css';
import { fadeInRight } from 'react-animations';
import Radium, { StyleRoot } from 'radium';

const styles = {
  fadeInRightH1: {
    animation: 'x 1s',
    animationName: Radium.keyframes(fadeInRight, 'fadeInRight'),
  },
  fadeInRightP: {
    animation: 'x 2s',
    animationName: Radium.keyframes(fadeInRight, 'fadeInRight'),
  },
};

const Home = () => {
  const text = ['In 1961 was born the first electronic calculator and for many years this invention was only available in a hard device format, by the time we started having it as a numeric application and this format becomes the most popular.', 'On this website, in the calculator section is integrated a numeric calculator where you can do your basic calculations ( add, subtract, multiply, devise, and modulo ).', 'As a bonus, a quotes section is added for further inspiration.'];
  return (
    <StyleRoot>
      <div className="Home">
        <h1 style={styles.fadeInRightH1}>Welcome!</h1>
        <div style={styles.fadeInRightP}>
          <p>
            {text.map((p, index) => (
              <p key={p[index]} className="text">
                {p}
                <br />
              </p>
            ))}
          </p>
        </div>
      </div>
    </StyleRoot>
  );
};

export default Home;
