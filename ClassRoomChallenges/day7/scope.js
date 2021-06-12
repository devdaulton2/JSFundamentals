/*
SCOPE
-locally - think Indy as our local scope
-globally - think planet
*/

let x = "declared OUTSIDE";

function exampleScope(){
    let x = "declared INSIDE"
    console.log("We are inside the function exampleScope");
    //console.log(x);
}

exampleScope();
console.log(x);

//exmaple2
let color = "blue";
function skyColor() {
    color = 'pink';
    //console.log(color);
}

console.log(color);
skyColor();

/* Var vs Let
    CONST - cannot be reinitialized
    VAR - scoped to the nearest function block
    LET - scoped to nearest  enclosing block
    */

var color = "blue";

function skyColor() {
    var color = "pink";
    if(1==1) {
        var color = 'purple';
        console.log(color); //purple
    }
    console.log(color); //purple
}

skyColor();
console.log(color); //blue

//Remember that VAR is scoped to the nearest function block, not the nearest enclosing block like LET/ That is why our first variable declaration of color gets reinitialized as purple

//LET 
let color = "blue";

function skyColor() {
    let color = "pink"
    if (1==1) {
        let color = "purple";
        console.log(color); //purple
    }
    console.log(color); //pink
}

skyColor();
console.log(color); //blue
