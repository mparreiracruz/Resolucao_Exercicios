var input = require("fs").readFileSync("stdin","utf8");
var lines = input.split("\n");

//console.log(input);
//console.log(lines);

var Nome        = lines.shift();
var SalFixo     = parseFloat(lines.shift());
var TotalVendas = parseFloat(lines.shift());

var Salario     = SalFixo + 0.15 * TotalVendas;

//console.log('--------------------------------------');
//console.log(input);
//console.log(lines);

console.log(`TOTAL = R$ ${Salario.toFixed(2)}`)