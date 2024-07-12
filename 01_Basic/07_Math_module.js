console.log(Math);                           //Object [Math] {}

console.log("abs ",Math.abs(-6));            //6
let d=123.56;
console.log(Math.round(d));   //124
console.log(Math.floor(d));   //123
console.log(Math.ceil(d));     //124

console.log(Math.min(12,3,45));   //3
console.log(Math.max(12,3,45));    //45

//random range 0 to 1
console.log(Math.random())

//avoid 0 and range in 1 to 9
console.log(Math.random()*10 + 1);       

console.log(Math.round(Math.random()*10 +1));

//sqrt
console.log(Math.sqrt(2));
//pow
console.log(Math.pow(3,2));


console.log(Math.exp(12345));