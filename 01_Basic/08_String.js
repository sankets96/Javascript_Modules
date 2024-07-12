//collection of multiple sequence of char

//creating string
const str1 = "stringis";    //primitive 
const str2 = 'singqutos';   //primitive
const str3 = `abc`;         //primitive
const str4 = new String("sanket");    //object form

//character acess
console.log(str4[3]);


//templte literals or string injuction
let str5 = `thuis is string ${str3}`;
console.log(str5);

console.log(str4.__proto__);

//escape sequence
let str6 = 'bana\nna';
console.log(str6);

//\n  =>new line
// \t =>tab space


//methods
//uppercase or lowercase
console.log(str1.toUpperCase());  
console.log(str1.toLowerCase());


//slice    =>slicing it can return substring 
console.log(str1.slice(0,3));     //0 to 3
console.log(str1.slice(3));       //3 to last

console.log(str1.slice(-3,0));       //-ve indexing

//replace
console.log(str1.replace('str','str2'));   //temp replaced
console.log(str1);

let url = "https://google.com%";
console.log(url.replace("%","-"));


//concat   =>adding 2 strings
let a ="sanket";
let b = " suryavanshi";
console.log("using concat ",a.concat(b));
console.log(" + ",a+b);


//trim =>remove the unwanted space in last or start
let c = "    a   ";
console.log(c.trim());


//includes  =>true or false return if exists in string
console.log(a.includes('s'));


//chartat   =>return index at char is present
console.log(a.charAt(2));

//indexof
console.log(a.indexOf('t'));


//split
let abc = "ss abc def";
console.log(abc.split(" "));


//conversion string to array
let d = "sanket ss sbc vgr";
let arr=d.split("\t");
console.log(arr);
