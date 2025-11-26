/*
Rules of the "Rock, Paper, Scissors" game are:

- Rock beats Scissors,
- Scissors beat Paper,
- Paper beats Rock,
- Two identical moves are a draw.
Let's play! You will be given valid moves of two Rock, Paper, Scissors players, and have to return which player won: "Player 1 won!" for player 1, and "Player 2 won!" for player 2. In case of a draw return Draw!.

Examples:
"scissors",     "paper"     --> "Player 1 won!"
"scissors",     "rock"      --> "Player 2 won!"
"paper",        "paper"     --> "Draw!"
*/

const rps = (p1, p2) => {
  const rules = {
    rock: 'scissors',
    paper: 'rock',
    scissors: 'paper'
  };

  if (p1 === p2) return 'Draw!';
  return rules[p1] === p2 ? 'Player 1 won!' : 'Player 2 won!';
};

console.log(rps('scissors', 'paper'));
console.log(rps('rock', 'paper'));
