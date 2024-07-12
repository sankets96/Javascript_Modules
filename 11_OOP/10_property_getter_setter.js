//u can set getter and setter by using property


function User(email,password){
    this._email=email;
    this._password=password;
}

Object.defineProperty(this,'email',{
    get:function(){return this._email.toUpperCase();

    },
    set:function(name){this._email=name;

    }
})

let a= new User('xyz@gmail,com',1234);
console.log(a._email);