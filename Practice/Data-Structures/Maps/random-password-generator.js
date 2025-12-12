const gen = (len) => {
  const chars =
    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  return [...Array(len)]
    .map(() => chars[Math.floor(Math.random() * chars.length)])
    .join('');
};

console.log(gen(5));
