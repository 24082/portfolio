const mongoose = require("mongoose");

const messageSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String }, // optional
  inquiry: {
    type: String,
    enum: ["freelance", "job", "collab", "other"],
    required: true,
  },
  message: { type: String, required: true },
  date: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Message", messageSchema);
