var input = require("fs").readFileSync("stdin1066","utf8");
var lines = input.split("\n");

var par = 0;
var impar = 0
var positivos = 0;
var negativos = 0

for(var i = 0; i < 6; i++) {
    
    if(parseInt(lines[i]) > 0) {
        positivos ++;
    }
    if(parseInt(lines[i]) < 0) {
        negativos ++;
    }
    if(parseInt(lines[i]) % 2 == 0) {
        par++
    }

    impar = 5 - par
}

console.log(`${par} valor(es) par(es)`)
console.log(`${impar} valor(es) impar(es)`)
console.log(`${positivos} valor(es) positivo(s)`)
console.log(`${negativos} valor(es) negativo(s)`)