// Import React and useState hook from 'react' library
import React, { useState } from "react";

// Define the LoginForm functional component
const LoginForm = () => {
  // Declare state variables for email and password, with initial values as empty strings
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Define a function to handle form submission
  const handleSubmit = (e) => {
    // Prevent the default form submission behavior
    e.preventDefault();
    // Log a message indicating successful login
    console.log("Login successful!");
    // Log the email and password entered by the user
    console.log(`Email: ${email}, Password: ${password}`);
  };

  // Return the JSX for rendering the form
  return (
    <form onSubmit={handleSubmit}>
      <div>
        {/* Label for the email input field */}
        <label htmlFor="email">Email:</label>
        {/* Email input field */}
        <input
          type="email"
          name="email"
          id="email"
          value={email}
          // Update the email state when the input value changes
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>

      <div>
        {/* Label for the password input field */}
        <label htmlFor="password">Password:</label>
        {/* Password input field */}
        <input
          type="password"
          name="password"
          id="password"
          value={password}
          // Update the password state when the input value changes
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>

      {/* Submit button for the form */}
      <button type="submit">Login</button>
    </form>
  );
};

// Export the LoginForm component for use in other parts of the application
export default LoginForm;
