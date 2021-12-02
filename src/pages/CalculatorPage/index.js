import React from 'react';
import Calculator from '../../components/Calculator';
import './calculatorPage.css';

const CalculatorPage = () => (
        <div className="calculatorContent_Container" >
          <h2>Lets do some math!</h2>
          <Calculator/>
        </div>
);
export default CalculatorPage;