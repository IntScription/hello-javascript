const getAverage = (average) => {
  const arr = average.slice();
  return arr.reduce((a, b) => a + b, 0) / arr.length;
};

const getGrade = (score) => {
  return score === 100
    ? 'A+'
    : score >= 90
      ? 'A'
      : score >= 80
        ? 'B'
        : score >= 70
          ? 'C'
          : score >= 60
            ? 'D'
            : 'F';
};

const hasPassingGrade = (grade) => {
  return getGrade(grade) !== 'F';
};

const studentMsg = (classAvg, studentScore) => {
  classAvg = getAverage(classAvg);

  const status = hasPassingGrade(studentScore)
    ? 'You passed the course.'
    : 'You failed the course.';

  return `Class average: ${classAvg}. Your grade: ${getGrade(studentScore)}. ${status}`;
};

console.log(studentMsg([92, 88, 12, 77, 57, 100, 67, 38, 97, 89], 37));
console.log(studentMsg([56, 23, 89, 42, 75, 11, 68, 34, 91, 19], 100));
console.log(studentMsg([15, 25, 35, 45, 55, 60, 70, 60], 75));
