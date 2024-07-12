//filter can return range of array
//it can accpet callback function

let arr=[11,10,2,190,23];
let y = arr.filter((num)=> num>13);
console.log(y);

let z = arr.filter((num)=>{
    return num>13;
})
console.log(z);



const person=[
    {name:"ABC",age:12},
    {name:"PQR",age:12},
    {name:"XYZ",age:8},
    {name:"NML",age:3}
];

let x = person.filter((items)=>{
    return items.age>10;
})
console.log("Age is > 10 : ",x);


// const number = [1,2,3,4,5,6,7,8,9];
// let q = number.filter((items)=>{return items+10});
// console.log("each ",q);