// Globals - No windows
// __dirname - > path to the directory
// __filename - > the file name
// require - > the function to use modules
// moduler - > info about the current module(file)
// process -> info about the env where the program is being executed

console.log(__dirname);
console.log(__filename);

setInterval(() => {
  console.log("Test");
}, 1000);
