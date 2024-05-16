var input = require("fs").readFileSync("stdin1011","utf8");
var lines = input.split("\n");

const pi = 3.14159;
var R = parseFloat(lines.shift());

var volume = (4.0/3.0) * pi * R * R * R;

console.log(`VOLUME = ${volume.toFixed(3)}`);

