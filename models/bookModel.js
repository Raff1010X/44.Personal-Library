const mongoose = require('mongoose');
const Comment = require('./commentModel')

//+ Schema for book model
const bookSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: [true, 'required field(s) missing'],
        },
    },
);

bookSchema.virtual('commentcount', {
  ref: 'Comment', // The model to
  localField: '_id', // find where `localField`
  foreignField: 'book_id', // is equal to `foreignField` in that model
  count: true // And only get the number of docs
});

bookSchema.virtual('comments').get(async function() {
    const comments = await Comment.find({book_id: this._id});
    return comments.map((el) => {return el.comment});
});

bookSchema.set('toJSON', {
    virtuals: true,
    transform: (doc, ret, options) => {
        delete ret.__v;
        delete ret.id;
        delete ret.temp;
    },
});

module.exports = mongoose.model('Book', bookSchema);