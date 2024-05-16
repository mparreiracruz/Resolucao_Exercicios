var input = require("fs").readFileSync("stdin1020","utf8")
var lines = input.split("\n")

var entrada =parseInt(lines.shift());//vamos trabalhar com o padrão dias, desta forma:

    var anos = parseInt(entrada/ 365);
    var meses = parseInt((entrada%365)/30);
    var dias = parseInt((entrada % 365) % 30);

console.log(`${anos} ano(s)`);
console.log(`${meses} mes(es)`);
console.log(`${dias} dia(s)`);
