const score=12;
console.log(score);             //12

const bal = new Number(100);
console.log(bal.toString().length);            //3

const vv =23.2557;
console.log(vv.toPrecision(4));              //23.26   
console.log(vv.toFixed());                     //23

const hun = 100000;
console.log(hun.toLocaleString());
console.log(hun.toLocaleString('en-IN'));