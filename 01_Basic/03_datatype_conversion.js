let a=12;
console.log(typeof a);    

let b=Number(12);
console.log(typeof b);

let c="123abc";
console.log(typeof c);

let d= Number(c);
console.log(d);   //NAN print  =>not an number
console.log(typeof d);


let e = Number(undefined);
console.log(e);         //not an number NAN
console.log(" e "+typeof e);



//conversion to number
//"222" =>222
//"22abc"  =>NAN
//true =>1
//false=>0
//undefined =>NAN



//bollean conversion of number
let f = Boolean(1234);
console.log(f);    //true

let g = Boolean(0);
console.log(g);      //false


//bollean conversion of string
let h = Boolean("");
console.log(h);    //false


let i = Boolean("abc");
console.log(i);      //true


//number =>true
//0  =>false
//""  =>false
//"abc"  =>true


//string conversion of number

//number to string
let j = String(123);
console.log(j);
console.log(typeof j);

//null to string
let k=String(null);
console.log(k);           //null

//undefined to string

let l=String(undefined);
console.log(l);               //undefined

//123 => "123"
//null  =>null
//undefined =>undefined
