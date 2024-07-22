// converting object to an array
const result = [];
const drone = {
	speed: 100,
	color: 'yellow',
};
const droneKeys = Object.keys(drone); // here droneKeys becomes an array of ['speed','color']
droneKeys.forEach(function (key) {
	result.push(key, drone[key]);
});
console.log(result);
