/*
 *
 *
 *       Complete the API routing below
 *
 *
 */
'use strict';

const express = require('express');
const bookController = require('../controllers/bookController');
const commentController = require('../controllers/commentController');
const validate = require('../validator/validator');

const router = express.Router({ mergeParams: true });

router.route('/')
  .post(validate.checkTitle, bookController.postBooks)
  .get(bookController.getBooks)
  .delete(bookController.deleteBooks);

router.route('/:id')
  .post(validate.checkComment, validate.checkId, commentController.postComment)
  .get(bookController.getBook)
  .delete(validate.checkId, bookController.deleteBook);

module.exports = router;