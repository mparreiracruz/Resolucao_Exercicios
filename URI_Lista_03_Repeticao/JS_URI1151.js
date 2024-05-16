var input = require("fs").readFileSync("stdin1151","utf8");
var lines = input.split("\n");

var n = parseInt(lines.shift())

var x = 1
var y = 1
var saida = "0"

for(let j = 1; j < n; j++){
    //console.log(x)
    saida += " " + x
    y = x + y
    x = y - x
}

console.log(saida)