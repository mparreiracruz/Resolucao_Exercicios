var input = require("fs").readFileSync("stdin1019","utf8")
var lines = input.split("\n")

var N = parseInt(lines.shift())

var divisorHora = Math.floor(N / 3600)
var divisorMinuto = Math.floor((N % 3600) / 60)
var divisorSegundo = Math.floor((N % 3600) % 60)

console.log(divisorHora + ":" + divisorMinuto + ":" + divisorSegundo)