const convertHTML = (str) => {
  const html = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&apos;'
  };

  let result = '';
  for (let i = 0; i < str.length; i++) {
    const char = str[i];

    if (html[char]) {
      result += html[char];
    } else {
      result += char;
    }
  }

  return result;
};

console.log(convertHTML('Dolce & Gabbana'));
