var input = require('fs').readFileSync('stdin2717', 'utf8');
var lines = input.split('\n');

var N = parseInt(lines.shift())

var line = lines.shift()
var tst = line.split(' ')

var B1 = parseInt(tst.shift())
var B2 = parseInt(tst.shift())

if ((B1 + B2) > N){
    console.log("Deixa para amanha!")
} else{
    console.log('Farei hoje!')
}