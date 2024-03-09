const mongoose = require('mongoose');

const AccountSchema = new mongoose.Schema({
  name: String,
  account_number: Number,
  account_type: String,
  balance: Number,
  reserved_funds: Number,
  minimum_balance: Number,
  pending_depts: Number,
  available_balance: Number,
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('Account', AccountSchema);
