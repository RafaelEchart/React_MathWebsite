import calculate from '../components/Calculator/calculate.js';

describe('Tests for the calculations result for the calculator component', () => {
  it('Clear the calculator with the AC button', () => {
    const newValue = 'AC';

    expect(calculate(null, newValue)).toStrictEqual({
      total: null,
      next: null,
      operation: null,
    });
  });

  it('Checking result when pressing "=" button', () => {
    const mockState = {
      total: '100',
      next: '50',
      operation: '+',
    };

    const newValue = '=';

    expect(calculate(mockState, newValue)).toStrictEqual({
      total: '150',
      next: null,
      operation: null,
    });
  });

  it('Checking next value when pressing "." button', () => {
    const mockState = {
      total: '1',
      next: '5',
      operation: null,
    };

    const newValue = '.';

    expect(calculate(mockState, newValue)).toStrictEqual({
      total: '1',
      next: '5.',
      operation: null,
    });
  });

  it('Checking error when trying to make a zero division', () => {
    const mockState = {
      total: '10',
      next: '0',
      operation: '÷',
    };

    const newValue = '=';

    expect(calculate(mockState, newValue)).toStrictEqual({
      total: "Can't divide by 0.",
      next: null,
      operation: null,
    });
  });
});
