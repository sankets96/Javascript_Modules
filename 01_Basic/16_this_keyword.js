//this   =>current context
const obj = {
    name:'abc',
    price:123,
    login:function(){
        console.log(this);   //inside obj can print current properties all
        return ` ${this.name} Welcome to website `;
    }
    //reffer to current context
    
}

console.log(obj.login);    //[Function: login]
console.log(obj.login());


//name changed      =>context changed
obj.name="XYZ";
console.log(obj.login());

//this
console.log(this);       //{}

//when it print this in browser then it will return window obj (global obj)


//this is not used in function

let x = function func() {
    let n=12;
    console.log(this.n);                //undefined
}
x();

const arr = () =>{
    let m=123;
    console.log(this.m);             //undefined
}

arr();

//hence this not support in arrow  function