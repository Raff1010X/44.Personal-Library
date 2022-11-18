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

commentSchema.set('toJSON', {
    virtuals: true,
    transform: (doc, ret, options) => {
        delete ret.__v;
        delete ret.id;
        delete ret._id;
        delete ret.book_id;
    },
});

module.exports = mongoose.model('Comment', commentSchema);
