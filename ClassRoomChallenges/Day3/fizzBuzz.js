// ****** CHALLENGES ********

/**************************
FIZZ BUZZ (Conditionals Only)
**************************/

/*
    Challenge:
    Create a variable named FB that takes numbers
    Write an ELSE/IF conditional that: 
    Prints out "Fizz" if the number is divisible by 3
    Prints out "Buzz" if the number is divisible by 5
    Prints out "Fizz Buzz" if the number is divisible by BOTH 3 and 5
    Convert this to SWITCH STATEMENT and then a TERNARY
*/

//if/else conditional
let FB = 15

if (FB % 3 === 0 && FB % 5 === 0 ){       
    //if divisible by 3 & 5
        console.log("FizzBuzz")
} else if(FB % 5 === 0) {
    //divisible by 5  
    console.log('Buzz')
} else if(FB % 3 === 0){
    console.log('Fizz')    
} else {
    console.log("Your number is not divisible by 3 or 5")
}

//SWITCH
let FB = 30;

switch(true) {
    case FB % 3 === 0 && FB % 5 === 0:
        console.log("FizzBuzz")
        break;
    case FB % 5 === 0:
        console.log("Buzz")
        break;
    case FB % 3 === 0:
        console.log("Fizz")
        break;
    default:
        console.log("The number is not divisble by 3 or 5")
}


let FB = 30;

FB % 3 === 0 && FB % 5 === 0 
    ? console.log("FizzBuzz")
    : FB % 5 === 0 ? console.log("Buzz") 
    : FB % 3 === 0 ? console.log("Fizz")
    :console.log("Your number isn't divisible by 3 or 5")