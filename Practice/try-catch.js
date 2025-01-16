try {
  console.log('hello');
} catch (err) {
  console.log('goodbye');
}
try {
  Number(5).toPrecision(300);
} catch (e) {
  console.log('There was an error');
}
try {
  throw new Error();
  console.log('Hello');
} catch (err) {
  console.log('Goodbye');
}
