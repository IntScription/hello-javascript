let age = prompt('How old are you ?');
if (age != null) {
  age = Number(age);
  if (!isNaN(age)) {
    console.log('You are ' + age + ' years old.');
  } else {
    console.log('Please enter a valid number.');
  }
} else {
  console.log('User cancelled the prompt.');
}

// NOTE: promt() is a browser function.
