const arr=[12,13,14,15];
arr.forEach((items)=>{
    console.log(items);
})

arr.forEach((items)=>{
    console.log(items*5);
})

//for each method does not return any items
let x= arr.forEach((items)=>{
    console.log(items*5);
})

console.log(x);    //undefined


//for returning the num use filter method

let y = arr.filter((num)=> num>13);
console.log(y);

let z = arr.filter((num)=>{
    return num>13;
})
console.log(z);

