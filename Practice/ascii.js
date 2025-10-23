let letter = 'A';
console.log(letter.charCodeAt(0)); // Output: 65

let symbol = '!';
console.log(symbol.charCodeAt(0)); // Output: 33

// finding a substing using includes();
let phrase = 'JS is Awesome';
let result = phrase.includes('awesome'); // Output: false
console.log(result);
let result2 = phrase.includes('Awesome'); // Output: true
console.log(result2);

// trim
let word = '        Clean     ';
console.log(word.trim()); // Output: Clean

let greeting = '   Hello!   ';
let trimmedStart = greeting.trimStart();
let trimmedEnd = greeting.trimEnd();

console.log(trimmedEnd); // Output: "   Hello!"
console.log(trimmedStart); // Output: "Hello!   "

// using replace method
let a = 'I love JavaScript';
console.log(a.replace('JavaScript', 'Coding'));
