let saveEl = document.getElementById('save-el');
let countEl = document.getElementById('count-el');
let count = 0;

const increment = () => {
  count++;
  countEl.textContent = count;
};

const save = () => {
  let countStr = count + ' - ';
  saveEl.textContent += countStr;
  countEl.textContent = 0;
  count = 0;
};
