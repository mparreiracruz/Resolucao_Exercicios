var input = require("fs").readFileSync("stdin1079","utf8");
var lines = input.split("\n");

//console.log(input);
//console.log(lines);
//console.log('---------------------------------------');

var N  = parseInt(lines.shift());

for(var i = 0; i < N; i++){
    var lista = lines.shift();
    //console.log(lista);
    var entrada = lista.split(" ");
    var mediaP = (entrada[0]*2 + entrada[1]*3 + entrada[2]*5) / 10;
    console.log(`${mediaP.toFixed(1)}`);
}


//console.log('---------------------------------------');
//console.log(input);
//console.log(lines);
//console.log(N);