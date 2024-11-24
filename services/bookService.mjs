import Book from "../models/bookModel.mjs";

export const getAllBooks = async () => {
  return await Book.find();
};

export const addBook = async (bookDetails) => {
  const newBook = new Book(bookDetails);
  return await newBook.save();
};

export const deleteBook = async (id) => {
  return await Book.findOneAndDelete({id});
};

export const updateBookStatus = async (id, isAvailable) => {
  return await Book.findOneAndUpdate({id}, { isAvailable },);
};

