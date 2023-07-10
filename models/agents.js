const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");

const agents = new mongoose.Schema({
    joined_at: { type: Date, default: Date.now },
    firtname: { type: String, minLength: 2, maxLength: 50, required: true },
    lastname: { type: String, minLength: 2, maxLength: 50, required: true },
    phonenumber: { type: String, minLength: 7, maxLength: 24, required: true },
    email: { 
        type: String, 
        minLength: 5, 
        maxLength: 50, 
        required: true, 
        unique: true,
        validate: {
            validator: function (value) {
              // Custom validation to check the email format using regular expression
              return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
            },
            message: 'Invalid email format.'
        }
    },
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

agents.methods.generateAuthToken = function(){
    return jwt.sign({ _id: this._id, is_agent: true }, process.env.JWT_PRIVATE_KEY);
}

const Agents = mongoose.model("Agent", agents);

module.exports = {
    Agents
};