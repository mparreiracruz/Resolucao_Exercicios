var input = require("fs").readFileSync("stdin1044","utf8");
var lines = input.split("\n");

var num = lines[0].split(" ")

var x = parseInt(num.shift())
var y = parseInt(num.shift())


if (x%y == 0 || y%x == 0){
    console.log("Sao Multiplos")
} else {
    console.log("Nao sao Multiplos")
}