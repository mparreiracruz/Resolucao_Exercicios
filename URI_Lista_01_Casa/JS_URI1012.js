var input = require("fs").readFileSync("stdin1012","utf8");
var lines = input.split("\n");

var line1 = lines[0].split(" ");

const pi = 3.14159;
var A = parseFloat(line1.shift());
var B = parseFloat(line1.shift());
var C = parseFloat(line1.shift());

//console.log(`A = ${A}   B = ${B}   C = ${C}`)

//Área do triangulo retangulo de base A e altura C
var triangulo = (A * C) / 2.0

//Área do Circulo de raio C
var circulo = pi * C * C

//Área do trapézio de bases A e B, e altura C
var trapezio = C * (A + B) / 2.0

//Área do quadrado de lado B
var quadrado = B * B

//Área do retângulo de lados A e B
var retangulo = A * B

console.log(`TRIANGULO: ${triangulo.toFixed(3)}`);
console.log(`CIRCULO: ${circulo.toFixed(3)}`);
console.log(`TRAPEZIO: ${trapezio.toFixed(3)}`);
console.log(`QUADRADO: ${quadrado.toFixed(3)}`);
console.log(`RETANGULO: ${retangulo.toFixed(3)}`);
