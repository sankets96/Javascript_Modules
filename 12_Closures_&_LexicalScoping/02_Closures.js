//closures is combination of function bundle togther with refference to this surrounding state (lexical env)
//closure gives access to outer function with help of inner function




let sum = function(a){
    console.log("A ",a);
    let c=13;
    return function(b){
        return a+b+c;
    }
}

let store = sum(11);
console.log(store(12));


let a = function(a,b,c){
    return{
        addtwo:function(){
            return a+b;
        },
        addthree:function(){
            return a+b+c;
        }
    }
}

let store2 = a(1,2,3);
console.log(store2.addtwo());
console.log(store2.addthree());