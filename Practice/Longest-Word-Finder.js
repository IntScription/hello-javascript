const longestWord = (str) => {
  return str.split(' ').reduce((a, b) => (a.length >= b.length ? a : b)).length;
};

console.log(longestWord('The quick brown fox jumped over the lazy dog'));
