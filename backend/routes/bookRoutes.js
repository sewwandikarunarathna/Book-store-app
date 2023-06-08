const express = require('express');
const asyncHandler = require('express-async-handler');
const Book = require('../models/Book');
const authMiddleware = require('../middlewares/authMiddleware');
const bookRoute = express.Router();


//create book
bookRoute.post('/',
    asyncHandler(async (req, res) => {
        const book = await Book.create(req.body);

        if(book){
            res.status(200);
            res.send(book);
        } else {
            res.status(500);
            throw new Error('Book creating failed');
        }
    })
);

//fetch books
bookRoute.get('/',
    asyncHandler(async (req, res) => {
        const book = await Book.find({});

        if(book){
            res.status(200);
            res.send(book);
        } else {
            res.status(500);
            throw new Error('There are no books');
        }
    })
);

//update book
bookRoute.put('/:id', authMiddleware,
    asyncHandler(async (req, res) => {
        const book = await Book.findById(req.params.id); //params means id coming from url

        if(book){
            const updatedBook = await Book.findByIdAndUpdate(
                req.params.id, //book id
                req.body, //data which required to be updated
                {
                    new: true, //update new content
                    runValidators: true //validation process should be true
                }
            );
            res.status(200);
            res.send(updatedBook);    
        } else {
            res.status(500);
            throw new Error('Book update failed');
        }
    })
);

//delete book
bookRoute.delete('/:id',
    asyncHandler(async (req, res) => {
        try {
            const book = await Book.findByIdAndDelete(req.params.id);

            rew.status(200);
            res.send(book);
     
        } catch (error) {
            res.json(error);
        }
        
    })
);

module.exports = bookRoute;
