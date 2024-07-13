//call
//method allows an obj to use method of another function
//call method call a function with a given this value as arguments 

//example 1

function sayhellow(){
    return `Hellow `+this.name;
}

let obj1 = {name:'sanket'};
console.log(sayhellow.call(obj1));

//example 2
let person={
age:23,
getage:function(){
    return this.age;
}

}

let person2 = {age:12};
console.log(person.getage.call(person2));


//apply
//this method same as call method only dif is that it can take argument in array 

function say(mess){
    return this.name+" "+mess;
}

let per = {name:'jonson'}
console.log(say.apply(per,["sometrhing"]));


//bind
//return new function where the value of this keyword will be bound to owner object,which provides parameter

let bike={
    display:function(no,regname){
        return this.name+" "+no+" "+regname;
    }
}
let p = {name:'sanket suryabvanshi'};
let res = bike.display.bind(p,"XYZ1234",'suzuki');  //[Function: bound display]
console.log(res());

//same example with call
let res2 = bike.display.call(p,"XYZ1234",'suzuki');  //[Function: bound display]
console.log(res2);

//key diffrence in 3 methods
//call  =>invoke function immidiate with specifies rhis value as a argument provides individual
//apply  =>invoke function immidiate with specifies rhis value as a argument provides array
//bind   =>creates new function with specifies this value and intial arguments but dosent invoke function immidiate.