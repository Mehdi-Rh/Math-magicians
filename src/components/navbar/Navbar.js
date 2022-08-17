import React, { useEffect, useState } from 'react';
import {
  Link,
} from 'react-router-dom';
import './Navbar.css';
import { fadeInRight, fadeInLeft } from 'react-animations';
import Radium, { StyleRoot } from 'radium';

const styles = {
  fadeInRight: {
    animation: 'x 2s',
    animationName: Radium.keyframes(fadeInRight, 'fadeInRight'),
  },
  fadeInLeft: {
    animation: 'x 2s',
    animationName: Radium.keyframes(fadeInLeft, 'fadeInLeft'),
  },

};

const Navbar = () => {
  const [isNavExpanded, setIsNavExpanded] = useState(false);

  useEffect(() => {
    // if (window.innerWidth > 768) {
    //   setIsNavExpanded(false);
    //   console.log('resize');
    // }
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setIsNavExpanded(false);
      }
      console.log(isNavExpanded);
      console.log('resized to: ', window.innerWidth, 'x', window.innerHeight);
    };

    window.addEventListener('resize', handleResize);
  });

  return (
    <StyleRoot>
      <header className="navigation">
        <a href="/" style={(window.innerWidth > 768) ? styles.fadeInLeft : {}} className="brand-name">
          Math Magicians
        </a>
        <button
          type="button"
          className="hamburger"
          onClick={() => {
            setIsNavExpanded(!isNavExpanded);
          }}
        >
          {/* icon from heroicons.com */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 "
            viewBox="0 0 20 20"
            fill="#86c232"
          >
            <path
              fillRule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
              clipRule="evenodd"
              className="HamburgerLines"
            />
          </svg>
        </button>
        <div
          className={
          isNavExpanded ? 'navigation-menu expanded' : 'navigation-menu'
        }
        >
          <ul style={(window.innerWidth > 768) ? styles.fadeInRight : {}} id="nav">
            <li>
              <Link
                onClick={() => {
                  setIsNavExpanded(!isNavExpanded);
                }}
                to="/"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                onClick={() => {
                  setIsNavExpanded(!isNavExpanded);
                }}
                to="/calculator"
              >
                Calculator
              </Link>
            </li>
            <li>
              <Link
                onClick={() => {
                  setIsNavExpanded(!isNavExpanded);
                }}
                to="/quote"
              >
                Quote
              </Link>
            </li>
          </ul>
        </div>
      </header>
    </StyleRoot>

  );
};

export default Navbar;
