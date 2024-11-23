import Book from "../models/bookModel.mjs";

export const getAllBooks = async () => {
  return await Book.find();
};

export const addBook = async (bookDetails) => {
  const newBook = new Book(bookDetails);
  return await newBook.save();
};

export const deleteBook = async (bookId) => {
  return await Book.findOneAndDelete({bookId});
};

export const updateBookStatus = async (bookId, status) => {
  return await Book.findOneAndUpdate({bookId}, { status }, { new: true });
};

// export default {
//   getAllBooks,
//   addBook,
//   deleteBook,
//   updateBookStatus,
// };
