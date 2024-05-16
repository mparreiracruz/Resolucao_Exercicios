var input = require("fs").readFileSync("stdin1016","utf8");
var lines = input.split("\n");

var km= parseInt(lines[0]);  

    var distancia= km*2;
    console.log(`${distancia} minutos`); 
