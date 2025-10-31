const isLeapYear = (year) => {
  return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0
    ? `${year} is a leap year.`
    : `${year} is not a leap year`;
};

// outputs from 2000-2025
for (let i = 2000; i <= 2025; i++) {
  console.log(isLeapYear(i));
}
