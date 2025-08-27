const Message = require("../models/Message");

// @desc    Save contact form submission
// @route   POST /api/contact
// @access  Public
const submitContactForm = async (req, res) => {
  try {
    const { name, email, phone, inquiry, message } = req.body;

    if (!name || !email || !inquiry || !message) {
      return res.status(400).json({ error: "All required fields must be filled" });
    }

    const newMessage = new Message({ name, email, phone, inquiry, message });
    await newMessage.save();

    res.status(201).json({
      success: true,
      message: "Message saved successfully!",
      data: newMessage,
    });
  } catch (error) {
    console.error("Error saving message:", error);
    res.status(500).json({ success: false, error: "Server error" });
  }
};

// @desc    Get all contact messages
// @route   GET /api/contact
// @access  Admin
const getMessages = async (req, res) => {
  try {
    const messages = await Message.find().sort({ date: -1 });
    res.json(messages);
  } catch (error) {
    console.error("Error fetching messages:", error);
    res.status(500).json({ error: "Server error" });
  }
};

module.exports = { submitContactForm, getMessages };
