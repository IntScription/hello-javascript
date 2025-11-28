const pyramid = (str, height, boolean) => {
  let res = '\n';

  if (!boolean) {
    for (let i = 0; i < height; i++) {
      const space = ' '.repeat(height - i - 1);
      const char = str.repeat(2 * i + 1);
      res += space + char + '\n';
    }
  } else {
    for (let i = height; i > 0; i--) {
      const space = ' '.repeat(height - i);
      const char = str.repeat(2 * i - 1);
      res += space + char + '\n';
    }
  }
  return res;
};

console.log(pyramid('*', 4, false));
console.log(pyramid('!', 5, true));
