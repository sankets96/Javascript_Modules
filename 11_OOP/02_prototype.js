//prototype behaviour



//function is function and also function is obj 
function pow(num){
    return num*5;
}

pow.power=12;

console.log(pow(12));
console.log(pow.power);
console.log(pow.prototype);       //{}
console.log(typeof pow);