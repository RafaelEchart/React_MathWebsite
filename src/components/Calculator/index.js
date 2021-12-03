import React, { useState } from 'react';
import calculate from './calculate';
import './calculator.css';

const Calculator = () => {
  const [result, setResult] = useState({
    total: undefined,
    next: undefined,
    operation: undefined,
  });

  let value = 0;
  if (result.next) {
    value = result.next;
  } else if (result.total) {
    value = result.total;
  }

  const newResultState = (value) => {
    const newState = calculate(result, value);
    setResult(newState);
  };

  const clickHandler = (e) => {
    console.log(result);
    const ButtonName = e.target.innerText;
    newResultState(ButtonName);
  };

  return (
    <div className="calculator_container">

      <div className="result_container">
        {value}
      </div>

      <div className="row_container">
        <button className="number gray_button" type="button" onClick={clickHandler}>AC</button>

        <button className="operation" type="button" onClick={clickHandler}>+/-</button>
        <button className="operation" type="button" onClick={clickHandler}>%</button>
        <button className="operation" type="button" onClick={clickHandler}>÷</button>
      </div>

      <div className="row_container" type="button">

        <button className="number" type="button" onClick={clickHandler}>7</button>
        <button className="number" type="button" onClick={clickHandler}>8</button>
        <button className="number" type="button" onClick={clickHandler}>9</button>
        <button className="operation" type="button" onClick={clickHandler}>x</button>

      </div>
      <div className="row_container">

        <button className="number" type="button" onClick={clickHandler}>4</button>
        <button className="number" type="button" onClick={clickHandler}>5</button>
        <button className="number" type="button" onClick={clickHandler}>6</button>
        <button className="operation" type="button" onClick={clickHandler}>-</button>

      </div>
      <div className="row_container">

        <button className="number" type="button" onClick={clickHandler}>1</button>
        <button className="number" type="button" onClick={clickHandler}>2</button>
        <button className="number" type="button" onClick={clickHandler}>3</button>
        <button className="operation" type="button" onClick={clickHandler}>+</button>

      </div>
      <div className="row_container">

        <button className="number_zero" type="button" onClick={clickHandler}>0</button>
        <button className="number" type="button" onClick={clickHandler}>.</button>
        <button className="operation" type="button" onClick={clickHandler}>=</button>

      </div>

    </div>
  );
};

export default Calculator;
