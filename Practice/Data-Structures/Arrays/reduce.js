const arr = (n) => {
  return n.reduce((a, b) => a + b, 0);
};

console.log(arr([1, 2, 3])); // outputs 6
