// React Hooks -> allows us to use custom functions to our current website, allows us to use Stateful codes, normally starts with 'use'

/* Stateful vs Stateless
    1. Stateful logic -> in every action of the user, there is an update on the information or value in the code, values can be updated in real time (e.g., counters)
    2. Stateless logic -> code that does not change or has no updates (e.g., plain info)
*/

// counts is the value, while setCount is the function that will update the count.

import React, { useState } from "react";

const Hooks = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <p>You clicked {count} times.</p>
      <button onClick={increment}>Click me!</button>
    </div>
  );
};

export default Hooks;
