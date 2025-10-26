const divide = (a, b) => {
  let result = a / b;
  if (Number.isNaN(result)) {
    return 'Error: Division resulted in NaN';
  }
  return result;
};

console.log(divide(10, 2));
console.log(divide(17, 8));
console.log(divide(0, 0));
