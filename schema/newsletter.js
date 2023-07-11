const Joi = require("joi");

// tld - Disable checking for top-level domains (e.g., .com, .org)
const email = Joi.string().email({ tlds: { allow: false } }).required().messages({
    'string.base': 'Email must be a string.',
    'string.empty': 'Email is required.',
    'string.email': 'Invalid email format.'
});

module.exports = {
    email
};