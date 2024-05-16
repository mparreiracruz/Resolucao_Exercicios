var input = require("fs").readFileSync("stdin1015","utf8");
var lines = input.split("\n");

let line1 = lines.shift()
let line2 = lines.shift()

    let plano1 = line1.split(' ')
        
        let x1 = parseFloat(plano1.shift())
        let y1 = parseFloat(plano1.shift())

    let plano2 = line2.split(' ')

        let x2 = parseFloat(plano2.shift())
        let y2 = parseFloat(plano2.shift())

const dis =  Math.sqrt((x2-x1)**2 + (y2-y1)**2)   

console.log(dis.toFixed(4)) 
