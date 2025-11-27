/*
This type of loop is best used when you need to loop over the properties of an object. This loop will iterate over all enumerable properties of an object, including inherited properties and non-numeric properties.
*/

const fruit = {
  name: 'apple',
  color: 'red',
  price: 0.99
};

for (const prop in fruit) {
  console.log(fruit[prop]);
}
