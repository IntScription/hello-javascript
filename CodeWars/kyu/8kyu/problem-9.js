/*
Description:
Given an array add all the number elements and return the binary equivalent of that sum; to make the code bullet proof anything else than a number should be added as 0 since it can't be added.

If your language can handle float binaries assume the array won't contain float or doubles.

arr2bin([1,2]) == '11'
arr2bin([1,2,'a']) == '11'
arr2bin([]) == '0'

NOTE: NaN is a number too in javascript for decimal, binary and n-ary base

Return "NaN" if the sum of all numbers is NaN.
*/

const arr = (n) => {
  const sum = n.reduce((a, b) => (typeof b === 'number' ? a + b : a), 0);
  return Number.isNaN(sum) ? 'NaN' : sum.toString(2);
};

console.log(arr([1, 2, 3]));
console.log(arr([2, 'a']));
