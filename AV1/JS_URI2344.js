var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let nota = parseInt(lines.shift());
let conceito = 'E'

//console.log(nota)

if(nota===0){
    conceito = 'E'
} else if(nota>= 1 && nota<=35){
    conceito = 'D'
} else if(nota <= 60){
    conceito = 'C'
} else if(nota <= 85){
    conceito = 'B'
} else {
    conceito = 'A'
}

console.log(conceito)