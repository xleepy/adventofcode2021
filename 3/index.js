const readFile = require("../readFile");

const binaryToDecimal = (array) => parseInt(array.join(""), 2);

readFile("./input.txt").then((data) => {
  const matrix = data.split("\n").map((value) => value.split("").map(Number));

  const gammaRate = [];
  const epsilonRate = [];

  const columnsCount = matrix[0].length;

  let valuesMap = {};

  for (let column = 0; column < columnsCount; column++) {
    for (const rowIdx in matrix) {
      const value = matrix[rowIdx][column];
      valuesMap[value] = (valuesMap[value] ?? 0) + 1;
    }
    const mostCommon = Math.max(...Object.values(valuesMap));
    Object.keys(valuesMap).forEach((key) => {
      const keyValue = valuesMap[key];
      if (keyValue === mostCommon) {
        gammaRate.push(key);
      } else {
        epsilonRate.push(key);
      }
    });
    valuesMap = {};
  }

  const decimalGamma = binaryToDecimal(gammaRate);
  const decimalEpsilon = binaryToDecimal(epsilonRate);

  console.log(decimalGamma);
  console.log(decimalEpsilon);
  console.log("result", decimalGamma * decimalEpsilon);
});
