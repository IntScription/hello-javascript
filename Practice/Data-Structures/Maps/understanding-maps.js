let bestBoxers = new Map();
bestBoxers.set(1, 'The Champion');
bestBoxers.set(2, 'The Runner-up');
bestBoxers.set(3, 'The third place');

console.log(bestBoxers);

// to get the specified value we use the get() method
console.log(bestBoxers.get(1)); // 'The Champion'

let bestBoxers1 = new Map();
bestBoxers1.set(1, 'The Champion');
bestBoxers1.set(2, 'The Runner-up');
bestBoxers1.set(2, 'The third place'); // this will overwrite the previous key value

console.log(bestBoxers1);
