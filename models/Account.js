const mongoose = require('mongoose');

const AccountSchema = new mongoose.Schema({
  name: String,
  account_number: String,
  account_type: String,
  balance: String,
  reserved_funds: String,
  minimum_balance: String,
  pending_depts: String,
  available_balance: String,
  charges_and_fees: String,
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
