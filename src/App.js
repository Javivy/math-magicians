/* eslint-disable class-methods-use-this */
/* eslint-disable no-unused-vars */
import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Calculator from './components/Calculator.js';
import Navbar from './components/Navbar.js';
import Home from './components/Home.js';
import Quotes from './components/Quotes.js';
import './index.css';

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/calculator' element={<Calculator />} />
          <Route path='/quotes' element={<Quotes />} />
        </Routes>
      </BrowserRouter>
    );
  }
}

export default App;