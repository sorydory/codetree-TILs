const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split(" ");

let width = Number(input[0])**2;

console.log(width);

if(width<5){
    console.log("tiny");
}