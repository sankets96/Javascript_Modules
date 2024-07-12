//chaninng

let five = new Promise(function(resolve,rejected){

    setTimeout(()=>{
        let a = 1;
        if(a==1){
            console.log("done");
            resolve({name:"ABC",age:12});
        }else{
            rejected("ERROR");
        }
        
    },1000);

});

five.then(function(user){
    console.log("first ",user);
    return user.name;
})
.then(function(name){
    console.log(name);
})
.catch(function(mess){
    console.log(mess);
})