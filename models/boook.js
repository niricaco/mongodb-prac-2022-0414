const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema({
  title: String,
  length: Number,
  year: Number,
});
const Book = mongoose.model("Book", bookSchema);

module.exports = Book;
