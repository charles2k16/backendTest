const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema(
  {
    name: {
      type: String,
    },
    passcode: String,
    createdAt: {
      type: Date,
      default: Date.now
    }
  },
);

module.exports = mongoose.model('User', UserSchema);