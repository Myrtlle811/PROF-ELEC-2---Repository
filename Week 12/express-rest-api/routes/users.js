// Import Express for building the API and UUID generator to create unique IDs for users
import express from "express";
import { v4 as uuidv4 } from "uuid";

// Create an Express router instance
const router = express.Router();

// Import file system module and path to the JSON file where user data is stored
import fs from "fs";
const usersFile = "./routes/users.json";

// Load users from file when the server starts
let users = [];
try {
  users = JSON.parse(fs.readFileSync(usersFile, "utf-8"));
} catch (error) {
  users = [];
}

// Save users to the file
const saveUsers = () => {
  fs.writeFileSync(usersFile, JSON.stringify(users, null, 2));
};

// GET route: Fetch all users, where we start with /users
router.get("/", (req, res) => {
  res.status(200).json(users);
});

// POST route: Adds a new user to the list
router.post("/", (req, res) => {
  const user = req.body;
  const newUser = { userID: uuidv4(), ...user };

  users.push(newUser);
  saveUsers(); // Persist data
  res.status(201).json(newUser); // Respond with the newly added user
});

// GET route: Fetch the specific user's information based on userID
router.get("/:id", (req, res) => {
  const userId = req.params.id; // Extract ID from the request parameter id
  const user = users.find((u) => u.userID === userId);

  if (user) {
    res.status(200).json(user); // Respond with the specific user info
  } else {
    res.status(404).json({ message: "User not found" }); // Respond with an error
  }
});

// PUT route: Update an existing user
router.put("/:id", (req, res) => {
  const userId = req.params.id;
  const userIndex = users.findIndex((u) => u.userID === userId);

  if (userIndex !== -1) {
    // Merge updates while preserving the userID
    users[userIndex] = {
      ...users[userIndex], // Keep existing properties
      userID: userId, // ensure ID doesn't get overwritten
      ...req.body, // new updates
    };

    saveUsers(); // Persist to file
    res.status(200).json(users[userIndex]); // Respond with the updated user
  } else {
    res.status(404).json({ message: "User not found" }); // Respond with an error
  }
});

// DELETE route: Remove a user
router.delete("/:id", (req, res) => {
  const userId = req.params.id;
  const userIndex = users.findIndex((u) => u.userID === userId);

  if (userIndex !== -1) {
    users.splice(userIndex, 1); // Remove the user from the array
    saveUsers(); // Persist to file
    res.status(200).json({ message: "User deleted successfully" }); // Respond with a message confirming the deletion
  } else {
    res.status(404).json({ message: "User not found" });
  }
});

export default router;

// PS. Watch the reference video and follow the guide: https://youtu.be/l8WPWK9mS5M
