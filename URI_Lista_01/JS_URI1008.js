var input = require("fs").readFileSync("stdin","utf8");
var lines = input.split("\n");

var NumFunc   = parseInt(lines.shift());
var HorasTrab = parseInt(lines.shift());
var SalHora   = parseFloat(lines.shift());

var Salario   = HorasTrab * SalHora;

console.log(`NUMBER = ${NumFunc}`);
console.log(`SALARY = U$ ${Salario.toFixed(2)}`)