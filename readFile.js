const fs = require("fs");
const path = require("path");

module.exports = (filePath) =>
  new Promise((resolve) =>
    fs.readFile(path.resolve(filePath), "utf-8", (err, data) => resolve(data))
  );
