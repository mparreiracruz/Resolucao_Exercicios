var input = require("fs").readFileSync("stdin1064","utf8");
var lines = input.split("\n");

var soma = 0;
var positivos = 0;

for(var i = 0; i < 6; i++) {
    
    if(lines[i] > 0) {
        positivos ++;
        soma += parseFloat(lines[i])
    }
}

let media = soma/positivos

console.log(`${positivos} valores positivos`)
console.log(`${media.toFixed(1)}`)