const questions = [
  {
    category: 'JavaScript Basics',
    question:
      'Which method is used to add one or more elements to the end of an array?',
    choices: ['push()', 'pop()', 'shift()'],
    answer: 'push()'
  },
  {
    category: 'HTML',
    question: 'What does the <a> tag define in HTML?',
    choices: ['An article', 'An anchor (link)', 'An audio element'],
    answer: 'An anchor (link)'
  },
  {
    category: 'CSS',
    question: 'Which property is used to change the text color of an element?',
    choices: ['font-style', 'text-color', 'color'],
    answer: 'color'
  },
  {
    category: 'Computer Science',
    question: 'What is the time complexity of binary search?',
    choices: ['O(n)', 'O(log n)', 'O(n²)'],
    answer: 'O(log n)'
  },
  {
    category: 'Web Development',
    question: 'Which protocol is used to secure communication over the web?',
    choices: ['HTTP', 'FTP', 'HTTPS'],
    answer: 'HTTPS'
  }
];

const getRandomQuestion = (questions) => {
  const random = Math.floor(Math.random() * questions.length);
  return questions[random];
};

const getRandomComputerChoice = (choices) => {
  const random = Math.floor(Math.random() * choices.length);
  return choices[random];
};

const getResults = (q, cc) => {
  if (cc === q.answer) {
    return `The computer's choice is correct!`;
  } else {
    return `The computer's choice is wrong. The correct answer is: ${q.answer}`;
  }
};

const randomQuestion = getRandomQuestion(questions);
const computerChoice = getRandomComputerChoice(randomQuestion.choices);
console.log('Question:', randomQuestion.question);
console.log("Computer's choice:", computerChoice);
console.log(getResults(randomQuestion, computerChoice));
