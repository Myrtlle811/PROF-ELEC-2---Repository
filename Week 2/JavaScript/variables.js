console.log("Connected")

// Types of Comments:
// single-line comment
/*
This is a 
multi-line comment
*/

// Types of Variables:
/*  -> let variables are mutable (changable)
        it is a block-scope
        modern way of coding prefer let than var
        less error-prone
    -> var variables are mutable (changable)
        it is a global-scope
        can be troublesome when dealing with
        long lines of code
    -> const variables are unmutable (unchangable)
*/ 

let firstName = "Barbie"
// updating variables
firstName = "Catherine"
console.log("First Name: ", firstName)

var lastName = "Quirante"
// updating var
lastName = "Calalang"
console.log("Last Name: ", lastName)

const christmas = '12-25'
console.log("Christmas Day: ", christmas)

if (true) {
    let color = 'red'
    var fruit = 'apple'
    console.log("Color: ", color)
}
console.log("Fruit: ", fruit)

// The basic syntax for JavaScript
let x = 5;
let y = 10;
let sum = x + y;
console.log("Sum:", sum)