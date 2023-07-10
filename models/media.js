const mongoose = require('mongoose');

const media = new mongoose.Schema({
  type: {
    type: String,
    enum: ['image', 'video'],
    required: true
  },
  url: {
    type: String,
    required: true,
    validate: {
      validator: function (value) {
        // Validate that the URL starts with 'http://' or 'https://'
        return /^https?:\/\//i.test(value);
      },
      message: 'Invalid URL format. Must start with http:// or https://'
    }
  }
});

module.exports = media;
