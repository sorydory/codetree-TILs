const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split(" ");

let width = Number(input[0])*Number(input[0]);

console.log(width);

if(width<5){
    console.log("tiny");
}