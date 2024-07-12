//in browser this =>window
//in node  this=>{}

function setuser(username){
    this.username=username;
}

function create(username,email,password){
    setuser(username);
    this.email=email;
    this.password=password;
}

const a = new create("sanket","sanket@gmail.com",12345);
//console.log(a);                                                     //{ email: 'sanket@gmail.com', password: 12345 }

//above example u clearly see username is not set

function create2(username,email,password){
    setuser.call(this,username);
    this.email=email;
    this.password=password;
}

let b= new create2("sanket","sanket@gmail.com",12345);
console.log(b);

//it can be used to invoke call method with an own object as arguments


//it will works when function is called then FEC created then after execute it desroy the function with there var hence no 
//value can pass to outer main function hence this problem overcome u need to add function_name.call() and pass this keyword
//thats meaning =>this keyword take and add into this object 