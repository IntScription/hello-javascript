const convertHTML = (str) => {
  const html = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&apos;'
  };

  return [...str].map((c) => html[c] || c).join('');
};

console.log(convertHTML('Dolce & Gabbana'));
