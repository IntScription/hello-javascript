const chars =
  'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()';

// using random method
const generator = (l) => {
  let password = '';

  for (let i = 0; i < l; i++) {
    const randomIndex = Math.floor(Math.random() * chars.length);
    password += chars[randomIndex];
  }

  return password;
};

let password = generator(4);
console.log(password);

// most secured way, used in node + browsers
const gen = (len) => {
  const arr = new Uint32Array(len);
  crypto.getRandomValues(arr);
  return Array.from(arr, (x) => chars[x % chars.length]).join('');
};

console.log(gen(6));
