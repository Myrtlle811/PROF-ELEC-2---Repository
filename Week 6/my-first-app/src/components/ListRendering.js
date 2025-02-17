/*
  Notes:
    1. You cannot do a comment in the JSX, it will convert it to a plain text. Enclose them in {}.
    2. Manually render each item in the list
      <li>{userList[0]}</li>
      <li>{userList[1]}</li>
      <li>{userList[2]}</li>
*/

import React from "react";

const ListRendering = () => {
  // Create an array of user names
  const userList = ["Anne", "Kate", "Francis"];

  // Return JSX to render the component
  return (
    <div>
      <h2>List Rendering</h2>
      <ul>
        {/* Iterate over the userList array and render each user name as a list item */}
        {userList.map((user, index) => (
          // Use index as the key for each list item (not ideal for production, but fine for this example)
          <li key={index}>{user}</li>
        ))}
      </ul>
    </div>
  );
};

export default ListRendering;
