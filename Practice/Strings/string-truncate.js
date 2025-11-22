const strTrunc = (str, num) => {
  return str.length > num ? str.slice(0, num) + '...' : str;
};

console.log(strTrunc('Hello World', 5)); // outputs: Hello...
