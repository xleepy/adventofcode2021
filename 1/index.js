const readFile = require("../readFile");

readFile("./input.txt").then((data) => {
  const numbers = data.split("\n").map((value) => Number(value.trim()));

  for (const number of numbers) {
    for (const num of numbers) {
      const result = number + num;
      if (result == 2020) {
        console.log("found", number * num);
      }
    }
  }
});
