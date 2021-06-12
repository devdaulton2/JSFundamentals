// Challenge: Create a javascript file and link it to the html
// add id's to the h1, p, ul tags to reference in your js file
// use getelementbyid's in .your js file so you can target changes
// JavaScript Goals
// Change the Text of My Title to "My Grocery List"
// Change the font color of the p tag to red
// Remove the bullets on the ul's

//Solution: 
let para = document.getElementById("para");
let list = document.getElementById("list");
let title = document.getElementById("title");
para.style.color = "red";

list.style.listStyleType = "none";

title.innerText = "This is My Grocery List";

