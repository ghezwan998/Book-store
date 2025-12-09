import { addBook, editBook, deleteBook, getAllBooks, getBook } from "../controllers/book.controllers.js";
import express from 'express';
import isAdmin from "../middlewares/isAdmin.js";

const router = express.Router();

router.get('/book/:id', getBook)

router.get('/all-books', getAllBooks)

router.post('/add-book', isAdmin, addBook);

router.put('/edit-book/:id',isAdmin, editBook);

router.delete('/delete-book/:id', isAdmin, deleteBook);

export default router;