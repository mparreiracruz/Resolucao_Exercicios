var input = require("fs").readFileSync("stdin1153","utf8");
var lines = input.split("\n");

var n = parseInt(lines.shift())
var fat = 1

//console.log(n)

for(var i = n; i > 0; i--) {
    //console.log(i,fat)
    fat = fat * i
}

console.log(fat)