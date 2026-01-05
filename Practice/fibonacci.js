const fib = (n) => {
  if (n <= 0) return n;

  let a = 0,
    b = 1;
  for (let i = 2; i <= n; i++) [a, b] = [b, a + b];
  return b;
};

console.log(fib(7));

// Odd fibonnaci
const oddFib = (n) => {
  if (n <= 0) return n;

  let a = 0,
    b = 1,
    sum = 0;
  while (b <= n) {
    if (b % 2 !== 0) sum += b;
    [a, b] = [b, a + b];
  }

  return sum;
};

console.log(oddFib(7));

// Even fibonnaci
const eveFib = (n) => {
  if (n <= 0) return n;

  let a = 0,
    b = 1,
    sum = 0;

  while (b <= n) {
    if (b % 2 === 0) sum += b;
    [a, b] = [b, a + b];
  }

  return sum;
};

console.log(eveFib(7));
