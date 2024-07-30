function Player(name) {
  this.name = name;
}
const player1 = new Player('John');
const player2 = new Player('James');

// returns true
console.log(Object.getPrototypeOf(player1) === Player.prototype);
console.log(Object.getPrototypeOf(player2) === Player.prototype);
