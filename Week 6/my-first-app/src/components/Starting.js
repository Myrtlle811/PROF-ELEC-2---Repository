/*
    Notes:
        1. rafce -> to create our custom functions
        2. <></> -> using Fragments, to inform React that you want to render the following JSX.
        3. You can add the export default right next to the function for the old version.
*/
import React from "react";

// Using the older version:
// function Start() {
//   return <div className="App">Hello World!</div>;
// }

// Using Flat Arrow
const Start = () => {
  return (
    <div className="container">
      <h1>Welcome to React.js</h1>
      <p>React is a JS Library for building UIs.</p>
    </div>
  );
};

export default Start;
