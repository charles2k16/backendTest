const mongoose = require('mongoose');

const ApplicationSchema = new mongoose.Schema({
  first_name: String,
  last_name: String,
  email: String,
  gender: String,
  country: String,
  experience: String,
  employment: String,
  linkedIn: String,
  about_us: String,
  stack: String,
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('Application', ApplicationSchema);
