const frankenSplice = (arr1, arr2, index) => {
  const copy = arr2.slice();
  copy.splice(index, 0, ...arr1);
  return copy;
};

console.log(
  frankenSplice(['claw', 'tentacle'], ['head', 'shoulders', 'knees', 'toes'], 2)
);

// ["head", "shoulders", "claw", "tentacle", "knees", "toes"]
