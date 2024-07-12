//hoisting  => we can use var and function before its intialization


//case 1

v=12;    //intialize
console.log(v);    //print
var v;       //declaration


//case 2
// vv=123;
// console.log(vv);
// let vv;               =>error

//case 3
// vvv=23;
// console.log(vvv);      =>error
// const vvv;



//case 4                      =>hoisting
console.log(abc());
function abc(){
    return `Hey i am one`;

}

//case 4             =>this type of function not support hoisting becoz return value stored in one var
// console.log(xyz());
// let xyz=function(){
//     return `hey this is two`;
// }