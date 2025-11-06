const matBuilder = (rows, cols) => {
  return Array(rows)
    .fill()
    .map(() => Array(cols).fill(0));
};

console.log(matBuilder(2, 3)); // matrix with 2 rows and 3 columns, 2x3
