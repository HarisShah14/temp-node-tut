const { readFileSync, writeFileSync } = require("fs");
console.log("start");
const first = readFileSync("./content/first.txt", "utf-8");
const second = readFileSync("./content/second.txt", "utf-8");

console.log(first, second);

// This will overwrite the file
writeFileSync(
  "./content/result-sync.txt",
  `Here is the result: ${first} , ${second}`
);

// This will append to the file
writeFileSync(
  "./content/result-sync.txt",
  ` Here is the second result: ${first} , ${second}`,
  { flag: "a" }
);
console.log("done with this task");
console.log("Starting the next one");
