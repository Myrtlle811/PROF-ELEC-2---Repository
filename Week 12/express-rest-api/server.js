import express from "express";
import userRoutes from "./routes/users.js"; // Ensure correct file extension

const app = express();
const PORT = 3000;

// Middleware to parse JSON
app.use(express.json());

app.use("/users", userRoutes);

// Basic Route
app.get("/", (req, res) => {
  res.send("Welcome to our RESTful API!");
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

// To run the server:
// node server.js
