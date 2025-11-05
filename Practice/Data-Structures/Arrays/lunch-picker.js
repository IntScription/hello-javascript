let lunches = [];

// adds to the end using push
const addLunchToEnd = (lunches, str) => {
  lunches.push(str);
  console.log(`${str} added to the end of the lunch menu.`);
  return lunches;
};

// add the the start using unshift
const addLunchToStart = (lunches, str) => {
  lunches.unshift(str);
  console.log(`${str} added to the start of the lunch menu.`);
  return lunches;
};

// removes frm the end using pop
const removeLastLunch = (lunches) => {
  if (lunches.length !== 0) {
    const removed = lunches.pop();
    console.log(`${removed} removed from the end of the lunch menu.`);
  } else {
    console.log('No lunches to remove.');
  }
  return lunches;
};

// removes from the start using shift
const removeFirstLunch = (lunches) => {
  if (lunches.length !== 0) {
    const removed = lunches.shift();
    console.log(`${removed} removed from the start of the lunch menu.`);
  } else {
    console.log('No lunches to remove.');
  }
  return lunches;
};

// outputs a random provided the length of the array
const getRandomLunch = (lunches) => {
  if (lunches.length === 0) {
    console.log('No lunches available.');
    return;
  }
  const random = Math.floor(Math.random() * lunches.length);
  const randomLunch = lunches[random];
  console.log(`Randomly selected lunch: ${randomLunch}`);
  return randomLunch;
};

// outputs the entirity
const showLunchMenu = (lunches) => {
  if (lunches.length !== 0) {
    console.log(`Menu items: ${lunches.join(', ')}`);
  } else {
    console.log('The menu is empty.');
  }
};

// Example usage
addLunchToEnd(lunches, 'Pizza');
addLunchToEnd(lunches, 'Tacos');
addLunchToEnd(lunches, 'Burger');
addLunchToStart(lunches, 'Sushi');

removeLastLunch(lunches);
removeFirstLunch(lunches);

getRandomLunch(lunches);
showLunchMenu(lunches);
