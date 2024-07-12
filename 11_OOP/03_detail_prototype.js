let obj = {
    name:"sanket suryavanshi",
    age:12
}
let arr = ["AA","BB","CC","DD"];

let str="sanket";

/*

Array   ->obj
object   ->obj
function  ->obj  ->null
String     ->obj 

*/

//if u want to add one custome function in prototype this function can use all elements 
//directly add to Object.prototype   =>all elements can passs from this obj

Object.prototype.newfunction = function(){
    return `*******This is custome function by prototype*******`;
}

console.log("with object ",obj.newfunction());
console.log("with Array ",arr.newfunction());
console.log("with String ",str.newfunction());



//if i wanted to add one custome function only for the Array then u can use direct Array.prototype

Array.prototype.arrayfunction = function(){
    return `This is only for Array`;
}

console.log("only for array ",arr.arrayfunction());


//if u added function for array then object and string are not acess this function
//console.log(obj.arrayfunction());              =>give error

String.prototype.trueLength=function (){
    console.log(this);                          //[String: 'sanket      ']
    console.log(this.trim().length);             //6
    return 
}

let b = "sanket      ";
b.trueLength();
