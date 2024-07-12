let arr = [1,2,3,4,5,6,7,8,9];
const x = arr.reduce(function(acc,currval){
    console.log(`acc ${acc} :- currval ${currval}`);
    return acc+currval
},0);
console.log("x ",x);