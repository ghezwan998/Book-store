import { addBook, editBook, deleteBook, getAllBooks, getBook } from "../controllers/book.controllers.js";
import express from 'express';
import isAdmin from "../middlewares/isAdmin.js";
import auth from "../middlewares/auth.js";

const router = express.Router();

router.get('/book/:id', getBook)

router.get('/', getAllBooks)

router.post('/add-book', auth, isAdmin, addBook);

router.put('/edit-book/:id', auth, isAdmin, editBook);

router.delete('/delete-book/:id', auth, isAdmin, deleteBook);

export default router;