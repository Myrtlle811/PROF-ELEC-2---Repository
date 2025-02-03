// Arrays -> a variable of multiple collections of elements or values, enclosed in [].
// Arrays start with zero (origin), it is the distance from the starting value inside the array.

/* 
    properties -> information about the array
    methods -> functions we can do with the array 
*/

// Creating an sample array
let fruits = ['Apple', 'Banana', 'Orange', 'Mango', 'Strawberry']
console.log(fruits);

// Accessing array elements
console.log("First Fruit: ", fruits[0]);
console.log("Second Fruit: ", fruits[1]);

// How to get the last fruit?
console.log("Last Fruit: ", fruits[fruits.length - 1]);

/* Changing an array */
// Modifying an existing index
fruits[1] = "Grapes";
console.log(fruits);

// Add (.push())
fruits.push("Star Apple", "Durian", "Tomato");
console.log(fruits);
 
// Remove (.pop())
let poppedIndex = fruits.pop();
console.log(poppedIndex, fruits);

// Add between existing elements (.splice())
let spliceArea = fruits.splice(2, 0, "Kiwi");
console.log(fruits);
 
// Removing specific elements (.splice())
spliceArea = fruits.splice(0, 2);
console.log(fruits);

// Another example
let numbers = [1, 2, 3, 4, 5]
console.log(numbers)

// indextof -> returns the index of an element
console.log(numbers.indexOf(5))

// slice(start, end) - extract a portion of the array but does not modify the original array
// start - index where it starts slicing
// end - index where it end slicing (WARNING: element corresponding to index not included)
let slicedArray = numbers.slice(0, 2)
console.log(slicedArray);

// splice(start, # of elements) - like slice but modifies the original array and removes the sliced elements
let removedElements = numbers.splice(0, 2);
console.log("Removed Elements: " + removedElements);
console.log("Updated array: " + numbers);

/* Accessing individual elements 
    Array iteration 
        1. for loop
        2. forEach
*/

for (let i = 0; i < fruits.length; i++) {
    console.log("Fruit: ", fruits[i]);
}

fruits.forEach(fruit => {
    console.log("Fruit: ", fruit);
});





