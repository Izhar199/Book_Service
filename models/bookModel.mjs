import { Schema, model } from "mongoose";

const bookSchema = new Schema({
  id: { type: String },
  name: { type: String },
  price: {
    raw: { type: Number },
    formatted: { type: String },
    formatted_with_symbol: { type: String },
    formatted_with_code: { type: String },
    },
  media: {
    type: { type: String },
    source: { type: String },
    },
  isAvailable: {type: Boolean},
  borrowedByUser : {
    userId: {type: String},
    userName: {type: String},
  }
});

export default model("Book", bookSchema);
