const dropElements = (arr, testfunc) => {
  let index = arr.findIndex(testfunc);
  return index === -1 ? [] : arr.slice(index);
};

console.log(
  dropElements([1, 2, 3, 4], function (n) {
    return n > 5;
  })
);

console.log(
  dropElements([0, 1, 0, 1], function (n) {
    return n === 1;
  })
);
