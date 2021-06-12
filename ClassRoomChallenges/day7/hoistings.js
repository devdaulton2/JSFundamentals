/*
HOISTING
Hoisting is used to store data to  memory so that it can be referenced later.
*/

//console.log(firstName);
//let firstName = "Taylor";

console.log(firstName);
var firstName = "Taylor";
console.log(firstName);

example();

function example() {
    console.log("I HAVE BEEN HOISTED!");
}

function petName(name) {
    console.log(`My cat's name is ${name}`);
}


petName("Connor");

petName("connor"); //hoisting (content execution);

function petName(name) {
    console.log(`My cat's name is ${name}`)
}

/* ONLY DECLARATIONS ARE HOISTED*/
console.log(hello);
hello = "hi"; //error bc we are initializing it.
