import React from 'react';

class Calculator extends React.Component {
  render() {
    return (
      <div className='calculator-container'>
        <div className='number-field'>{this.props.number}</div>
        <div className='numbers-container'>
          <button className='calc-button'>AC</button>
          <button className='calc-button'>+/-</button>
          <button className='calc-button'>%</button>
          <button className='calc-button orange-btn'>÷</button>
          <button className='calc-button'>7</button>
          <button className='calc-button'>8</button>
          <button className='calc-button'>9</button>
          <button className='calc-button orange-btn'>X</button>
          <button className='calc-button'>4</button>
          <button className='calc-button'>5</button>
          <button className='calc-button'>6</button>
          <button className='calc-button orange-btn'>-</button>
          <button className='calc-button'>1</button>
          <button className='calc-button'>2</button>
          <button className='calc-button'>3</button>
          <button className='calc-button orange-btn'>+</button>
          <button className='calc-button zero-btn'>0</button>
          <button className='calc-button'>.</button>
          <button className='calc-button orange-btn'>=</button>
        </div>
      </div>
    );
  }
}

Calculator.defaultProps = {
  number: 0,
};

export default Calculator;