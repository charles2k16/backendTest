const mongoose = require('mongoose');

// Define the transaction sub-schema
const TransactionSchema = new mongoose.Schema({
  amount: {
    type: String,
    required: true,
  },
  fee: {
    type: String,
  },
  balance: {
    type: String,
  },
  reference: {
    type: String,
  },
  date: {
    type: Date,
    default: Date.now,
  },
  description: {
    type: String,
  },
  // Add more fields as necessary for your transactions
});

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
  transactions: [TransactionSchema],
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('Account', AccountSchema);
