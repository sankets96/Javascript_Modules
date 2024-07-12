
class User{
    constructor(name,email,password){
        this.name=name;
        this.email=email;
        this.password=password;
    }

    get name(){
        return this._name;
    }
    set name(name){
        this._name=name;
    }

    get password(){
        return `${this._password}abc`;
    }
    set password(name){
        this._password=name;
    }
}


let a = new User("sanket","sanket@gmail.com",1234);
console.log(a.password);