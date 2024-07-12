//ES6

class User{


    constructor(name,email,password){
        this.name=name;
        this.email=email;
        this.password=password;
    }

    encryptpass(){
        return `${this.password}abc-`;
    }
    getuser(){
        return this.name.toUpperCase();
    }
}

const a = new User("sanket","sanket@gmail.com",1234);

console.log(a.encryptpass());
console.log(a.getuser());
