// Functions -> allows us to wrinte a block of executable codes when needed
// A sample function
function greeting(){
    console.log("Hello, welcome to the world of functions!");
    console.log("Yehey!")
}
// calling a function
greeting()

// parameters -> placeholders that will hold the values that we want to pass
// arguments -> values that we pass to the parameter

function sum(num1, num2) {
    console.log("Calculating the values... ");
    return num1 + num2;
}
// calling a function with parameters
console.log("The sum is", sum(1, 2));
console.log("Calculation done!");