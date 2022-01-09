const readFile = require("../readFile");

const rotateMatrix = (matrix) => {
  const result = [];

  for (const rowIdx in matrix) {
    const line = matrix[rowIdx];
    for (const valueIdx in matrix[rowIdx]) {
      if (!result[valueIdx]) {
        result[valueIdx] = [];
      }
      result[valueIdx][rowIdx] = line[valueIdx];
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
      const parsedKey = Number(key);
      const value = countsMap[parsedKey];
      if (value == mostCommon) {
        gammaRate.push(parsedKey);
      } else {
        epsilonRate.push(parsedKey);
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
