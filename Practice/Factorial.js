let num = 5;
const fact = (n) => {
  let result = 1;

  for (let i = 1; i <= n; i++) result *= i;
  return result;
};

let factorial = `Factorial of ${num} is ${fact(num)}`;
console.log(factorial);
