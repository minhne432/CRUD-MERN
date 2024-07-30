const router = require("express").Router();
const bookModel = require("../models/booksModel");

//POST REQUEST
router.post("/add", async (req, res) => {
  try {
    const data = req.body;
    const newBook = new bookModel(data);
    await newBook.save().then(() => {
      res.status(200).json({ message: "Book added successfully" });
    });
  } catch (error) {
    console.log(error);
  }
});

//GET REQUEST
router.get("/getBooks", async (req, res) => {
  let books;
  try {
    let books = await bookModel.find();
    res.status(200).json({ books });
  } catch (error) {
    console.log(error);
  }
});

//GET REQUEST WITH ID
router.get("/getBook/:id", async (req, res) => {
  let book;
  const id = req.params.id;
  try {
    book = await bookModel.findById(id);
    res.status(200).json({ book });
  } catch (error) {
    console.log(error);
  }
});

//UPDATE BOOK BY ID
router.put("/updateBook/:id", async (req, res) => {
  const id = req.params.id;
  const { bookName, description, author, image, price } = req.body;
  try {
    book = await bookModel.findByIdAndUpdate(id, {
      bookName,
      description,
      author,
      image,
      price,
    });

    await book.save().then(() => {
      res.json({ message: "Data updated" });
    });
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
