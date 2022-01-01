const readFile = require("../readFile");

readFile("./testInput.txt").then((data) => {
  const countMap = {};
  const lines = data.split("\n").map((value) => value.split("").map(Number));

  const binaryLength = lines[0].length;

  for (const line of lines) {
    console.log(line);
    for (let i = 0; i < binaryLength; i++) {
      console.log("value", line[i]);
      if (countMap[i] != undefined) {
        countMap[i] += line[i];
      } else {
        countMap[i] = 0;
      }
    }
  }
  console.log(countMap);
});
