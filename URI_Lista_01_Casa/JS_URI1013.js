var input = require("fs").readFileSync("stdin1013","utf8");
var lines = input.split("\n");

var line1 = lines[0].split(" ");

var a = parseFloat(line1.shift());
var b = parseFloat(line1.shift());
var c = parseFloat(line1.shift());

function maior(x, y) {
    return ((x + y) + Math.abs(x-y)) / 2
}

M = maior(c, maior(a,b))

console.log(`${M} eh o maior`)