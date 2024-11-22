const express = require('express');
const router = express.Router();
const bookController = require('../controllers/bookController');

// Routes
router.get('/books', bookController.getAllBooks);
router.delete('/books/:id', bookController.deleteBook);
router.patch('/books/:id/status', bookController.updateBookStatus);

module.exports = router;
