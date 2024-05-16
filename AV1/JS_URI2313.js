var input = require('fs').readFileSync('stdin2313', 'utf8');
var lines = input.split('\n');

var lados = lines[0].split(" ")

var A = parseInt(lados.shift())
var B = parseInt(lados.shift())
var C = parseInt(lados.shift())

var tipo = "Invalido"

if(A<B+C && B<A+C && C<B+A){
    
    //TIPO
    if(A==B && B==C){
        tipo = 'Valido-Equilatero'
    } else if(A!=B && A!=C && B!=C){
        tipo = 'Valido-Escaleno'
    } else {
        tipo = 'Valido-Isoceles'
    }
    console.log(tipo)
    
    //RETANGULO
    if(A**2==(B**2+C**2) || B**2==(A**2+C**2) || C**2==(B**2+A**2)){
        console.log('Retangulo: S')
    } else {
        console.log('Retangulo: N')
    }
    
} else {
    console.log(tipo)
}