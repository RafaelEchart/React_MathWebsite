import calculate from '../components/Calculator/calculate.js';

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