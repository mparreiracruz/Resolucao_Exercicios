var input = require("fs").readFileSync("stdin1040","utf8");
var lines = input.split("\n");

var notas = lines[0].split(" ")

var N1 = parseFloat(notas.shift())
var N2 = parseFloat(notas.shift())
var N3 = parseFloat(notas.shift())
var N4 = parseFloat(notas.shift())

var media = (2*N1 + 3*N2 + 4*N3 + N4) / 10

console.log(`Media: ${media.toFixed(1)}`)

if(media >= 7.0) {
    console.log("Aluno aprovado.")
} else if(media < 5.0) {
    console.log("Aluno reprovado.")
} else {
    console.log("Aluno em exame.")
    var AVF = parseFloat(lines[1].split(" "))
    console.log(`Nota do exame: ${AVF.toFixed(1)}`)
    var mediaF = (media+AVF) / 2
    if(mediaF >= 5.0) {
        console.log("Aluno aprovado.")
    } else {
        console.log("Aluno reprovado.")
    }
    console.log(`Media final: ${mediaF.toFixed(1)}`)

}

