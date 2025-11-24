const chunk = (arr, num) => {
  const result = [];

  for (let i = 0; i < arr.length; i += num) {
    result.push(arr.slice(i, i + num));
  }
  return result;
};

console.log(chunk([0, 1, 2, 3, 4, 5], 2));
console.log(chunk([2, 1, 3, 4, 5, 6], 3));
