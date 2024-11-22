const bookService = require('../services/bookService');

const getAllBooks = async (req, res) => {
    try {
        const books = await bookService.getAllBooks();
        res.status(200).json(books);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch books' });
    }
};

const deleteBook = async (req, res) => {
    try {
        const { id } = req.params;
        const book = await bookService.deleteBook(id);
        if (!book) return res.status(404).json({ error: 'Book not found' });
        res.status(200).json({ message: 'Book deleted successfully' });
    } catch (error) {
        res.status(500).json({ error: 'Failed to delete book' });
    }
};

const updateBookStatus = async (req, res) => {
    try {
        const { id } = req.params;
        const { status } = req.body;
        if (!['available', 'checked-out'].includes(status)) {
            return res.status(400).json({ error: 'Invalid status' });
        }
        const updatedBook = await bookService.updateBookStatus(id, status);
        if (!updatedBook) return res.status(404).json({ error: 'Book not found' });
        res.status(200).json(updatedBook);
    } catch (error) {
        res.status(500).json({ error: 'Failed to update book status' });
    }
};

module.exports = {
    getAllBooks,
    deleteBook,
    updateBookStatus,
};
