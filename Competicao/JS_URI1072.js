var input = require('fs').readFileSync('stdin1072', 'utf8');
var lines = input.split('\n');
//console.log(lines)

var N = parseInt(lines.shift())
//console.log(N)

var dentro = 0
var fora = 0

for (var i = 0; N > i; i++){
    var x = parseInt(lines.shift())
    if(x >= 10 && x <= 20){
        dentro++
    } else {
        fora++
    }
}

console.log(`${dentro} in`)
console.log(`${fora} out`)