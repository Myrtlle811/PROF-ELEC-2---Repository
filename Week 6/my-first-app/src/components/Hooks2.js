import { useState, useEffect } from "react";

const Hooks2 = () => {
  const [count, setCount] = useState(0);

  // useEffect -> when initializing/loading the website, this code block will run
  // Can house two parameters, with the second parameter as its condition to use that useEffect.
  useEffect(() => {
    // Mounting -> update the state or update the contents of your components
    // When stateful logic runs, the useEffects will follows
    console.log("Component updated.");
    return () => {
      // Unmounting -> the end of the updating. Can return a log or an end statement after updating.
      console.log("Component will now go outside of useEffect.");
    };
  }, [count]); // dependency -> when state changes, useEffect will fire up ONLY for this state.

  // an EMPTY Dependency array [] -> runs the useEffects only when loading the website, making it a window on load function.

  const increment = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={increment}>Increment</button>
    </div>
  );
};

export default Hooks2;

// Webpack -> source code compiler, compiler for your coding files.
