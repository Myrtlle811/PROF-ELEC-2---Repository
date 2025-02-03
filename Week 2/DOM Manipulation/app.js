// using getElementById -> return the element that was selected using its id
let elementWithID = document.getElementById('first-div');
console.log("Element accessed using ID: ", elementWithID)

// Modify element .textContent property
elementWithID.textContent = "Div 1"

// getElementsByClassName method
let elementsWithClass = document.getElementsByClassName("sample-div");
console.log("Element accessed using class: ", elementsWithClass)

// Modify Element, textContent property using index
elementsWithClass[1].textContent = 'Div 2';

// getElementByTagName
let listItems = document.getElementsByTagName('li')
console.log("Element accessed using tag: ", listItems);

// Modify elements using .backgroundColor property
listItems[0].style.backgroundColor = "crimson";
listItems[2].style.border = "1px dashed";

// .querySelector() method
// #id, .class, tag
// Return first element or null
let orderedListItem = document.querySelector('.ordered-list');
console.log("Ordered List Items:", orderedListItem);
orderedListItem.style.color = 'blue';

// .querySelectorAll() method
let heading3 = document.querySelectorAll('h3');
console.log("Heading 3 Tags: ", heading3);

// Modify the elements inside the .querySelectorAll
// To have a background color
heading3[3].style.backgroundColor = 'yellow';

// for using looping statements
for (let i = 0; i < heading3.length; i++) {
    let heading = heading3[i];
    heading.style.backgroundColor = 'yellow';
}

// Update elements using attributes
let dayNightIcon = document.getElementById("day-night-icon");
dayNightIcon.setAttribute('src', 'https://cdn-icons-png.flaticon.com/512/3688/3688129.png');

// Appending new elements
let parentElement = document.getElementById('parent-element');
let createdElement = document.createElement('div');
createdElement.textContent = 'This is the created child element!'
parentElement.appendChild(createdElement)

// Removing an element
let toRemoveElement = document.getElementById('element-to-be-removed')
toRemoveElement.remove()

// Modifying the background and text
// adding event listeners and manipulating element styles
let buttonElement = document.getElementById('dark-mode-btn');
let isClicked = true;

buttonElement.addEventListener('click', function() {
    let pageContainer = document.getElementById("page-container");
    let pageModeText = document.getElementById("page-mode-text");

    if (isClicked) {
        pageContainer.style.backgroundColor = "black";
        pageContainer.style.color = 'white';
        pageModeText.textContent = 'Dark Mode';
        isClicked = false;
    } else {
        pageContainer.style.backgroundColor = "white";
        pageContainer.style.color = 'black';
        pageModeText.textContent = 'Light Mode';
        isClicked = true;
    }
})