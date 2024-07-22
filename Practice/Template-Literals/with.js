// ES6 models use template literals
let greet = 'Hello';
let place = 'World';
console.log(`${greet} ${place} !`); //display both variables using template literals

//it's possible to perform arithmetic operation inside a template literal expression
console.log(`${1 + 1 + 1 + 1 + 1} stars!`);

// multi-line strings
let car = `
  hashback,
  racing,
  mountain,
  cruise
`;
console.log(car);

// ES6 Variable Interpolation
let a = 'Hey John how are you doing ?';
let b = 'I have been all good.';
console.log(`${a} ${b}`);
