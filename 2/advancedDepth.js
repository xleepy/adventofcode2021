const readFile = require("../readFile");

readFile("./input.txt").then((data) => {
  const parsedData = data.split("\n").map((val) => {
    const [direction, increase] = val.split(" ");
    return [direction, Number(increase)];
  });

  const resultMap = {
    depth: 0,
    position: 0,
    aim: 0,
  };

  for (const [direction, value] of parsedData) {
    switch (direction) {
      case "forward":
        resultMap.depth += resultMap.aim * value;
        resultMap.position += value;
        break;
      case "down":
        resultMap.aim += value;
        break;
      case "up":
        resultMap.aim -= value;
        break;
    }
  }

  const [depth, position, aim] = Object.values(resultMap);
  console.log("depth", depth);
  console.log("position", position);
  console.log("aim", aim);
  console.log(depth * position);
});
