var input = require("fs").readFileSync("stdin1035","utf8");
var lines = input.split("\n");

var entrada = lines[0].split(" ");

//console.log(input);
//console.log(lines);
//console.log(entrada);

var A  = parseInt(entrada.shift());
var B  = parseInt(entrada.shift());
var C  = parseInt(entrada.shift());
var D  = parseInt(entrada.shift());

//console.log(A,B,C,D)

if (B > C && D > A && C+D > A+B && C > 0 && D > 0 && A%2 == 0) {
    console.log(`Valores aceitos`)
} else {
    console.log(`Valores nao aceitos`)
}
