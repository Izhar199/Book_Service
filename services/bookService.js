const Book = require("../models/bookModel");

const getAllBooks = async () => {
  return await Book.find();
};

const addBook = async (bookDetails) => {
  const newBook = new Book(bookDetails);
  return await newBook.save();
};

const deleteBook = async (bookId) => {
  return await Book.findByIdAndDelete(bookId);
};

const updateBookStatus = async (bookId, status) => {
  return await Book.findByIdAndUpdate(bookId, { status }, { new: true });
};

module.exports = {
  getAllBooks,
  addBook,
  deleteBook,
  updateBookStatus,
};
