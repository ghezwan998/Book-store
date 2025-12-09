import { addBook, editBook, deleteBook, getAllBooks } from "../controllers/book.controllers.js";
import express from 'express';

const router = express.Router();

router.get('/all-books', getAllBooks)

router.post('/add-book', addBook);

router.put('/edit-book/:id', editBook);

router.delete('/delete-book/:id', deleteBook);

export default router;