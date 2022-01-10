const fs = require("fs").promises;
const path = require("path");

module.exports = (filePath) => fs.readFile(path.resolve(filePath), "utf-8");
