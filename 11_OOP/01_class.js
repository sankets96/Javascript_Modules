//js is prototypes based language
//it is introduceed in ECMAscript ES6



//class   =>
// object   =>collection of properties and methods

// Abstraction   =>hidding implementaion part from users
// Encapsulation  =>binding data and methods in single unit
// inheritance  =>child class aquire properties from parent class
// ploymorphosiem   =>single unit have many form



//object literal    =>base unit in js
const user={
    name:'sanket',
    age:12,
    login:function(){
        return(`this is obj`);
    }
}
console.log(user);
console.log(user.login());


//class
class user_class{
    constructor(id,name){
        this.id=id;
        this.name=name
    }


    get() {
        return (this.name,this.id);
    }
}

let a= new user_class(1,"sanket");

console.log(a.get());


function User(name,id,salary){
    this.name=name;
    this.id=id;
    this.salary=salary;
    return this;
}

let b = User("ss",1,123);
let c = User("dd",12,12345);
console.log(b);                 //overide the new values


//using new keyword u can create new instance   1Q
let d =new User("ss",1,123);
let e =new User("dd",12,12345);
console.log("new keyword ",d);   //new keyword  User { name: 'ss', id: 1, salary: 123 }
console.log(e.constructor);       //[Function: User]

console.log(typeof d);