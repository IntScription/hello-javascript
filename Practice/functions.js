let j = 10;
function cool() {
	var i = 20;
	console.log(i);
}
function sup() {
	var k = 30;
	console.log(k);
}
function tool() {
	sup(cool(console.log(j)));
	i = j + 30;
	console.log(i);
}
function seal() {
	tool();
	k = j + 40;
	console.log(k);
}
seal();
console.log(
	'\n the value of i = ' +
		i +
		'\n the value of j = ' +
		j +
		'\n the value of k = ' +
		k
);
