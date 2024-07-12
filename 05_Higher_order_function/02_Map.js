//map can store key value pair
//it store only unique values
//display in proper line by line

let map = new Map();
map.set('A',"ABC");
map.set('B',"XYZ");
map.set('C',"PQR");

console.log(map);

//iteratr over
for (const [key,value] of map) {
    console.log(`keys are ${key} and values are ${value}`);
}