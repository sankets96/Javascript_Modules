
let a =10?? undefined;
console.log(a);      //10

let b = undefined?? null
console.log(b);    //null

let c= 5??20??10;
console.log(c);      //5

let d=100??20??1;    //100
console.log(d);

let e = undefined??undefined;
console.log(e);         //undefined

let f =  null??undefined;
console.log(f);                 //undefined