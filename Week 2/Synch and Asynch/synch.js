/* Synchronous vs Asynchronous JavaScript Concepts:
    1. Synchronous (Synch) -> this prints/runs programs immediately. Additionally, this wait for an operation to finish, berform performing the next task.
    2. Asynchronous (Asynch) -> multiple programs will be executed concurrently. This is a non-waiting queue activity, meaning, we allocate time by prioritizing less consuming task.
*/

// Callbacks
// portals to different functions

const getData = (callback) => {
    setTimeout(() => {
        const data = "This is the data.";
        callback(data);
    }, 3000) // 3 second delay to get the data, this is in miliseconds
}

const processData = (data) => {
    console.log("Processed data:", data);
}

getData(processData);

// Synchronous Example
console.log("First");
console.log("Second");
console.log("Third");


// Callback Hell
// bad: can cause spaghetti code, affecting the readability of your code.
// nesting of callbacks
// as much as possible, we avoid the pyramid formation of our codes

const step1 = (callback) => {
    setTimeout(() => {
      console.log("Step 1 complete.");
      callback();
    }, 2000);
  };
  const step2 = (callback) => {
    setTimeout(() => {
      console.log("Step 2 complete.");
      callback();
    }, 3000);
  };
  const step3 = (callback) => {
    setTimeout(() => {
      console.log("Step 3 complete.");
      callback();
    }, 1000);
  };
  
  // Callback Hell example 1
//   step1(() => step2(() => step3()));
  
  // Callback Hell example 2
  step1(() => {
    step2(() => {
      step3(() => {
        console.log("All steps complete.");
      });
    });
  });
