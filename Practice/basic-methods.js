// Map Method
/*
  * function addOne(num) {
  return num + 1;
}
const mappedArr = a.map(addOne)
*/
const a = [1, 2, 3, 4, 5];
const mappedArr = a.map((num) => num + 1);
console.log(mappedArr);
console.log(a);

// Filter Method
function isOdd(num) {
  return num % 2 !== 0;
}
const ar = [1, 2, 3, 4, 5];
const oddNums = ar.filter(isOdd);
console.log(oddNums); // Outputs [1, 3, 5];
console.log(ar); // Outputs [1, 2, 3, 4, 5], original array is not affected

// Reduce Method
// This method is used to multily everything in an array rather than using loops
const arr = [1, 2, 3, 4, 5];
const productOfAllNums = arr.reduce((total, currentItem) => {
  return total * currentItem;
}, 1);
console.log(productOfAllNums); // Outputs 120;
console.log(arr); // Outputs [1, 2, 3, 4, 5]
