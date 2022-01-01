const readFile = require("../readFile");

readFile("./sonar.txt").then((data) => {
  let numberOfIncreases = 0;
  const numbers = data.split("\n").map((value) => Number(value.trim()));
  for (let i = 0; i < numbers.length; i++) {
    const number = numbers[i];
    const nextNumber = numbers[i + 1];
    if (number < nextNumber) {
      numberOfIncreases++;
    }
  }
  console.log(numberOfIncreases);
});
