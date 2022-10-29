import { useState } from 'react';
import calculate from './logic/calculate.js';

const Calculator = () => {
  const [state, setOperation] = useState({
    total: 0,
    text: null,
    operation: null,
  });

  const clickHandler = (e) => {
    setOperation((state) => (calculate(state, e.target.textContent)));
  };

  const { total, next, operation } = state;
  return (
    <div className='calculator-container'>
      <div className='number-field'>{ total } { operation } { next }</div>
      <div className='numbers-container'>
        <button className='calc-button' onClick={clickHandler}>AC</button>
        <button className='calc-button' onClick={clickHandler}>+/-</button>
        <button className='calc-button' onClick={clickHandler}>%</button>
        <button className='calc-button orange-btn' onClick={clickHandler}>÷</button>
        <button className='calc-button' onClick={clickHandler}>7</button>
        <button className='calc-button' onClick={clickHandler}>8</button>
        <button className='calc-button' onClick={clickHandler}>9</button>
        <button className='calc-button orange-btn' onClick={clickHandler}>x</button>
        <button className='calc-button' onClick={clickHandler}>4</button>
        <button className='calc-button' onClick={clickHandler}>5</button>
        <button className='calc-button' onClick={clickHandler}>6</button>
        <button className='calc-button orange-btn'onClick={clickHandler}>-</button>
        <button className='calc-button'onClick={clickHandler}>1</button>
        <button className='calc-button'onClick={clickHandler}>2</button>
        <button className='calc-button'onClick={clickHandler}>3</button>
        <button className='calc-button orange-btn'onClick={clickHandler}>+</button>
        <button className='calc-button zero-btn'onClick={clickHandler}>0</button>
        <button className='calc-button'onClick={clickHandler}>.</button>
        <button className='calc-button orange-btn'onClick={clickHandler}>=</button>
      </div>
    </div>
  );
};

Calculator.defaultProps = {
  number: 0,
};

export default Calculator;