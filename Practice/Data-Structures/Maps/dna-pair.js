const pairElement = (str) => {
  return [...str].map((c) => [c, { A: 'T', T: 'A', C: 'G', G: 'C' }[c]]);
};

console.log(pairElement('ATCGA'));
