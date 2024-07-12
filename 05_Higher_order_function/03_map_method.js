//map method used to perform opration on array

const number = [1,2,3,4,5,6,7,8,9];

let x = number.map((items)=>{return items*10});
console.log(x);




//chaining

let y = number.map((items)=>{return items*10}).filter((it)=>{return it > 30});
console.log(y);

