// 입력 및 변수 선언
const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split(" ");

let a = Number(input[0]);
let b = Number(input[1]);

let c;
let d = a+b;
let e = a-b;
c = Number(d/e);
console.log(c.toFixed(2));