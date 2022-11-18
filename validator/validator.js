'use strict';
const Book = require('../models/bookModel');
const Comment = require('../models/commentModel');

exports.checkTitle = function(req, res, next) {
  if (!req.body.title) {
    res.status(200).send('missing required field title');
    return;
  }
  next();
}

exports.checkId = async function(req, res, next) {
  let book_id = req.params.id;
  const book = await Book.find({ _id: book_id });
  if (book.length === 0) {
    res.status(200).send('no book exists');
    return;
  }
  next();
}

exports.checkComment = function(req, res, next) {
  if (!req.body.comment) {
    res.status(200).send('missing required field comment');
    return;
  }
  next();
}