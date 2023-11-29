const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split(" ");

let a = Number(input[0]);
let b = Number(input[1]);

let gob = parseInt(a*b);
let nanum = parseInt(b/a);

if(a>b){
    console.log(`${gob}`);
}else{
    console.log(`${nanum}`);
}