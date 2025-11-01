// without endsWith();
const strConfirm = (str, target) => {
  return str.slice(-target.length) === target ? true : false;
};

console.log(strConfirm('Hello World', 'world'));

// with endsWith();
const confirm = (val, tar) => {
  return val.endsWith(tar);
};

console.log(confirm('hello world', 'world'));

// case-insensitive check
const checkEnding = (str, target) => {
  return str.toLowerCase().endsWith(target.toLowerCase());
};

console.log(checkEnding('Hello World', 'world'));
