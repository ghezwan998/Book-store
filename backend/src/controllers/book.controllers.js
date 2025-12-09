import Book from "../models/book.js";

const getBook = async (req, res) => {
  const bookId = req.params.id;

  try {
    const book = await Book.findById(bookId);
    if (!book) return res.status(404).json({ message: "Book not found" });
    res.status(200).json({ book });
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
};

const getAllBooks = async (req, res) => {
  try {
    const books = await Book.find({});
    res.status(200).json({ books });
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
};

const addBook = async (req, res) => {
  const { title, author, publishDate, category } = req.body;

  try {
    if (!title || !author)
      return res.status(400).json({ message: "Title and author required" });

    const book = await Book.create({ title, author, publishDate, category });

    res.status(201).json({ message: "This Book Added Successfuly" }, book);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
};

const editBook = async (req, res) => {
  const bookId = req.params.id;

  try {
    const book = await Book.findByIdAndUpdate(bookId, { ...req.body });
    if (!book) return res.status(404).json({ message: "Book not found" });
    res.status(200).json({ book, message: "Book updated successfuly" });
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
};

const deleteBook = async (req, res) => {
  const bookId = req.params.id;
  try {
    const book = await Book.findByIdAndDelete(bookId);
    if (!book) return res.status(404).json({ message: "Book not found" });
    res.status(200).json({ book, message: "Book deleted successfuly" });
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
};

export { getBook, getAllBooks, addBook, editBook, deleteBook };
