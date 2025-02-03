// Control Flow Structures
/*
    1. Conditional Statements : block of codes that runs if the conditions are met.
        () -> condition block : where the arguments/conditions are set, if met, the codes within the code block will be run
        {} -> code block : where the codes/operations are located
        Types :
            -> Uses if, else if, else conditions
            -> Uses switch cases
    2. Looping Statements : to execute codes repeatedly
        Types:
            -> for loop : conditions expressions are set as argumeents
            -> while loop : flexible, as condition expressions can be place within the code block
            -> do while loop : performs a code block once before considering the condition expression if we need to continue or not
*/ 

// Example of Conditional Starements with if, else if, else
let temperature = 25;
if (temperature < 0) {
    // Range is below 0
    console.log("It's freezing!");
} else if (temperature > 0 && temperature < 20) {
    // Range is from 0 to 19
    console.log("It's cool outside.");
} else if (temperature >= 20 && temperature < 30) {
    // Range is from 20 to 29
    console.log("It's warm outside.");
} else {
    // Range is above 29
    console.log("It's boiling!");
}

// Example of Conditional Starements with switch cases
let day = "Monday"
switch (day) {
    case "Monday":
        console.log("Start of the Week!");
        break;

    case "Friday":
        console.log("End of the Week!");
        break;

    default:
        console.log("A regular day.");
        break;
}

// Example of looping statements
// for (1st argument -> initialization; 2nd -> execution condition expression; 3rd -> increment/decrement)
for (let i = 1; i <= 5; i++) {
    console.log("For loop count: ", i);
}

// while (execution condition expression)
let counter = 1;
while (counter <= 5) {
    console.log("While loop count: ", counter);
    counter++;
}

// do while
let count = 7
do {
    console.log("Do while loop count: ", count);
    count++;
} while (count <= 5);