/*
Be Concise I - The Ternary Operator
You are given a function that takes a parameter age (which will always be a positive integer) and does the following:

If the age is 12 or lower, it return "You're a(n) kid"
If the age is anything between 13 and 17 (inclusive), it return "You're a(n) teenager"
If the age is anything between 18 and 64 (inclusive), it return "You're a(n) adult"
If the age is 65 or above, it return "You're a(n) elderly"
Your task is to shorten the code as much as possible. Note that submitting the given code will not work because there is a character limit of 137.

I'll give you a few hints:
1. The title itself is a hint - if you're not sure what to do, always research any terminology in this description that you have not heard of!
2. Don't you think the whole "You're a(n) <insert_something_here>" is very repetitive? ;) Perhaps we can shorten it?
3. Write everything in one line, \n and other whitespaces counts.
*/

const describeAge = (age) => {
  let a = "You're a(n) ";
  return age <= 12
    ? `${a}kid`
    : age >= 13 && age <= 17
      ? `${a}teenager`
      : age >= 18 && age <= 64
        ? `${a}adult`
        : `${a}elderly`;
};
console.log(describeAge(12));
console.log(describeAge(20));
console.log(describeAge(15));
