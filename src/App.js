import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Home from './container/homePage/Home';
import CalculatorPage from './container/calculatorPage/CalculatorPage';
import Quote from './container/quotePage/Quote';
import Navbar from './components/navbar/Navbar';

const App = () => (
  <div>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/calculator" element={<CalculatorPage />} />
      <Route path="/quote" element={<Quote />} />
    </Routes>
  </div>

);

export default App;
