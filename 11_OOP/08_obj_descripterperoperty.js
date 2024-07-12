

const obj = {
    name:"ABC",
    price:250,
    isAvaliaible:true,

    add:function(){
        console.log(`added to fav list`);
    }
}

console.log(Object.getOwnPropertyDescriptor(obj,"name"));  //{ value: 'ABC', writable: true, enumerable: true, configurable: true }

Object.defineProperty(obj,"name",{
    writable:false,
    enumerable:false                   //for iteration
})

console.log(Object.getOwnPropertyDescriptor(obj,"name"));


for (let [key,value] of Object.entries(obj)) {
    console.log(`[${key}, ${value}]`); 
}
//u can see name propertie are not iterable 

//it can iterat function also
//for preveting

console.log("preveting function irtation*******");
for (let [key,value] of Object.entries(obj)) {
    if(typeof value !='function'){
        console.log(`[${key}, ${value}]`);
    }
     
}

//can u change Math.PI value     =>imp

console.log(Math.PI);

Math.PI=5;
console.log(Math.PI);

//it is not override

console.log(Object.getOwnPropertyDescriptor(Math,"PI"));
/*
{
  value: 3.141592653589793,
  writable: false,
  enumerable: false,
  configurable: false
}

*/

//js not allowed directly redefine peroperties 
//hence u can craete new object same as Math
const Mymath = Object.create(Math);

//redefines properties
Object.defineProperty(Mymath,'PI',{
    value: 3.12,
    writable: true,
  enumerable: true,
  configurable: true
});

//printing the values
console.log(Mymath.PI);