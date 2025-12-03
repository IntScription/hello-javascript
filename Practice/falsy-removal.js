const removal = (arr) => {
  return arr.filter(Boolean);
};

console.log(removal([1, 'ate', null, 0, NaN, undefined, '', false, true, 2]));
