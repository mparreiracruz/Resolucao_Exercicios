var input = require("fs").readFileSync("stdin1036","utf8");
var lines = input.split("\n");

var coef = lines[0].split(" ")
var A = parseFloat(coef.shift())
var B = parseFloat(coef.shift())
var C = parseFloat(coef.shift())

var D = B*B - 4*A*C

if(D < 0 || A == 0){
    console.log("Impossivel calcular")
} else {
    let R1 = (-B + Math.sqrt(D)) / (2*A)
    let R2 = (-B - Math.sqrt(D)) / (2*A)
    console.log(`R1 = ${R1.toFixed(5)}`)
    console.log(`R2 = ${R2.toFixed(5)}`)
}



//console.log(`${A}, ${B}, ${C} `)