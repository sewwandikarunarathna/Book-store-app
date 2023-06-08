const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

//Schema - the blueprint of creating model
// creating an instance of mongoose schema
const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    }
})

//before(pre) creating User model, password is saved('save') as hash 
//this is a middleware. next keyword is used to move to the next middleware after this
//when updating data, if pw not modified, go to the next middleware
userSchema.pre('save', async function(next){ 
    if(!this.isModified('password')) {
        next();
    }

    const salt = await bcrypt.genSalt(10); // generating salt 10 times
    this.password = await bcrypt.hash(this.password, salt); //this means current user
    next(); //after finishing hashed process, move onto the next middleware
} )

//verify password
userSchema.methods.isPasswordMatch = async function (enteredPassword) {
    return bcrypt.compare(enteredPassword, this.password); //pw from req.body is compared to the current login user pw(see user.password in usersroute login)
}

//model
const User = mongoose.model('User', userSchema); //User is the name of the model

module.exports = User;
