const nums = [0, 10, 20, 30, 40, 50];
console.log(
	nums.filter(function (num) {
		// console.log(num > 20); gives you a true and false output
		return num > 20;
	})
);
