const express = require('express');
const User = require('../models/User');
const usersRoute = express.Router();
const asyncHandler = require('express-async-handler');
const generateToken = require('../utils/generateToken');
const authMiddleware = require('../middlewares/authMiddleware');
//register user
usersRoute.post('/register', 
    asyncHandler(async (req, res) => {
        
            const {name, email, password} = req.body;

            const userExists = await User.findOne({email: email});
            if (userExists){
                throw new Error("User exists!");
            }

            const userCreated = await User.create({ name, email, password })

            res.json({
                _id: userCreated._id,
                name: userCreated.name,
                password: userCreated.password,
                email:userCreated.email,
                token: generateToken(userCreated._id)
            });
        
    })
);

//login user
usersRoute.post('/login', 
    asyncHandler(async (req, res) => {

        const {email, password} = req.body;

        const user = await User.findOne({email});
        
        if (user && (await user.isPasswordMatch(password))){
            res.status(200);
            res.json({
                _id: user._id,
                name: user.name,
                password: user.password,
                email:user.email,
                token: generateToken(user._id)
            });
        } else {
            res.status(401);
            throw new Error('Invalid Credentials');
        }
    })
);

//update user
usersRoute.put('/update', authMiddleware, 
    asyncHandler(async (req, res) => {
        
        const user = await User.findById(req.user._id); //this id coming from authMiddleware req.user

        if(user){
            user.name = req.body.name || user.name; //req.body.name or user.name
            user.email = req.body.email || user.email;
            if(req.body.password){
                user.password = req.body.password || user.password;
            }

            const updatedUser = await user.save();

            res.json({
                _id: updatedUser._id,
                name: updatedUser.name,
                email:updatedUser.email,
                password: updatedUser.password,
                token: generateToken(updatedUser._id)
            });
        } else {
            res.status(401);
            throw new Error('Update failed');
        }
    })
);

//delete user
usersRoute.delete('/:id' , (req, res) =>{
    res.send('Delete route');
})

//fetch users
usersRoute.get('/', authMiddleware, (req, res) => {
    console.log(req.headers.authorization);
    res.send(req.user);
})

module.exports = usersRoute;