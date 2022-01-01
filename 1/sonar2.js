const readFile = require("../readFile");

readFile("./sonar.txt").then((data) => {
  let previousSum = 0;
  let numberOfSums = 0;
  const numbers = data.split("\n").map((value) => Number(value.trim()));
  for (let i = 2; i <= numbers.length - 1; i++) {
    const window = numbers[i - 2] + numbers[i - 1] + numbers[i];
    if (previousSum != 0 && window > previousSum) {
      numberOfSums++;
    }
    previousSum = window;
  }
  console.log(numberOfSums);
});
