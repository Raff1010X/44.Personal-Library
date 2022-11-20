const mongoose = require('mongoose');

//+ Schema for comment model
const commentSchema = new mongoose.Schema({
    book_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Book',
    },
    comment: {
        type: String,
    },
});

module.exports = mongoose.model('Comment', commentSchema);
