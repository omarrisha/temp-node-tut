const path = require("path");

// console.log(path.sep);
// console.log(path.join());

const filePath = path.join("content", "subfolder", "test.txt");
console.log(filePath);

const base = path.basename(filePath);
console.log(base);

const absolute = path.resolve(__dirname, "contect", "subfolder", "test.txt");
const absolute2 = path.resolve(filePath);
console.log(absolute);
console.log(absolute2);
