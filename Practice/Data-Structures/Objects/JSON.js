// converts javacript object to json string
const random = { name: 'John', age: 32, gender: 'male', isadmin: true };
console.log(JSON.stringify(random));

// converts json string to js object
const random2 = '{"name" : "John", "age": 30, "isadmin": true}';
console.log(JSON.parse(random2));
