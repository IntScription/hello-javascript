const sumAll = (arr) => {
  const min = Math.min(arr[0], arr[1]);
  const max = Math.max(arr[0], arr[1]);
  let total = 0;

  for (let i = min; i <= max; i++) total += i;
  return total;
};

console.log(sumAll([4, 1]));

// using sum = n(n + 1)/2
const sum = ([a, b]) => {
  const min = Math.min(a, b);
  const max = Math.max(a, b);

  return (max * (max + 1)) / 2 - (min * (min - 1)) / 2;
};

console.log(sum([4, 1]));
