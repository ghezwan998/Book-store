import Book from "../models/book.js";

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

const editBook = async (req, res) => {};

const deleteBook = async (req, res) => {};

export { getAllBooks, addBook, editBook, deleteBook };
