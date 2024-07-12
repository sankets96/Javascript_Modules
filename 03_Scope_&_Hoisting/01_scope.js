//region which var can acess

//let  =>block level scope
//var  => function level scope


//case 1
let a=2;
{
    let a=12;
    console.log("inside ",a);
}
console.log("outside ",a);


//case 2
let b=1;
{
    b=123;
    console.log("inside  B ",b);

}
console.log("outside  B ",b);


//case 3
var v=123;
{
    var v=90;
    console.log("inside  v ",v);

}
console.log("outside  v ",v);


//case 4
//case 3
var vv=12;
{
    vv=90;
    console.log("inside  vv ",vv);

}
console.log("outside  vv ",vv);