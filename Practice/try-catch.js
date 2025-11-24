try {
  console.log('hello');
} catch {
  console.log('goodbye');
}
try {
  Number(5).toPrecision(300);
} catch {
  console.log('There was an error');
}
try {
  throw new Error();
} catch {
  console.log('Goodbye');
}
