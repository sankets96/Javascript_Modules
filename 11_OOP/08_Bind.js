let person = {
    name:'sanket',
    greet:function(ss){
        console.log(`${ss} This is server generated mess to the ${this.name}`);
    }
}

const gree = person.greet;
console.log(gree("nnn"));

const nn = person.greet.bind(person);
nn("hellow")