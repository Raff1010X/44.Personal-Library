
'use strict';
const Book = require('../models/bookModel');
const Comment = require('../models/commentModel');

exports.getBooks = async function(req, res) {
  const allBooks = await Book.find().select('-comments').populate('commentcount');
  if (allBooks) res.status(200).json(allBooks);
  else res.status(200).send('no books');
}

exports.postBooks = function(req, res) {
  let title = req.body.title;
  const newBook = new Book({ title });
  const _id = newBook.id;
  newBook
    .save()
    .then(() => res.status(200).json({ _id, title }));
}

exports.deleteBooks = function(req, res) {
  Book.deleteMany()
    .then(() => { return Comment.deleteMany() })
    .then(() => { res.send('complete delete successful') });
}

exports.getBook = async function(req, res) {
  const findBook = await Book.find({ _id: req.params.id }).select('-commentcount').populate('temp');
  if (findBook.length > 0) res.status(200).json(findBook[0]);
  else res.status(200).send('no book exists');
}

exports.deleteBook = async function(req, res) {
  Book.deleteOne({ _id: req.params.id })
    .then(() => { res.status(200).send('delete successful') })
    .catch(() => { res.status(200).send('no book exists') })
}
