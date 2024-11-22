import Book, { find, findByIdAndDelete, findByIdAndUpdate } from "../models/bookModel";

const getAllBooks = async () => {
  return await find();
};

const addBook = async (bookDetails) => {
  const newBook = new Book(bookDetails);
  return await newBook.save();
};

const deleteBook = async (bookId) => {
  return await findByIdAndDelete(bookId);
};

const updateBookStatus = async (bookId, status) => {
  return await findByIdAndUpdate(bookId, { status }, { new: true });
};

export default {
  getAllBooks,
  addBook,
  deleteBook,
  updateBookStatus,
};
