//super keyword    =>can called immidtae parent constructor or instance



class User{
    constructor(name){
        this.name=name;
    }

    getuser(){
        return this.name;
    }
}

class child extends User{

    constructor(name,email,password){
        super(name);

        this.email=email;
        this.password=password;

    }

    course(){
        return `this course created by ${this.name}`;
    }
}

let a = new child("sanket","xyz@gmail.com",1234);
console.log(a.course());

console.log(a.getuser());



