/***
 * Write an algorithm such that if an element in an NXN matrix is 0(ZERO), its entire row
 * and column are set to 0(ZERO)
 *
 */
function printMatrix(matrix) {}

function zeroMatrix(matrix) {}

/*** TEST */
var testMatrix = [
  [1, 1, 1, 1],
  [1, 1, 1, 1],
  [1, 0, 1, 1],
  [1, 1, 1, 1],
  [1, 1, 1, 1],
  [1, 1, 1, 1],
];

console.log("before");
printMatrix(testMatrix);

zeroMatrix(testMatrix);

console.log("after");
printMatrix(testMatrix);

// function should mutate the matrix to the following:
// [
//   [1, 0, 1, 1],
//   [1, 0, 1, 1],
//   [0, 0, 0, 0],
//   [1, 0, 1, 1],
//   [1, 0, 1, 1],
//   [1, 0, 1, 1]
// ]
