import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Home from './container/Home';
import Calculator from './components/Calculator';
import Quote from './container/Quote';
import Navbar from './components/Navbar';

const App = () => (
  <div>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/calculator" element={<Calculator />} />
      <Route path="/quote" element={<Quote />} />
    </Routes>
  </div>

);

export default App;
