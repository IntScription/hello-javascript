var purchase = {
	shoes: 100,
	tax: 1.2,
	total: function () {
		var calculation = purchase.shoes * purchase.tax;
		console.log('Total price:', calculation);
	},
};
purchase.total(); // results 120

// using 'this'
var purchase1 = {
	shoes: 50,
	tax: 1.2,
	total: function () {
		var calculation = this.shoes * this.tax;
		console.log('Total price:', calculation);
	},
};
purchase1.total(); // results 120
