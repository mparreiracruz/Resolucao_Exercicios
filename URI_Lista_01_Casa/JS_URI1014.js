var input = require("fs").readFileSync("stdin1014","utf8");
var lines = input.split("\n");

var X = parseInt(lines.shift());
var Y = parseFloat(lines.shift()).toFixed(1);

var Consumo = X / Y;

console.log(`${Consumo.toFixed(3)} km/l`);