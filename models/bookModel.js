const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema({
  title: { type: String, required: true },
  author: { type: String, required: true },
  status: { type: String, enum: ["Available", "Checked Out"], default: "Available" },
  publishedDate: { type: Date },
  genre: { type: String },
});

module.exports = mongoose.model("Book", bookSchema);
