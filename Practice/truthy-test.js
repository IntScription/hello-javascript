const findElement = (arr, callback) => {
  for (let i = 0; i < arr.length; i++) {
    if (callback(arr[i])) return arr[i]; // returns the value depending on the provided function
  }
  return undefined;
};

console.log(
  findElement([1, 3, 5, 7, 8], (num) => {
    return num % 2 === 0;
  })
);
