var input = require('fs').readFileSync('stdin1144', 'utf8');
var lines = input.split('\n');

var N = parseInt(lines)

for (var i = 1; i <= N; i++){
    console.log(i, i**2, i**3)
    console.log(i, i**2 + 1, i**3 + 1)
}