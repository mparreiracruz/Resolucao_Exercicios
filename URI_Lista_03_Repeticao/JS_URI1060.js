var input = require("fs").readFileSync("stdin1060","utf8");
var lines = input.split("\n");

var positivos = 0;

for(var i = 0; i < 6; i++) {
    //console.log(`[${i}] - ${lines[i]}`)
    if(lines[i] > 0) {
        positivos ++;
    }
}

console.log(`${positivos} valores positivos`)
