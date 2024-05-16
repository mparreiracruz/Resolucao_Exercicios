var input = require('fs').readFileSync('stdin1049', 'utf8');
var lines = input.split('\n');

//console.log(lines)

var x1= lines.shift().replace('\r','')
var x2= lines.shift().replace('\r','')
var x3= lines.shift().replace('\r','')

//console.log(`x1 = ${x1} - x2 = ${x2} - x3 = ${x3}`)

if (x1 == "vertebrado") {
    if(x2 == "ave"){
        if (x3 == "carnivoro"){
            console.log("aguia")
        } else {
            console.log("pomba")
        }
    } else if (x2 == "mamifero"){
        if (x3 == "onivoro") {
            console.log("homem")
        } else {
            console.log("vaca")
        }
    }
} else if (x1 == "invertebrado"){
    if (x2 == "inseto") {
        if (x3 == "hematofago"){
            console.log("pulga")
        } else {
            console.log("lagarta")
        }
    } else if (x2 == "anelideo") {
        if (x3 == "hematofago") {
            console.log("sanguessuga")
        } else {
            console.log("minhoca")
        }
    }
    
}