var input = require("fs").readFileSync("stdin1045","utf8");
var lines = input.split("\n");

var num = lines[0].split(" ")

var x = parseFloat(num.shift())
var y = parseFloat(num.shift())
var z = parseFloat(num.shift())

var A = x;
var B = y;
var C = z;

if(x >= y) {
    if (y >= z){
        //console.log(x, y, z)
        A=x; B=y; C=z;
    } else if(z > x) {
        //console.log(z, x, y)
        A=z; B=x; C=y;
    } else {
       // console.log(x, z, y)
        A=x; B=z; C=y;
    }
} else {
    if (x >= z){
        //console.log(y, x, z)
        A=y; B=x; C=z;
    } else if(z > y) {
        //console.log(z, y, x)
        A=z; B=y; C=x;
    } else {
       //console.log(y, z, x)
        A=y; B=z; C=x;
    }
} 

if(A >= (B+C)) {
    console.log("NAO FORMA TRIANGULO")
} else {
    if((A*A) == (B*B + C*C)) {
        console.log("TRIANGULO RETANGULO")
    } else if((A*A) > (B*B + C*C)) {
        console.log("TRIANGULO OBTUSANGULO")
    } else {
        console.log("TRIANGULO ACUTANGULO")
    }

    if(A==B && B==C) {
        console.log("TRIANGULO EQUILATERO")
    } else if (A==B || A==C || C==B ) {
        console.log("TRIANGULO ISOSCELES")
    }
}