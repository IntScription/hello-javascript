const j = 10;
function cool() {
  const i = 20;
  console.log(i);
}
function sup() {
  const k = 30;
  console.log(k);
}
function tool() {
  console.log(j);
  cool();
  sup();

  const i = j + 30;
  console.log(i);
  return i; // return if you need this value elsewhere
}
function seal() {
  const i = tool();
  const k = j + 40;
  console.log(k);
  return { i, k };
}
const { i, k } = seal();

console.log(
  '\n the value of i = ' +
    i +
    '\n the value of j = ' +
    j +
    '\n the value of k = ' +
    k
);
