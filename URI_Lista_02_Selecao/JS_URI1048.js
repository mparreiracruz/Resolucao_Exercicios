var input = require("fs").readFileSync("stdin1048","utf8");
var lines = input.split("\n");

var num = lines[0].split(" ")

var salario = parseFloat(num.shift())
var taxa = 1.0


if(salario <= 400.00) {
    taxa = 0.15;
} else if(salario > 400.00 && salario <= 800.00) {
    taxa = 0.12
} else if(salario > 800.00 && salario <= 1200.00) {
    taxa = 0.10
} else if(salario > 1200.00 && salario <= 2000.00) {
    taxa = 0.07
} else if(salario > 2000.00) {
    taxa = 0.04
}

let reajuste = salario * taxa
let novosalario = salario + reajuste

//console.log(salario)
//console.log(taxa)
console.log(`Novo salario: ${novosalario.toFixed(2)}`)
console.log(`Reajuste ganho: ${reajuste.toFixed(2)}`)
console.log(`Em percentual: ${(100*taxa).toFixed(0)} %`)

