const readFile = require("../readFile");

const rotateMatrix = (matrix) => {
  const result = [];

  for (const rowIdx in matrix) {
    const row = matrix[rowIdx];
    for (const valueIdx in row) {
      if (!result[valueIdx]) {
        result[valueIdx] = [];
      }
      result[valueIdx][rowIdx] = row[valueIdx];
    }
  }
  return result;
};

const binaryToDecimal = (array) => parseInt(array.join(""), 2);

readFile("./input.txt").then((data) => {
  const lines = data.split("\n").map((value) => value.split("").map(Number));

  const rotatedMatrix = rotateMatrix(lines);

  const gammaRate = [];
  const epsilonRate = [];

  let countsMap = {};

  for (const row of rotatedMatrix) {
    for (const value of row) {
      if (!countsMap[value]) {
        countsMap[value] = 0;
      }
      countsMap[value] += 1;
    }
    const mostCommon = Math.max(...Object.values(countsMap));
    for (const key of Object.keys(countsMap)) {
      const value = countsMap[key];
      if (value == mostCommon) {
        gammaRate.push(key);
      } else {
        epsilonRate.push(key);
      }
    }
    countsMap = {};
  }

  const decimalGamma = binaryToDecimal(gammaRate);
  const decimalEpsilon = binaryToDecimal(epsilonRate);

  console.log(decimalGamma);
  console.log(decimalEpsilon);
  console.log("result", decimalGamma * decimalEpsilon);
});
