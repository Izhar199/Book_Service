import { Router } from 'express';
const router = Router();
import bookController from '../controllers/bookController.mjs';

// Routes
router.get('/books', bookController.getAllBooks);
router.delete('/books/:id', bookController.deleteBook);
router.post("/books/add", bookController.addBook);
router.patch('/books/:id/status', bookController.updateBookStatus);

export default router;
