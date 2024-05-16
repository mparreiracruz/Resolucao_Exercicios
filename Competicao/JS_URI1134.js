var input = require('fs').readFileSync('stdin1134', 'utf8');
var lines = input.split('\n');

var x = 0 
var a = 0
var g = 0
var d = 0

while (x!=4){

    x = parseInt(lines.shift())

    if (x === 1){
        var a = a + 1 
        
    }else if(x === 2){
        var g = g + 1 
           
    }else if(x === 3){
        var d = d + 1 
       
    }
}

console.log('MUITO OBRIGADO')
console.log(`Alcool: ${a}`)
console.log(`Gasolina: ${g}`)
console.log(`Diesel: ${d}`)