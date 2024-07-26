let countEl = document.getElementById('count-el');
let count = 0;

const increment = () => {
  count++;
  countEl.innerText = count;
};

const save = () => {
  console.log(count);
};
