var input = require("fs").readFileSync("stdin1041","utf8");
var lines = input.split("\n");

var notas = lines[0].split(" ")

var x = parseFloat(notas.shift())
var y = parseFloat(notas.shift())


if( x==0 && y==0) {
    console.log("Origem")
} else if (x==0 && y!=0) {
    console.log("Eixo Y")
} else if (x!=0 && y==0) {
    console.log("Eixo X")
} else if (x>0 && y>0) {
    console.log("Q1")
} else if (x>0 && y<0) {
    console.log("Q4")
} else if (x<0 && y>0) {
    console.log("Q2")
} else {
    console.log("Q3")
}   

