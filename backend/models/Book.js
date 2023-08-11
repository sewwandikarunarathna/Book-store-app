const mongoose =require('mongoose');

const bookSchema = new mongoose.Schema({
        category: {
            type: String,
            required: [true, 'Category is required']
        },
        author: {
            type: String,
            required: true
        },
        title: {
            type: String,
            required: true
        },
        createdBy: { //User model is ref here bcoz books created by users
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User',
            required: true
        }
    },
    {
        timestamps: true //give the books created time
    }
);

const Book = mongoose.model('Book', bookSchema);

module.exports = Book;