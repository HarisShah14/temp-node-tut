const path = require("path");

// How a path is separeted / for windows and \ for mac
console.log(path.sep);

// get a path to a file
const filePath = path.join("/content", "/subfolder", "text.txt");
console.log(filePath);

// gets the base of a path, basically the end
const base = path.basename(filePath);
console.log(base);

// absolute path to a file
const absolute = path.resolve(__dirname, "content", "subfolder", "text.txt");
console.log(absolute);
