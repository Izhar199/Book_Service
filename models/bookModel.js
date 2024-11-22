const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema({
  bookId: { type: String, required: true },
  title: { type: String, required: true },
  author: { type: String, required: true },
  availableCopies: { type: Number, required: true },
});

module.exports = mongoose.model("Book", bookSchema);
