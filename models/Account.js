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
  status: {
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
});

// Define the transfer sub-schema
const TransferSchema = new mongoose.Schema({
  intermediateBankName: {
    type: String,
  },
  intermediateBankAddress: {
    type: String,
  },
  intermediateBankCode: {
    type: String,
  },
  bankBranch: {
    type: String,
  },
  bankName: {
    type: String,
  },
  shortCode: {
    type: String,
  },
  branchCode: {
    type: String,
  },
  bankCode: {
    type: String,
  },
  accountNumber: {
    type: String,
  },
  accountName: {
    type: String,
  },
  status: {
    type: String,
  },
  transferAccountId: {
    type: String,
  },
  transferAmount: {
    type: String,
  },
  transferCharges: {
    type: String,
  },
  transferDate: {
    type: Date,
    default: Date.now,
  },
  transferDescription: {
    type: String,
  },
  transferCurrency: {
    type: String,
  },
  reference: {
    type: String,
  },
  email: {
    type: String,
  },
  country: {
    type: String,
  },
  beneficiaryTel: {
    type: String,
  },
  beneficiaryAddress: {
    type: String,
  },
  beneficiaryName: {
    type: String,
  },
  accountType: {
    type: String,
  },
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
  transfers: [TransferSchema],
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('Account', AccountSchema);
