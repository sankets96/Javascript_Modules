//colletion of key and values

//creations
//singletone = >create using constructor
//object literals


//by object literals
const obj ={
    name:'sanket',
    age:12,
    islogging:true,
    "surname":"suryavanshi",
    adress:{
        city:"ich",
        pincode:12345
    }
}

//acessing
console.log(obj.name);

console.log(obj["age"]);
console.log(obj["surname"]);


//symbol    =>new datatype introduce in javascript ES6 module, represent unique values that can be used as identifier or keys in object.

let mys = Symbol("my1");

//use symbol in  object key
obj2 = {
    of:12,
    ["mys"]:"mysymbol1"    //use squarebracket
}

console.log(obj2.mys);

//obj are mutable
//value can ovveride or modified
obj.name="vijay"

//if u want to lock the obj then use freeze method
Object.freeze(obj2);
//->after that not given error but not midified


//function in object
obj.greet = function(){
    return "Hey Guys";
}

console.log(obj.greet);    //[Function (anonymous)]  return the reffrence 
console.log(obj.greet());


//by constructor
const ob = new Object();

//combine 2 obj
let obj1 = {
    'a':1,
    'b':2
}
let obj22 = {
    'c':3,
    'd':4
}

//combine 2 obj
let obj3 = {obj1,obj22};
console.log(obj3);
//assign
let ob4 = Object.assign({},obj1,obj22);   //parameters = >target,source
console.log(ob4);

//spred oprator using
let obj5 = {...obj1,...obj22};
console.log(obj5);

 
console.log(Object.keys(obj5));           //[ 'a', 'b', 'c', 'd' ]
console.log(Object.values(obj5));       //[ 1, 2, 3, 4 ]
console.log(Object.entries(obj5));     //[ [ 'a', 1 ], [ 'b', 2 ], [ 'c', 3 ], [ 'd', 4 ] ]

console.log(obj.hasOwnProperty('a'));    //return boolean