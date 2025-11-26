const describeAge = (age) => {
  let a = "You're a(n)";
  return age <= 12
    ? `${a} kid`
    : age >= 13 && age <= 17
      ? `${a} teenager`
      : age >= 18 && age <= 64
        ? `${a} adult`
        : `${a} elderly`;
};
console.log(describeAge(12));
console.log(describeAge(20));
console.log(describeAge(15));
