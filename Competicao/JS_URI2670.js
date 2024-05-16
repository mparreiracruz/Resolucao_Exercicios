var input = require('fs').readFileSync('stdin2670', 'utf8');
var lines = input.split('\n');

var A1 = parseInt(lines.shift());
var A2 = parseInt(lines.shift());
var A3 = parseInt(lines.shift());

var P1 =            (A2 * 2) + (A3 * 4);
var P2 = (A1 * 2) +            (A3 * 2);
var P3 = (A1 * 4) + (A2 * 2);


if(P1 < P2){
    
    if(P1 < P3){
        console.log(P1)
    } else {
        console.log(P3)
    }  
    
} else {

    if(P2 < P3){
        console.log(P2)
    } else {
        console.log(P3)
    }  

}