/*
Given a set of numbers, return the additive inverse of each. Each positive becomes negatives, and the negatives become positives.

[1, 2, 3, 4, 5] --> [-1, -2, -3, -4, -5]
[1, -2, 3, -4, 5] --> [-1, 2, -3, 4, -5]
[] --> []
You can assume that all values are integers. Do not mutate the input array.
*/

const inverse = (array) => {
  return array.map((n) => -n);
};

console.log(inverse([1, -2, 5]));

// without map
const inv = (array) => {
  let result = [];
  for (let i = 0; i < array.length; i++) result.push(-array[i]);
  return result;
};

console.log(inv([-2, -1, 5]));
