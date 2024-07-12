const id = 12345;
let email="abc@gmail.com";
var password="89765";
city="pune";         //it is possible but not  good practise
let state;

console.log(id);
console.log(email);
console.log(password);
console.log(city);

// id=2323;  const var not modified

console.table([id,email,password,city]);
//intial js has scope problem that time use var
//var has function level scope
//let have block level scope

console.log(state);

//primitive datatype
//numbers , string, boolean, null , undefined, symbol

//non-primitive
//object and array