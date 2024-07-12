
// function delay(m){
//     return new Promise(resolve=>setTimeout(resolve,m));
// }

// async function promot(){
//     console.log("start");
//     await delay(2000);
//     console.log("end");
        
    
  
// }

// promot();

//error handling

// function fetching(){
//     return new Promise((resolve,reject)=>{
//        setTimeout(()=>reject("ERROR"),1000); 
//     });
// }

// async function calculate(){
//     try{
//         let result = await fetching();
//         console.log(result);
//     }catch(error){
//         console.log(error);
//     }
// }
// calculate()


//combination
function fetchuser(){
    return new Promise(resolve=>setTimeout(()=>resolve("User data"),1000));
}

function fetchpost(){
    return new Promise(resolve=>setTimeout(()=>resolve("User Post"),1000));
}


async function userdata(){
    try{
        let user=await fetchuser();
        let post = await fetchpost();

        console.log(user,post);
    }catch(erro){
        console.log(erro);
    }
}

userdata();

