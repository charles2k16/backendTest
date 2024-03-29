const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  name: String,
  passcode: String,
  transaction_code: String,
  email: String,
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('User', UserSchema);
