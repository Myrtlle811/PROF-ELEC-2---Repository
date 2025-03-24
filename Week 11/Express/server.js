// Setting Up an Express Server

const express = require("express");
const app = express();
const port = 3000;

// Import routes
const homeRoutes = require("./routes/home");
const userRoutes = require("./routes/users");

// Use the routes
app.use("/", homeRoutes);
app.use("/users", userRoutes);

// Start the server
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});

// Install Express
// npm install express
