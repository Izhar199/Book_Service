import mongoose from 'mongoose';

const BooksSchema = new mongoose.Schema({
  bookId: { type: Number },
  bookName: { type: String },
  bookAuthor: { type: String },
  bookPages: { type: Number },
  bookPrice: { type: Number },
  bookState: {type: Boolean},
});


const Books = mongoose.model('Books', BooksSchema);
export default Books;
