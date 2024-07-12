//1 named functions

function add(mess){
    return `this is ${mess} function`;
}

console.log(add('named'));




//2 anonomus function  =>function having no name

let x= function(a,b){
    return a+b;
}

console.log(x(1,2));





//3 callback function  =>function can pass to another function

let xz = function(func){
    func();
    console.log("this is child function");
}

function func(){
    console.log('This is parent function');
}

xz(func);






//4 arrow function  
//=>1)Explicit return type
let ff=(n1,n2)=>{
  return (n2-n1);
}
console.log("this is Explicit return type ",ff(22,12));


//=>2)implicit return type
let imp = (a,b)=>a+b
console.log("implicit return type ",imp(11,11));





//5 self invoked functions
(function(a,b){
    console.log("this is self invoked function and addition is ",a+b);
})(13,12);


