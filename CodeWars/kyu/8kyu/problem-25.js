/*
Create a class Ghost
Ghost objects are instantiated without any arguments.
Ghost objects are given a random color attribute of "white" or "yellow" or "purple" or "red" when instantiated

ghost = new Ghost();
ghost.color //=> "white" or "yellow" or "purple" or "red"
*/

class Ghost {
  constructor() {
    const colors = ['white', 'yellow', 'red', 'purple'];
    const randomIndex = Math.floor(Math.random() * colors.length);
    this.color = colors[randomIndex];
  }
}

let ghost1 = new Ghost();
let ghost2 = new Ghost();

console.log(ghost1.color);
console.log(ghost2.color);
