const fearNotLetter = (arg) => {
  const range = 'abcdefghijklmnopqrstuvwxyz';
  const res = arg.toLowerCase();

  // find where the input starts in the alphabet
  let startIndex = range.indexOf(res[0]);

  // loop through each character of input
  for (let i = 0; i < res.length; i++) {
    const expectedChar = range[startIndex + i];
    const actualChar = res[i];

    if (expectedChar !== actualChar) {
      // first mismatch = missing letter
      return expectedChar;
    }
  }

  // if no mismatch, nothing is missing
  return undefined;
};

console.log(fearNotLetter('abce')); // "d"
