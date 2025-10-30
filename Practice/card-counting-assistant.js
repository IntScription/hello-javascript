let count = 0;
const cc = (card) => {
  switch (card) {
    case 2:
    case 3:
    case 4:
    case 5:
    case 6:
      count++;
      break;

    case 7:
    case 8:
    case 9:
      break;

    case 10:
    case 'J':
    case 'Q':
    case 'K':
    case 'A':
      count--;
      break;
  }
  return count > 0 ? `${count} Bet` : `${count} Hold`;
};

// logs all cc(2) to cc(10)
for (let i = 2; i <= 10; i++) {
  console.log(cc(i));
}
