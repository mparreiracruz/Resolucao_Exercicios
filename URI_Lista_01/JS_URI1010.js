var input = require("fs").readFileSync("stdin","utf8");
var lines = input.split("\n");

var line1       = lines.shift();
var line2       = lines.shift();

var Produto01   = line1.split(" ");
var Prod01      = parseInt(Produto01.shift());
var Quant01     = parseInt(Produto01.shift());
var Valor01     = parseFloat(Produto01.shift());

var Produto02   = line2.split(" ");
var Prod02      = parseInt(Produto02.shift());
var Quant02     = parseInt(Produto02.shift());
var Valor02     = parseFloat(Produto02.shift());

var total = Quant01 * Valor01 + Quant02 * Valor02;

console.log(`VALOR A PAGAR: R$ ${total.toFixed(2)}`)

//console.log(input);

//console.log(lines);

//console.log(line1);

//console.log(line2);