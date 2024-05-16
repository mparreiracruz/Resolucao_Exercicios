var input = require("fs").readFileSync("stdin1017","utf8");
var lines = input.split("\n");

var tempoGasto = parseInt(lines.shift())
var velocidadeMedia = parseInt(lines.shift())

var distanciaPercorrida = (tempoGasto * velocidadeMedia) / 12

console.log(distanciaPercorrida.toFixed(3));