/* Swap Values */

const swapValues = (args) => {
  return ([args[0], args[1]] = [args[1], args[0]]);
};

console.log(swapValues([1, 5]));
