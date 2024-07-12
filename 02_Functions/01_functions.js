//function is part of code we can use repeated manner when we required


//basic structure
function add(n1,n2){
    return n1+n2;
}

console.log(add(2,2));         //4
console.log(add(2,"2"));        //22
console.log(add(2,null));        //2
console.log(add(2,undefined));  //nan
console.log(add(2,true));       //3

console.log(add());      //nan


//rest oprator =>packing of data
function func(n1,n2,...n){
    console.log(n1," ",n2," ",...n);
}

func(1,2,3,4,5,6,7,8,9,10);

//pass obj in func

function objectof(obj){
    console.log(obj.name," ",obj.age);
}

objectof({
    name:'sanket suryavanshi',
    age:23
})
