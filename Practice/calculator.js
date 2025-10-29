const calculator = (function () {
  const add = (a, b) => a + b;
  const sub = (a, b) => a - b;
  const mul = (a, b) => a * b;
  const div = (a, b) => {
    return b === 0 ? 'Error: not divisible by 0' : a / b;
  };
  return { add, sub, mul, div };
})();

// Give values for a and b for calculation
console.log(calculator.add(5, 6));
console.log(calculator.sub(5, 7));
console.log(calculator.mul(5, 9));
console.log(calculator.div(3, 0));
console.log(calculator.div(4, 5));
