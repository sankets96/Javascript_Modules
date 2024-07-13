//js allows that function retain acess to their lexical scope ven when function is executed outside the scope


//basic concept
//function is defined within another function and acess var from outer function scope

function outer(){
    let messouter = "This is outer message";
    function inner(){
        console.log(messouter);
    }
    return inner;
}
let col = outer();
col();



//encapsulation and data privacy

function counter(){
    let c = 0;
    return function(){
        c++;
        return c;
    };
}

let res = counter();
console.log(res());
console.log(res());