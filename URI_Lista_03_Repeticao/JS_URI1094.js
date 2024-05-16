var input = require("fs").readFileSync("stdin1094","utf8");
var lines = input.split("\n");

var N = parseInt(lines.shift())
let soma = 0
let somaC = 0
let somaR = 0
let somaS = 0

for(let i = 0; i < N; i++) {
    var cobaia = lines[i].split(" ")
    //console.log(cobaia)
    var quant = parseInt(cobaia.shift())
    var tipo  = cobaia.shift().replace("\r","")
    //console.log(quant,tipo)

    soma += quant;

    switch(tipo){
        case 'C':
            //console.log("Coelho")
            somaC += quant
            break
        case "R":
            //console.log("Rato")
            somaR += quant
            break
        case "S":
            //console.log("Sapo")
            somaS += quant
            break
        default:
            //console.log("Cobaia não cadastrada")

    }

    
}

console.log(`Total: ${soma} cobaias`)
console.log(`Total de coelhos: ${somaC}`)
console.log(`Total de ratos: ${somaR}`)
console.log(`Total de sapos: ${somaS}`)

console.log(`Percentual de coelhos: ${(100*somaC/soma).toFixed(2)} %`)
console.log(`Percentual de ratos: ${(100*somaR/soma).toFixed(2)} %`)
console.log(`Percentual de sapos: ${(100*somaS/soma).toFixed(2)} %`)