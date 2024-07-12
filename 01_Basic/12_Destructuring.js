let obj = {
    name:'xyz',
    feexe:999,
    instructor:'ABC'
}

console.log(obj.instructor);

//destructuring

let {instructor :courseinstructor} = obj;
console.log("After Destructuring");

console.log(courseinstructor);


//with function
const  navbar = ({courseinstructor})=>{
    return 'NAVBAR';
}