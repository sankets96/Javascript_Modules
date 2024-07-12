//DOM  =>document object model


// console.log(window.document);
// console.log(document);
// console.dir(document);

//console.log(document.links);//return the html collection


//windeow  =>it type of object contains fetures which are given by browser qnd js can use this

const a = document.querySelector('.parent');
console.log(a);
console.log(a.children[1].innerHTML);


//parent child relation


const parent = document.querySelector('.parent');
console.log("childern is ",parent.children[1]);

//return first child
console.log("first cild ",parent.firstElementChild);
//return last child elemenet
console.log("last cild ",parent.lastElementChild);


//traverse child to parent
const child = document.querySelector('.child')

console.log(child.parentElement);

//siblings return
console.log(child.nextSibling);