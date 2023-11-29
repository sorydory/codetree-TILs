const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split(" ");

let n = Number(input[0]);
let width = Number(input[0])**2

console.log(width);

if(n<5){
    console.log("tiny");
}