import Big from 'big.js';

export default function operate(numberOne, numberTwo, operation) {
  let one;
  let two;
  try {
    one = Big(numberOne);
    two = Big(numberTwo);
  } catch (err) {
    return 'Invalid Number!';
  }
  if (operation === '+') {
    return one.plus(two).toString();
  }
  if (operation === '-') {
    return one.minus(two).toString();
  }
  if (operation === 'x') {
    return one.times(two).toString();
  }
  if (operation === '÷') {
    try {
      return one.div(two).toString();
    } catch (err) {
      return "Can't divide by 0.";
    }
  }
  if (operation === '%') {
    try {
      return one.mod(two).toString();
    } catch (err) {
      return "Can't Module by 0.";
    }
  }
  return (`Unknown operation '${operation}'`);
}
