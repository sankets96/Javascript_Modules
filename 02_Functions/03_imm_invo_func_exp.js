//IIFE  =>Immidate invoke function expression


//normal function
(function(){
    console.log("DB connected");
})();



//arrow function without param having immidiate invoke

(()=>{
    console.log("Immidiate invoked");
})();



//arrow function with param having immidiate invoke
((q1,q2)=>{
    console.log("Immidiate invoked2 ",q1/q2);
})(4,2);


//(function(){})();
//(()=>{})();