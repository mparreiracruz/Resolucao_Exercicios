var input = require("fs").readFileSync("stdin1042","utf8");
var lines = input.split("\n");

var num = lines[0].split(" ")

var x = parseInt(num.shift())
var y = parseInt(num.shift())
var z = parseInt(num.shift())

if(x >= y) {
    if (y >= z){
        //console.log(x, y, z)
        console.log(z)
        console.log(y)
        console.log(x)
    } else if(z > x) {
        //console.log(z, x, y)
        console.log(y)
        console.log(x)
        console.log(z)
    } else {
        //console.log(x, z, y)
        console.log(y)
        console.log(z)
        console.log(x)
    }
} else {
    if (x >= z){
        //console.log(y, x, z)
        console.log(z)
        console.log(x)
        console.log(y)
    } else if(z > y) {
        //console.log(z, y, x)
        console.log(x)
        console.log(y)
        console.log(z)
    } else {
        //console.log(y, z, x)
        console.log(x)
        console.log(z)
        console.log(y)
    }
} 

console.log("")
console.log(x)
console.log(y)
console.log(z)

