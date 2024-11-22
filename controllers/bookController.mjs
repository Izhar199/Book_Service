import { getAllBooks as _getAllBooks, addBook as _addBook, deleteBook as _deleteBook, updateBookStatus as _updateBookStatus } from "../services/bookService.mjs";

const getAllBooks = async (req, res) => {
  try {
    const books = await _getAllBooks();
    res.status(200).json(books);
  } catch (error) {
    res.status(500).json({ message: "Error fetching books", error });
  }
};

const addBook = async (req, res) => {
  try {
    const bookDetails = req.body;
    const newBook = await _addBook(bookDetails);
    res.status(201).json(newBook);
  } catch (error) {
    res.status(500).json({ message: "Error adding book", error });
  }
};

const deleteBook = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedBook = await _deleteBook(id);
    if (!deletedBook) {
      return res.status(404).json({ message: "Book not found" });
    }
    res.status(200).json({ message: "Book deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error deleting book", error });
  }
};

const updateBookStatus = async (req, res) => {
  try {
    const { id } = req.params;
    const { status } = req.body;
    const updatedBook = await _updateBookStatus(id, status);
    if (!updatedBook) {
      return res.status(404).json({ message: "Book not found" });
    }
    res.status(200).json(updatedBook);
  } catch (error) {
    res.status(500).json({ message: "Error updating book status", error });
  }
};

export default {
  getAllBooks,
  addBook,
  deleteBook,
  updateBookStatus,
};
