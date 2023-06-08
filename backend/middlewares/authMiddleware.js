const asyncHandler = require('express-async-handler');
const jwt = require('jsonwebtoken');
const User = require('../models/User');

const authMiddleware = asyncHandler(async (req, res, next) => {
    let token;

    if(req.headers.authorization && req.headers.authorization.startsWith('Bearer')){
        try {
            token = req.headers.authorization.split(" ")[1]; //get only the token without Bearer word
            
            const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY); //token is decoded. it includes user id and stuff

            const user = await User.findById(decoded.id); //find the user from db using id in req.token

            req.user = user; //the found user append to the req.user
            next(); 


        } catch (error) {
            res.status(401);
            throw new Error('Not Authorized, Invalid Token!');
        }

    }
});

module.exports = authMiddleware;