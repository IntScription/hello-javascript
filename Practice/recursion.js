// simple printing done here without recursion
function example() {
	console.log('line one');
	console.log('line two');
	console.log('line three');
}
example();
// using recursion here
let counter = 3;
function ex() {
	console.log(counter);
	counter--;
	if (counter === 0) return;
	ex();
	/* if (counter == 0) {
		return;
	} else {
		ex();
	} */
}
ex();
