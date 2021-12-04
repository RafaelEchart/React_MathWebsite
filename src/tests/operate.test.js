import operate from '../components/Calculator/operate.js';

describe('Tests for the operations needed to give results in the calculator component', () => {
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

  it('Test for the division operation (10÷2=5)', () => {
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

  it('Test for the case that a non Number is typed as Number', () => {
    const mockState = {
      total: 'xx',
      next: 'xx',
      operation: '+',
    };

    expect(operate(mockState.total, mockState.next, mockState.operation)).toBe('Invalid Number!');
  });

  it('Test if an invalid operator is used to preform an operation ', () => {
    const mockState = {
      total: '500',
      next: '30',
      operation: '@',
    };

    expect(operate(mockState.total, mockState.next, mockState.operation)).toBe(`Unknown operation '${mockState.operation}'`);
  });
});
