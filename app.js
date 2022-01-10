// npm - global commands comes with node
// npm -v, check version

//  local dependency - used only in a particular project
// npm i <packageName>

// global dependency - use it in any project
// npm install -g <packageName>
// sudo npm install -g <packageName> (mac command)

// package.json - stores important file information, such as project and packages
// can make it using
// manual approach (create it in the root folder, then create it's properties)
// npm init, a step by step CLI command that guides you
// npm init -y, the same thing as above by loads it in default configuration

const _ = require("lodash");

const items = [1, [2, [3, [4]]]];
const newItems = _.flattenDeep(items);
console.log(newItems);
