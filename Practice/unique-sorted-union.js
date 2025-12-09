const uniteUnique = (...args) => {
  let result = [];

  for (const arg of args) {
    for (let i = 0; i < arg.length; i++) {
      if (!result.includes(arg[i])) result.push(arg[i]);
    }
    /*
      instead of the above for loop we can use while loop
      let i = 0;
      while(i < arg.length){
        if(result.includes(arg[i])){ i++}
        else{
          result.push(arg[i]);
          i++;
        }
      }
    */
  }
  return result;
};

console.log(uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]));

/*
Modern way
const uniteUnique = (...args) => {
  [...new Set(args.flat())];
}
*/
