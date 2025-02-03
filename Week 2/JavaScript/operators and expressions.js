// Operators and Expressions
/*
    1. Arithmetic Operations : follows the PEMDAS (parenthesis, exponents, multiplication, division, addition, subtraction) and BOMDAS (Brackets, Orders, Multiplication, Division, Addition, Subtraction) ruleS
    2. String Expressions or Concatenation : combines strings into one line
    3. Comparison Operators : returns a boolean, regardless of data types, javascript will check if they have the same value
        -> equal to (==) : check if the values are equal
        -> not equal to (!=) : check if the values are not equal
        -> strict equal to (===) : checks if the values and their data type are similar
        -> strict not equal to (!==) : checks if the values and their data type are similar
        -> Greater than 
        -> Greater than or equal to
        -> Lesser than 
        -> Lesser than or equal to       
    4. Logical Operators
        -> && : rep. AND, if both conditions are TRUE
        -> || : rep. OR, at least one condition is TRUE
        -> ! : rep. NOT, invert OR the opposite of the boolean value
    5. Assignment Operators (=) : using = to assign a value to a variable
        -> Addition Assignment : assigning a value to a variable resulting from an addition operation
        -> Subtraction Assignment : assigning a value to a variable resulting from an subtraction operation
        -> Multiplication Assignment : assigning a value to a variable resulting from an multiplication operation
        -> Division Assignment : assigning a value to a variable resulting from an division operation
        -> Exponent Assignment 
        -> Remainder/Modulos Assignment
*/ 

// Example for arithmetic operations
let num1 = 10;
let num2 = 5;
console.log("Addition (+): ", num1 + num2);
console.log("Subtraction (-): ", num1 - num2);
console.log("Multiplication (*): ", num1 * num2);
console.log("Division (/): ", num1 / num2);
console.log("Exponent (**): ", num1 ** num2);
console.log("Modulo (%): ", num1 % num2);

// Example with PEMDAS/BOMDAS
let answer = 3 + 4 * 5 * (5-2)**2 / 2;
console.log("Answer: ", answer);

// Example for String Expressions or Concatenation
console.log("Hello" + " " + "World");

let greetings = "Hi";
let name = "Sebastian";
console.log(greetings + " " + name + "!");

// Example for equal to
console.log("Equal to (==): ", num1 == num2)
// returns true
console.log("Equal to (==): ", 5 == "5")

// Example of not equal to
console.log("Not equal to (!=): ", num1 != num2)
// returns false
console.log("Not equal to (==): ", 5 != "5")

// Example for string equal to
console.log("Strict Equal to (===): ", num1 === num2)
// returns false
console.log("Strict Equal to (===): ", 5 === "5")

// Example for string not equal to
console.log("Strict Not Equal to (!==): ", num1 !== num2)
// returns true
console.log("Strict Not Equal to (!==): ", 5 !== "5")

// Examples for >, <, >=, <=
console.log("Greater than (>): ", num1 > num2)
console.log("Greater than or equal to (>=): ", num1 >= num2)
console.log("Lesser than (<): ", num1 < num2)
console.log("Lesser than or equal to (<=): ", num1 <= num2)

// Example of logical operators
let sunny = true;
let warm = false;
// For AND
console.log("Is it sunny AND warm: ", sunny && warm);
// For OR
console.log("Is it sunny OR warm: ", sunny || warm);
// For NOT
console.log("Is it sunny: ", !sunny);

// Example of assigning operations
let num3 = 10;
let num4 = 5;
// Addition Assignment
num3 += num4;
console.log("Updated num3: ", num3)
// Subtraction Assignment
num3 -= num4;
console.log("Updated num3: ", num3)
// Multiplication Assignment
num3 *= num4;
console.log("Updated num3: ", num3)
// Division Assignment
num3 /= num4;
console.log("Updated num3: ", num3)
// Exponent Assignment
num3 **= num4;
console.log("Updated num3: ", num3)
// Modulos Assignment
num3 %= num4;
console.log("Updated num3: ", num3)