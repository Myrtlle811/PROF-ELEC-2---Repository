// Components -> sections of  the page with separate funtionalities or elements, they are reusable
//            -> Allows us to organize our codes, they start with capital letters (PascalCasing), and exported.

import React from "react";

const Welcome = ({ name }) => {
  return (
    <>
      <p>Welcome, {name}!</p>
    </>
  );
};

export default Welcome;

// Props -> parameters, enclosed in {}
// To pass props, we use attributes
