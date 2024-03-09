const express = require('express');
const {
  getAccounts,
  createAccount,
  getAccountByUserId,
  updateAccount,
  deleteAccount,
} = require('../controllers/accounts');

const router = express.Router();

router.route('/').get(getAccounts).post(createAccount);

router.route('/user/:userId').get(getAccountByUserId);

router.route('/:id').put(updateAccount).delete(deleteAccount);

module.exports = router;
