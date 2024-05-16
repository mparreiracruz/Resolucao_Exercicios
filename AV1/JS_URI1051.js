var input = require('fs').readFileSync('stdin1051', 'utf8');
var lines = input.split('\n');

var salario = parseFloat(lines.shift())
var imposto = 0.0

//console.log(`${salario.toFixed(2)}`)


if(salario > 2000.00) {
    
    if(salario > 2000.00 && salario <= 3000.00){
        imposto = (salario - 2000) * 0.08
    } else if(salario > 3000.00 && salario <= 4500.00){
        imposto = (salario - 3000) * 0.18 + 80.00
    } else if(salario > 4500) {
        imposto = (salario - 4500) * 0.28 + 80.00 + 270.00
    }

    console.log(`R$ ${imposto.toFixed(2)}`)
    
} else {
    console.log('Isento')
}

