const Joi = require("joi");

const password = Joi.string().min(8).pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/).required().messages({
  'string.base': 'Password must be a string.',
  'string.empty': 'Password is required.',
  'string.min': 'Password must be at least 8 characters long.',
  'string.pattern.base': 'Password must contain at least one uppercase letter, one lowercase letter, and one digit.'
});

// tld - Disable checking for top-level domains (e.g., .com, .org)
const email = Joi.string().email({ tlds: { allow: false } }).required().messages({
  'string.base': 'Email must be a string.',
  'string.empty': 'Email is required.',
  'string.email': 'Invalid email format.'
});

const login_schema = {
    email,
    password
};

const register_schema = {
    email,
    firstname: Joi.string().min(2).max(50).required(),
    lasstname: Joi.string().min(2).max(50).required(),
    password,
    phonenumber: Joi.string().pattern(/^\+\d{1,3}-\d{3,14}$/).required().messages({
      'string.base': 'Phone number must be a string.',
      'string.empty': 'Phone number is required.',
      'string.pattern.base': 'Invalid phone number format.'
    })
}

const forgot_password_schema = {
    email
}

const reset_password_schema = {
    password,
    confirm_password: Joi.string().valid(Joi.ref('password')).required().messages({
      'any.only': 'Passwords do not match.',
      'string.empty': 'Confirm password is required.'
    })
}

module.exports = {
    forgot_password_schema,
    login_schema,
    register_schema,
    reset_password_schema,
}