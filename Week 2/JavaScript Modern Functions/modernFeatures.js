/* 
    Warm Up Exercise

    Activity: Finding the Maximum Number in an Array

    Instructions:
    - Prompt the user to enter a number 5 times. Store each number into an array called “numbers”.
    - Create a function called “findMax” where it will find the maximum number in the array.
    - Log the maximum number in the console.

    const numbers = [8,12,9,13,6];
    console.log(findMax(numbers)); //Output: 13

    const moreNumbers = [10,19,12,17,21];
    console.log(findMax(moreNumbers)); //Output: 21
*/

/* WARM-UP SOLUTION

function findMax(arrayNum) {
    let maxNum = arrayNum[0];

    for (let i = 1; i < arrayNum.length; i++) {
        if (maxNum < arrayNum[i]) {
           maxNum = arrayNum[i]; 
        }
    }

    // Alternative way:
    // arrayNum.forEach(function(maxTemp) {
    //     if (maxNum < maxTemp) {
    //         maxNum = maxTemp; 
    //     }
    // });

    return maxNum;
}

let numbers = [];
let i = 0;
while (i < 5) {
    let num = parseInt(prompt("Enter a number: "));
    
    if (isNaN(num)) {
        console.log("Please provide a valid input.");
        continue;
    }

    numbers[i] = num;
    i++;
}

console.log("Number Array: ", numbers);
console.log("Output: ", findMax(numbers));
*/


/* ACTUAL LESSON */

/* -- ARROW FUNCTIONS -- */
// Modern JS Features -> ES6, efficiency, and breaking lines as much as possible

// Older version
function greet(name) {
    return "Hello, " + name;
}
console.log(greet("Mario"))

// Modern functions -> for one-liners of programming
// uses flat arrows (=>)
// () houses the parameter, () and {} is optional if there is only 1 parameter or one line of command
const greetModern = name => "Hello, " + name;
const sum = (x, y) => {
    console.log("Calculating the sum...");
    return x + y;
}

console.log(greetModern("John2"));
console.log(sum(2, 2));


/* -- TEMPLATE LITERALS -- */
// uses back ticks (``)
let name = "John";
let age = 30;

console.log("Hi, my name is " + name + ". I am " + age + " years old.");
console.log(`Hi, my name is ${name}. I am ${age} years old.`);


/* -- DESTRUCTURING -- */
// getting multiple values from a single variable and initializing them to individual variables
// Array
let numbers = [1, 2, 3, 4, 5];

let [first, second, third, fourth, fifth, sixth] = numbers;
console.log(`${first}, ${second}, ${third}, ${fourth}, ${fifth}, ${sixth}`);


// Objects 
let numObject = {
    firstNum: 1,
    secondNum: 2,
    thirdNum: 3
}

// Accessing?
console.log(numObject["firstNum"]);

// Destructure an object...
let {firstNum, thirdNum, secondNum} = numObject;
console.log(`${firstNum}, ${secondNum}, ${thirdNum}`);

// Destructuring with default values
const painting = {
    artist: "Michelangelo",
    // year: 1550,
    dimensions: "400 x 200"
}

const painting2 = {
    artist2: "Van Gogh",
    year2: 1760
}

const {artist, year = 1552, dimensions} = painting;
const {artist2, year2, dimensions2 = "1000 x 1000"} = painting2;

console.log(artist, year, dimensions);
console.log(artist2, year2, dimensions2);


/* -- SPREAD AND REST OPERATORS -- */
let odd = [1, 3, 5];
let even = [2, 4, 6];

console.log(odd);
console.log(...odd); // rest

let oddAndEven = [...even, ...odd];
console.log(oddAndEven);

// with destructuring
numbers = [1, 2, 3, 4, 5];
let [x, y, ...z] = numbers;

console.log(x, y, z);
console.log(numbers);
 
// objects
const grades = {
    math: 94,
    english: 81,
    science: 97,
    pe: 70
}

console.log(grades);

const gradesWithEC = {
    ...grades,
    extraCurricular: 87
}

console.log(gradesWithEC);

// objects with destructuring
let {math, english, ...others} = gradesWithEC;
console.log(math, english, others);

/* -- FUNCTIONS W/ DEFAULT PARAMETERS -- */
const multiply = (a, b = 5) => a * b;

console.log(multiply(8))
console.log(multiply(8, 6));