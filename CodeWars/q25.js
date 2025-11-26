/*
This series of katas will introduce you to basics of doing geometry with computers.
Point objects have attributes x and y.
Write a function calculating distance between Point a and Point b.
Input coordinates fit in range

−50⩽x,y⩽50. Tests compare expected result and actual answer with tolerance of 1e-6.
*/

const points = (a, b) => {
  const dx = b.x - a.x;
  const dy = b.y - a.y;
  return Math.sqrt(dx ** 2 + dy ** 2);
};

const p1 = { x: 3, y: 4 };
const p2 = { x: 2, y: 5 };

console.log(points(p1, p2));
