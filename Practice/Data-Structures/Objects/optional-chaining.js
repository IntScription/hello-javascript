const random = {
  name: 'John',
  age: 30,
  profile: {
    email: 'johndoe@email.com',
    address: { street: '123 Main Street', location: 'North Dakota' }
  }
};
console.log(random?.profile?.address?.location);
console.log(random?.name?.profile?.phone);
