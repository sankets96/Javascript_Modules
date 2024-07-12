//fetch can use for fetching the api
//it holds the one url
//after u can convert into the JSON

//fetch contain high priority compare to others

fetch('https://api.github.com/users/hiteshchoudhary').then((responce)=>{
    return responce.json()
    //console.log(a);                                 //Promise { <pending> }
})
.then((responce)=>{
    console.log(responce);
    
})
.catch((error)=>{
    console.log(error);
});


//u recived message 404 from fetch u can recived in =>responce not in reject


fetch('https://api.github.com/users/hiteshchoudhary').then((responce)=>{
    console.log("ok ",responce.ok);                          //true
    console.log("status ",responce.status);                 //200    
    //it only valid in this posrtion 
   return responce.json();
})

.then((responce)=>{
    console.log("responce ",responce);
    
})
.catch((error)=>{
    console.log(error);
});

// //same block of code with 404 error

fetch('https://api.github.com/user/hiteshchoudhary').then((responce)=>{
    console.log("ok ",responce.ok);                            //false
    console.log("status ",responce.status);                    //404 
   return responce.json();
})

.then((responce)=>{
    console.log("responce ",responce);
    
})
.catch((error)=>{
    console.log(error);
});



//body =>
fetch('https://api.github.com/users/hiteshchoudhary',{
    method:"POST",
    body:JSON.stringify({name:"sss"})
}).then((responce)=>{
    console.log(responce);
}).catch((error)=>{
    console.log(error);
})

//custome fetch function
let url='https://api.github.com/user/hiteshchoudhary';
fetch(url).then((responce)=>{
    if(responce.ok){
        return responce.json();
    }
    return Promise.reject(responce)
}).then((res)=>{
    console.log(res);
}).catch((error)=>{
    console.log(error);
})