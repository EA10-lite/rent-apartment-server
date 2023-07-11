const mongoose = require("mongoose");

const newsletter = new mongoose.Schema({
    date: {},
    email: { type: String, minLength: 5, maxLength: 50, required: true, unique: true }
});

const Newsletter = mongoose.model("Newsletter", newsletter);

module.exports = {
    Newsletter
};