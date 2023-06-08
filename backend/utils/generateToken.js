const jwt = require('jsonwebtoken');

//JWT_SECRET_KEY means the secret key locatedin env file, expiresIn 30days
const generateToken = (userId) =>{
    return jwt.sign({ id: userId }, process.env.JWT_SECRET_KEY, {
        expiresIn: '30d'
    });
}

module.exports = generateToken;