const readFile = require("../readFile");
const depthActions = ["up", "down"];
const positionActions = ["forward"];

readFile("./input.txt").then((data) => {
  const parsedData = data.split("\n").map((val) => {
    const [direction, increase] = val.split(" ");
    return [direction, Number(increase)];
  });

  const depth = parsedData.filter(([direction]) =>
    depthActions.includes(direction)
  );
  const positions = parsedData.filter(([direction]) =>
    positionActions.includes(direction)
  );

  const positionResult = positions.reduce((acc, [, value]) => acc + value, 0);

  const result = depth.reduce((acc, [direction, value]) => {
    switch (direction) {
      case "down":
        return acc + value;
      case "up":
        return acc - value;
      default:
        return acc;
    }
  }, 0);

  console.log(positionResult * result);
});
