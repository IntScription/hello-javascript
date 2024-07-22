function removeFromArray(arr, ...args) {
  const newArray = [];
  // using forEach to go through the array
  arr.forEach((item) => {
    if (!args.includes(item)) {
      newArray.push(item);
    }
  });
  return newArray;
}
console.log(removeFromArray([1, 2, 3, 4, 5], 4));

// This method modifies the array
/*
 const arr = [1, 2, 3, 4, 5, 2, 3];
 const num = 2;

 for(let i = arr.length - 1; i >=0; i--){
   if(arr[i] === num){
   arr.splice(i, 1);
   }
 }
 console.log(arr); // returns [1, 3, 4, 5, 3]
*/

// This method creates a new array
/*
 const arr = [1, 2, 3, 4, 5, 2, 3];
 const num = 2;
 const new = arr.filter(n => n !== num);
 console.log(new); // returns [1, 3, 4, 5, 3] 
*/
