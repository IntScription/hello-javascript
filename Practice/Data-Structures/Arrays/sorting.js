const sorter = (text) => {
  return text.sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase()));
};

console.log(sorter(['Algebra', 'history', 'Biology', 'computer']));
