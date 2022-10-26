import React from 'react';
import calculate from './logic/calculate.js';

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      total: 0,
      next: null,
      operation: null,
    };
    this.clickHandler = this.clickHandler.bind(this);
  }

  clickHandler(e) {
    this.setState((state) => (calculate(state, e.target.textContent)));
  }

  render() {
    const { total, next, operation } = this.state;
    return (
      <div className='calculator-container'>
        <div className='number-field'>{ total } { operation } { next }</div>
        <div className='numbers-container'>
          <button className='calc-button' onClick={this.clickHandler}>AC</button>
          <button className='calc-button' onClick={this.clickHandler}>+/-</button>
          <button className='calc-button' onClick={this.clickHandler}>%</button>
          <button className='calc-button orange-btn' onClick={this.clickHandler}>÷</button>
          <button className='calc-button' onClick={this.clickHandler}>7</button>
          <button className='calc-button' onClick={this.clickHandler}>8</button>
          <button className='calc-button' onClick={this.clickHandler}>9</button>
          <button className='calc-button orange-btn' onClick={this.clickHandler}>x</button>
          <button className='calc-button' onClick={this.clickHandler}>4</button>
          <button className='calc-button' onClick={this.clickHandler}>5</button>
          <button className='calc-button' onClick={this.clickHandler}>6</button>
          <button className='calc-button orange-btn'onClick={this.clickHandler}>-</button>
          <button className='calc-button'onClick={this.clickHandler}>1</button>
          <button className='calc-button'onClick={this.clickHandler}>2</button>
          <button className='calc-button'onClick={this.clickHandler}>3</button>
          <button className='calc-button orange-btn'onClick={this.clickHandler}>+</button>
          <button className='calc-button zero-btn'onClick={this.clickHandler}>0</button>
          <button className='calc-button'onClick={this.clickHandler}>.</button>
          <button className='calc-button orange-btn'onClick={this.clickHandler}>=</button>
        </div>
      </div>
    );
  }
}

Calculator.defaultProps = {
  number: 0,
};

export default Calculator;