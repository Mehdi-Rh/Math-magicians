import React from 'react';
import './Home.css';

const Home = () => {
  const text = ['In 1961 was born the first electronic calculator and for many years this invention was only available as a hard device format, by the time we started having it as a numeric application and this format becomes the most popular.', 'On this website, in the calculator section is integrated a numeric calculator where you can do your basic calculations ( add, subtract, multiply, devise, and modulo ).', 'As a bonus, a quotes section is added for further inspiration.'];
  return (
    <div className="Home">
      <h1>Welcome to our page!</h1>
      <div>
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
  );
};

export default Home;
