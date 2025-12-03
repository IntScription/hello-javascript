const convert = (str) => {
  str = str.toLowerCase();
  const words = str.split(' ');

  for (let i = 0; i < words.length; i++) {
    if (words[i]) {
      words[i] = words[i][0].toUpperCase() + words[i].slice(1);
    }
  }
  return words.join(' ');
};

console.log(convert('i love coding'));
