var bird = {
	hasWings: true,
	canFly: true,
	hasFeathers: true,
};
var Eagle = Object.create(bird);
console.log(
	'Eagle has wings:',
	Eagle.hasWings + '\n' + 'Eagle can fly:',
	Eagle.canFly + '\n' + 'Eagle has feathers:',
	Eagle.hasFeathers
);
