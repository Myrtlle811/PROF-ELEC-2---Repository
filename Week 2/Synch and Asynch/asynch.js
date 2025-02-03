/* Synchronous vs Asynchronous JavaScript Concepts:
    1. Synchronous (Synch) -> this prints/runs programs immediately. Additionally, this wait for an operation to finish, berform performing the next task.
    2. Asynchronous (Asynch) -> multiple programs will be executed concurrently. This is a non-waiting queue activity, meaning, we allocate time by prioritizing less consuming task.
*/

// Asynchronous Example
// setTimeout vs setInterval
/* 
  setTimeout -> it runs our programs one time after a given delay. Meaning, it will happen at a cetain delay
  setInterval -> loops our program based on the given delay.

  Main difference:
    A setInterval repeatedly runs a task at set times, while a setTimeout runs a task once after a delay.
*/

setTimeout(() => {
    console.log("Task 1.A");
}, 3000); //3 seconds

// setInterval(() => {
//     console.log("Task 1.B");
// }, 3000);

// let counter = 0;
// const function1 = setInterval(function func1() {
//     console.log("Task 1.B");
//     counter++;

//     if (counter == 3) {
//         clearInterval(function1);
//     }
// }, 3000);


/* 
Promises 
  -> return new promises
  -> something that can be kept at a later delay
  -> has resolves or reject (happens when there is an error, stop running.)
  -> can happen in a delay
*/

const step1 = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Step 1 complete.");
      resolve();
    }, 1000);
  });
};
  
const step2 = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Step 2 complete.");
      resolve();
    }, 1000);
  });
};

const step3 = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Step 3 complete.");
      resolve();
    }, 1000);
  });
};


// Chaining Promises
// uses then and catch keywords
// then represents the next step, only runs if the previous steps were already resolved
// last step is to log that the callbacks if finish
// catch prompts to the user if an error was encountered.
step1()
    .then(step2)
    .then(step3)
    .then(() => console.log("All steps complete."))
    .catch((error) => console.error("An error occurred:", error));


/* Async/Await */
// a lot functional to do asynchronal codes
// Async keyword allows us to use the Await keyword
// Awaits allows use to:
//    1. something will happen in a certain delay
//    2. we need to wait for something to finish before proceeding to the next step.
// all of it will happen inside a try catch block
// the try will run first (good-scenario), catch will run if an error is encountered.
const performSteps = async () => {
    try {
        await step1();
        await step2();
        await step3();
        console.log("All steps complete.");
    } catch (error) {
        console.error("An error occurred:", error);
    }
}