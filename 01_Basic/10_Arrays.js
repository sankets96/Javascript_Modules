//collection of multiple items in single varaibles

//declaration
const my=[1,2,4,5];
const heros=["thore","captainamerica"];
const arr = new Array(1,2,4,5,6,8);

//acess
console.log(arr[0]);

//array methods

//push  =>add elementinto last
arr.push(11);

//pop  =>remove element drom last
arr.pop();
console.log(arr);

//unshift   =>add element to first
arr.unshift(34);
console.log(arr);

//shift  =>remove elemet from the first
console.log(arr.shift());

//includes  =>return boolean if el present
console.log(arr.includes(11));

//indexof  =>return index of that element
console.log(arr.indexOf(4));

//join  =>join array and convert ito string
const newa = arr.join();
console.log( typeof newa);

//slice  =>return the small part of array without range includes
//but not effect on original array
console.log("original ",arr);
console.log("slice ",arr.slice(1,4));


//splice  =>return range of part with inlcude range
//directly affect on original array , small part of array removed
console.log("splice ",arr.splice(1,4));
console.log("original ",arr);

//concat
let a =[1,2,3];
let b = [5,6,7, 8];
let n = a.concat(b);

console.log("concat ",n);

//concat using spread opratroe
let ne = [...a,...b];
console.log("spread oprator ",ne);

//flat 
let arrayop = [1,2,3,[4,4,6,7],5,[67,7,[,7,8,9,5,4],5]];
let another =  arrayop.flat(Infinity);
console.log(another);


//isarray  =>return true or false if array is exist
console.log(Array.isArray(another));

//from =>convert string to char array
let s = "sanket";
console.log(Array.from(s));

let obj = {name:'ss'};
console.log(Array.from(obj));   //[]

let score=123;
console.log(Array.from(score));  //[]

let score2 =234;
let score3 = 567;
console.log(Array.of(score,score2,score3));   //convertinto array




