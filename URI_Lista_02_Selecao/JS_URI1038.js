var input = require("fs").readFileSync("stdin1038","utf8");
var lines = input.split("\n");

var entrada = lines[0].split(" ")

var codigo = parseInt(entrada.shift())
var quant  = parseInt(entrada.shift())
var total  = 0.0

//console.log(codigo, quant)

switch(codigo){
    case 1:
        total = 4.00 * quant    
        console.log(`Total: R$ ${total.toFixed(2)}`)
        break
    
    case 2:
        total = 4.50 * quant    
        console.log(`Total: R$ ${total.toFixed(2)}`)  
        break
    
    case 3:
        total = 5.00 * quant    
        console.log(`Total: R$ ${total.toFixed(2)}`)
        break
    
    case 4:
        total = 2.00 * quant    
        console.log(`Total: R$ ${total.toFixed(2)}`)  
        break
    
    case 5:
        total = 1.50 * quant    
        console.log(`Total: R$ ${total.toFixed(2)}`) 
        break
    
    default:
        console.log("Produto nao Cadastrado !")

}