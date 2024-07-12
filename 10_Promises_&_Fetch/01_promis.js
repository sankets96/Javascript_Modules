//task is put in queue but task is not started
// promises is part of async programming
// also used with async wait keyword
//promises object represent eventual completeion or failure of an ascync opration and return value
// status
// 1)pending    2)fulfill     3)rejected


let one = new Promise(function(resolve,rejected){
    // asyncronus
    setTimeout(()=>{
        console.log("Done");
        resolve();
    },2000);

});

one.then(function(){
    console.log("fillfilled");
});

//resolve function connected to the then
// some caeses u can pass arg in resolve function and it recived in then()

let two = new Promise(function(resolve,rejected){
    // asyncronus
    setTimeout(()=>{
        console.log("Done2");
        resolve("comoleted task");
    },2000);

});

two.then(function(mess){
    console.log(mess);
});


//u can pass obj in resolve
let three = new Promise(function(resolve,rejected){
    // asyncronus
    setTimeout(()=>{
        console.log("Done3");
        resolve({name:"ABC",age:12});
    },2000);

});

three.then(function(mess){
    console.log(`name is ${mess.name} and age is ${mess.age}`);
});



//rejected
//catch connected to the rejected function
let four = new Promise(function(resolve,rejected){
    let a =false
    setTimeout(()=>{
        if(a==true){
            rejected("Something wents wrong!!");
        }else{
            resolve("Task4 run sucessfully");
        }
    },2000);
   
});

four.then(function(mess){

    console.log(mess);
}).catch(function(mess){
    console.log(mess);
})




