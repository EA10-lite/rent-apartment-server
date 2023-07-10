const mongoose = require("mongoose");

module.exports = (err, req, res, next) => {
    let status_code;
    let error_message;

    if (err instanceof mongoose.Error.ValidationError) {
        // Handle Mongoose validation errors
        status_code = 400; // Bad Request
        error_message = err.message;
    } else {
        // Handle other types of errors
        status_code = 500; // Internal Server Error
        error_message = 'An unexpected error occurred.';
    }

    res.status(status_code).send({
        error: error_message
    });
}