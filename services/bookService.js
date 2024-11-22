const Book = require('../models/bookModel');

const getAllBooks = async () => {
    return await Book.find();
};

const deleteBook = async (id) => {
    return await Book.findByIdAndDelete(id);
};

const updateBookStatus = async (id, status) => {
    return await Book.findByIdAndUpdate(id, { status }, { new: true });
};

module.exports = {
    getAllBooks,
    deleteBook,
    updateBookStatus,
};
