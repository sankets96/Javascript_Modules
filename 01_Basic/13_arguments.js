//it converts multiple arg of function into object
//we can print using loop

function add(){
    let sum=0;
    for(let i in arguments){
        sum+=arguments[i];
    }
    // return sum;
    console.log(sum);
}

add(1,2,3,4,5);
//convert array to obj using spread 
let arr=[1,2,3,4,5];
let b = {...arr};          //{ '0': 1, '1': 2, '2': 3, '3': 4, '4': 5 }
console.log(b);

//passing array with spread
function func(...arr){
    console.log(...arr);
}

func(...arr)



let ob = {
    name:"sanket",
    age:12
}

console.log({...ob,name:"xyz"});   //updated

console.log({name:"xyz",...ob});   //not updated