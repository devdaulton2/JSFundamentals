function greeting() {
    //code inside will be executed wihen function is called. 
    console.log("Hello from greeting");
}

greeting(); //call the function

//Expression Functions - order matters!
//The key differnce between a function and an expression function 
// -- declarations get hoisted
// -- expressions do not get hoisted

let expressionGreeting = function() {
    console.log("Hello from expressionGreeting")
};

expressionGreeting();


//Create a function that, when invoked, lists out the numbers 1-10
//using a for loop

function challenge() {
    for (let i = 1; i <= 10; i++){
        console.log(i)
    }
}
challenge();

//Parameters
// Function parameters are place holders for data that we pass into a function when invoking

function studentGreeting(studentName){
    console.log(`Good morning ${studentName}`)
}

studentGreeting('Rob');
studentGreeting('Jeff');

/*
- Write a function that takes two parameters:
    -one parameter is for a first name,
    - the other parament is for a last name;
    - have them come together in a variable inside the function.
    - console.log 'Hello, my name is <your name>
    - call (or invoke) your function
    */

    function myName(fName, lName) {
        let fullName = fName + " " + lName;
        console.log(fullName);
    }
    
    myName("Rob", "V");

function area(length, width){
    let areaCalc = length * width
    return areaCalc /// w/o return this funtion will return undefined
}

let area1 = area(3,4)
let area2 = area(5,3)
console.log(area1, area2)

function volume(length, width, depth){
    //let volumeCalc = length * width * depth
    return length * width * depth /// same as if above + return volumeCalc but prettier
}

let volume1 = volume(3,4,6)
let volume2 = volume(5,2,3)
console.log(volume1, volume2)

function humanAge(dogAge){
    let humanAgeCalc = (dogAge-2)* 4 + 21
    return humanAgeCalc
}

let dog1 = humanAge(3)
console.log(dog1)

