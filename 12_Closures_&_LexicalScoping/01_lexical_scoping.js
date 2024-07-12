

function outer(){
    let username="ABC";

    function innerone(){
        let name="XYZ";
        console.log("Inner usernam ",username);
        console.log("Inner name ",name);

    }

    function innertwo(){
       // console.log("innertwo ",name);             //sibling function not share var
       console.log(username);
    }

    //console.log("outer name ",name);             child function var not acess

    innerone();
    innertwo();
}
outer();