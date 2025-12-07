import { addBook, editBook, deleteBook, getAllBooks } from "../controllers/book.controllers.js";
import express from 'express';

const router = express.Router();

router.get('/all-books', getAllBooks)

router.post('/add-book', addBook);

router.post('edit-book/:id', editBook);

router.post('/delete-book/:id', deleteBook);

export default router;