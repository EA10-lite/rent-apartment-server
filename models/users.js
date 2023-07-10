const jwt = require("jsonwebtoken");
const mongoose = require("mongoose");

const users = new mongoose.Schema({
    joined_at: { type: Date, default: Date.now },
    email: { type: String, minLength: 5, maxLength: 50, required: true, unique: true },
    firtname: { type: String, minLength: 2, maxLength: 50, required: true },
    lastname: { type: String, minLength: 2, maxLength: 50, required: true },
    phonenumber: { type: String, minLength: 7, maxLength: 24, required: true },
    password: { 
        type: String, 
        minLength: 8, 
        maxLength: 1024, 
        required: true,
        validate: {
            validator: function (value) {
              // Custom validation to enforce additional password requirements
              // Example: At least one uppercase letter, one lowercase letter, and one digit
              return /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/.test(value);
            },
            message: 'Password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, and one digit.'
        }
    }, 
});

users.methods.generateAuthToken = function(){
    return jwt.sign({ _id: this._id, }, process.env.JWT_PRIVATE_KEY);
}

const Users = mongoose.model("User", users);

module.exports = {
    Users
};