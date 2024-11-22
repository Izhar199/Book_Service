import { Schema, model } from "mongoose";

const bookSchema = new Schema({
  bookId: { type: String, required: true },
  title: { type: String, required: true },
  author: { type: String, required: true },
  status: { type: String, enum: ["Available", "Checked Out"], default: "Available" },
  publishedDate: { type: Date },
  genre: { type: String },
  ISBN: { type: String },
  publisher: { type: String },
});

export default model("Book", bookSchema);
