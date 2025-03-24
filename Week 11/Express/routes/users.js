const express = require("express");
const router = express.Router();

// Route to get all users
router.get("/", (req, res) => {
  res.send("Users List");
});

// Route to get a specific user by ID
router.get("/:id", (req, res) => {
  res.send(`User ID: ${req.params.id}`);
});

module.exports = router;
