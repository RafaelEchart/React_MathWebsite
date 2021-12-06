import React from 'react';
import {
  render, screen,
} from '@testing-library/react';
import '@testing-library/jest-dom';
import CalculatorPage from '../../pages/CalculatorPage/index.js';
import HomePage from '../../pages/HomePage/index.js';

describe('Pages snapshots', () => {
  it('Should render HomePage', async () => {
    render(<HomePage />);
    expect(screen.getByText('Welcome to our page!')).toBeInTheDocument();
  });

  it('Should render CalculatorPage', async () => {
    render(<CalculatorPage />);
    expect(screen.getByText('Lets do some math!')).toBeInTheDocument();
  });
});
