const mongoose = require("mongoose");

module.exports = () => {
    mongoose.connect()
        .then(() => console.log("Connected to mongodb"))
        .catch(err => console.error("Failed to connect to mongodb", err))
}