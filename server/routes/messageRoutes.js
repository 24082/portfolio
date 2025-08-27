const express = require("express");
const router = express.Router();
const { submitContactForm, getMessages } = require("../controller/messageController");

// POST: Save a new contact message
router.post("/", submitContactForm);

// GET: Fetch all contact messages (for admin)
router.get("/", getMessages);

module.exports = router;
