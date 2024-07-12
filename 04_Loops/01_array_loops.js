//for of
//for in 

const arr=[12,13,14,15];

for (const iterator of arr) {
    console.log(iterator);         //values
}

for (let i in arr){
    console.log(i);                //index
}


//on string
const greet = "welcome";
for (const iterator of greet) {
    console.log(`each one is ${iterator}`);
}


//map
const map=new Map();
map.set('IND','INDIA');
map.set('USA','United state america');
map.set('FT','FRANCE');

for (const iterator of map) {
    console.log(iterator);       //[ 'IND', 'INDIA' ][ 'USA', 'United state america' ]
}

for (const [key,values] of map) {
    console.log(`${key} :- ${values}`);       
}


//object
const obj = {
    js:"javascript",
    cpp:"c++",
    rb:"ruby"
}

// for (const i of obj) {
//     console.log(i);              =>error
// }

for (const key in obj) {
   // console.log(key);                  //it print the only keys
   console.log(key, " :- ",obj[key]);
}




//array
//for of =>values  & for in =>keys

//map
//for of =>both      //for in =>not work

//string
//for of  =>char  &  for in=>index


//object
//for in =>values  
