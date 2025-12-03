import { addBook, editBook, deleteBook } from "../controllers/book.controllers.js";
import express from 'express';

const router = express.Router();

router.post('/add-book', addBook);

router.post('edit-book', editBook);

router.post('/delete-book', deleteBook);

export default router;