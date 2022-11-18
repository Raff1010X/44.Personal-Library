'use strict';
const Book = require('../models/bookModel');
const Comment = require('../models/commentModel');

exports.postComment = async function(req, res) {
  let book_id = req.params.id;
  let comment = req.body.comment;
  const newComment = new Comment({ book_id, comment });
  newComment
    .save()
    .then(async () => {
      const findBook = await Book.find({ _id: book_id }).populate('temp');
      res.status(200).json(findBook[0]);
      // return;
    });
}