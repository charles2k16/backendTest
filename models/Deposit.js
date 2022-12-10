const mongoose = require('mongoose');

const DepositSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  city: String,
  phone: String,
  id_number: String,
  dob: String,
  gender: String,
  state: String,
  email: String,
  item_type: String,
  item_description: String,
  item_value: String,
  quantity: String,
  deposit_date: String,
  next_of_kin: String,
  relationship: String,
  status: String,
  current_loc: String,
  destination: String,
  password: String,
  confirm_password: String,
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('Deposit', DepositSchema);
