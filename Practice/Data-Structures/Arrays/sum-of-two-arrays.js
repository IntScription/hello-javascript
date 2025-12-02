// sum of arr1 and arr2
const sumArr = (arr1, arr2) => {
  return arr1.concat(arr2).reduce((a, b) => a + b, 0);
};

console.log(sumArr([1, 2, 3], [4, 5, 6]));
