var input = require("fs").readFileSync("stdin","utf8");
var lines = input.split("\n");

var P = 3.14159;
var R = parseFloat(lines.shift());

var A = P * R * R;

console.log(`A=${A.toFixed(4)}`);