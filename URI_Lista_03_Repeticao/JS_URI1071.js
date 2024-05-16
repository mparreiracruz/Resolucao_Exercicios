var input = require("fs").readFileSync("stdin1071","utf8");
var lines = input.split("\n");

var x = parseInt(lines.shift())
var y = parseInt(lines.shift())
var i = 0;
var soma = 0;

if (x > y) {
    i = x
    x = y
    y = i
} 

for(i = x+1; i < y; i++) {
    //console.log(i, soma)
    if(i%2!=0){
        soma = soma + i;
    }
}

console.log(soma)