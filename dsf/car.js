function diagonalDifference(d, arr) {
  const arr1 = [];
  const arr2 = [];
  for (let i = 0; i < arr.length; i++) {
    if (i < d) arr1.push(arr[i]);
    else arr2.push(arr[i]);
  }
  return [...arr2, ...arr1];
}
// const d = 18;
// const m = 7;
// const s = [2, 5, 1, 3, 4, 4, 3, 5, 1, 1, 2, 1, 4, 1, 3, 3, 4, 2, 1];
const a = 20;
const b = 5;
const c = [
  41, 73, 89, 7, 10, 1, 59, 58, 84, 77, 77, 97, 58, 1, 86, 58, 26, 10, 86, 51,
];
// b.splice(0, 1);
// b.splice(3, 1);
// const res = c.reduce((total, x) => total + (x === 2 ? 2 : 0), 0);
// console.log(
//   c.findIndex((x, index) => {
//     console.log(index);
//     return x < 6 && x > 4;
//   })
// );

console.log(diagonalDifference(10, c));
