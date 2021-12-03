import operate from '../components/Calculator/operate.js';

it('Test for the adding operation (2+2=4)', () => {
  const mockState = {
    total: '2',
    next: '2',
    operation: '+',
  };

  expect(operate(mockState.total, mockState.next, mockState.operation)).toBe('4');
});

it('Test for the minus operation (10-5=5)', () => {
  const mockState = {
    total: '10',
    next: '5',
    operation: '-',
  };

  expect(operate(mockState.total, mockState.next, mockState.operation)).toBe('5');
});

it('Test for the multiply operation (10x5=50)', () => {
  const mockState = {
    total: '10',
    next: '5',
    operation: 'x',
  };

  expect(operate(mockState.total, mockState.next, mockState.operation)).toBe('50');
});

it('Test for the division operation (10/2=5)', () => {
  const mockState = {
    total: '10',
    next: '2',
    operation: '÷',
  };

  expect(operate(mockState.total, mockState.next, mockState.operation)).toBe('5');
});

it('Test for the division operation (50%100=50)', () => {
  const mockState = {
    total: '50',
    next: '100',
    operation: '%',
  };

  expect(operate(mockState.total, mockState.next, mockState.operation)).toBe('50');
});