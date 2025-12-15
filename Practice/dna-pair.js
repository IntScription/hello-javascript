const pairElement = (str) => {
  let result = [];
  const pairs = {
    A: 'T',
    T: 'A',
    C: 'G',
    G: 'C'
  };

  for (const char of str) {
    result.push([char, pairs[char]]);
  }
  return result;
};

console.log(pairElement('ATCGA'));
