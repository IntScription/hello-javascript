const user = {
  name: 'John',
  address: {
    city: 'San Francisco',
    state: 'CA',
    country: 'USA'
  }
};
// Accessing without the optional chaining operator
console.log(user.address.state); // CA

// Accessing with the use of the optional chaining operator
const zipCode = user.address?.zipCode; // returns undefined
console.log(zipCode);
