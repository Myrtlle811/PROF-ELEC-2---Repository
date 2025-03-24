import React from "react";

const Greetings = ({ name = "Guest" }) => {
  return (
    <div>
      <p>Hello, {name}!</p>
    </div>
  );
};

export default Greetings;
