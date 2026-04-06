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
  const { title, author, publishDate, category, price, stock } = req.body;

  try {
    // Check if book already exists (by title)
    const existingBook = await Book.findOne({ title });

    if (existingBook) {
      existingBook.stock += stock || 0;

      await existingBook.save();

      return res.status(200).json({
        message: "Book already exists, stock updated",
        book: existingBook
      });
    }

    const newBook = new Book({
      title,
      author,
      publishDate,
      category,
      price,
      stock: stock || 0
    });

    await newBook.save();

    res.status(201).json({
      message: "Book created successfully",
      book: newBook
    });

  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Cannot add book" });
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
