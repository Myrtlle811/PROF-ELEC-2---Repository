/*
  Notes:
    1. Conditional formatting -> allows us to show or hide certain statement using if-else statements. 
    2. Enclose the conditional formatting in {}, for it to be rendered.
    2. Ternary operator (?) -> after the ?, is the true, after the : is the else 
    3. Logical AND operator (&&) -> aids the ternary operator. 
*/

import React from "react";

const ConditionalRendering = () => {
  const isUserLoggedIn = false;

  return (
    <div>
      <h2>Conditional Rendering</h2>
      {isUserLoggedIn ? <p>Logged In!</p> : <p>Not Logged In</p>}
      {isUserLoggedIn && <p>Welcome back, user!</p>}
    </div>
  );
};

export default ConditionalRendering;
