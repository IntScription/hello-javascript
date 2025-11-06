const getChar = (ch) => {
  if (ch >= 'a' && ch <= 'z') return ch.charCodeAt(0) - 96; // a–z = 1–26
  if (ch >= 'A' && ch <= 'Z') return ch.charCodeAt(0) - 38; // A–Z = 27–52
  return 0;
};

const computeSignature = (str) => {
  return [...str].reduce((sum, ch) => sum + getChar(ch), 0);
};

const verify = (message, key, signature) => {
  const expectedSignature = computeSignature(message) + computeSignature(key);
  return expectedSignature === signature ? true : false;
};

console.log(verify('foo', 'bar', 57));
