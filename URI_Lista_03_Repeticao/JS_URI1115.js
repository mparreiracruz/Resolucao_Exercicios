var input = require("fs").readFileSync("stdin1115","utf8");
var lines = input.split("\n");

var coordenadas = (lines.shift()).split(" ")
var x = parseInt(coordenadas.shift())
var y = parseInt(coordenadas.shift())

//console.log(x, y)

while(x != 0 && y != 0){
    //console.log(quadrante(x,y))
    quadrante(x, y)

    var coordenadas = (lines.shift()).split(" ")
    var x = parseInt(coordenadas.shift())
    var y = parseInt(coordenadas.shift())

    //console.log(x, y)

}

function quadrante(x, y) {
    if(x > 0){
        if (y > 0){
            console.log("primeiro")
        } else {
            console.log("quarto")
        }
    } else {
        if (y > 0){
            console.log("segundo")
        } else {
            console.log("terceiro")
        }
    }
}