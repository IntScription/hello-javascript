let places = ['Italy', 'Monaco', 'Turkey'];
function visit(place1, place2, place3) {
	console.log('Visit ' + place1 + ' first');
	console.log('Visit ' + place2 + ' second');
	console.log('Lastly, visit ' + place3);
}
visit(...places); // visit(places[0], places[1], places[2]);

// take a look at another example
const fruits = ['apple', 'pear', 'plum'];
const berries = ['blueberry', 'strawberry'];
const fruitsAndBerries = [...fruits, ...berries]; // concatenate
console.log(fruitsAndBerries); // outputs a single array

// its easy to join objects
const flying = { wings: 2 };
const car = { wheels: 4 };
const flyingCar = { ...flying, ...car };
console.log(flyingCar); // {wings: 2, wheels: 4}

// adding without push() method
let veggies = ['onion', 'parsley'];
veggies = [...veggies, 'carrot', 'beetroot'];
console.log(veggies);

// conveting single string into an array
const greeting = 'Hello';
const arrayOfChars = [...greeting];
console.log(arrayOfChars); //  ['H', 'e', 'l', 'l', 'o']

// copy an object into a completely separate object
const car1 = {
	speed: 200,
	color: 'yellow',
};
const car2 = { ...car1 };

car1.speed = 201;

console.log(car1.speed, car2.speed);

// copy an array into a completely separate array
const fruits1 = ['apples', 'pears'];
const fruits2 = [...fruits1];
fruits1.pop();
console.log(fruits1, 'not', fruits2);
