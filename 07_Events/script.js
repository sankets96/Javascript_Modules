
// document.getElementById('fs1').onclick=function(){
//     alert('Hey');
// }

// document.getElementById('fs1').addEventListener('click',function(e){
//     alert('hhyy')
// },false);


//event propagationq
//false    =>event bubbling  =>child to parent
//true      =>event capturing  =>parent to child


// document.getElementById('fs1').addEventListener('click',function(e){
//     console.log('img cliked')
// },false);

// document.getElementById('img1').addEventListener('click',function(e){
//     console.log('parent cliked')
// },false);

//=>this is event bubling



// document.getElementById('fs1').addEventListener('click',function(e){
//     console.log('img cliked')
// },true);

// document.getElementById('img1').addEventListener('click',function(e){
//     console.log('parent cliked')
// },true);
//=>this is event capturing 


//task when u cliked ul then delete this image


document.querySelector('#img1').addEventListener('click',function(e){
    console.log(e);
    console.log(e.target);
    let a = e.target.parentNode;
    console.log(a);
    a.remove();

    // a.parentNode.removeChild(a);
},false);