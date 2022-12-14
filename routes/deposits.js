const express = require('express');
const {
  getDeposits,
  getDeposit,
  createDeposit,
  updateDeposit,
  deleteDeposit,
  getDepositByPassword,
} = require('../controllers/deposits');

// const Shipment = require('../models/Shipment');

const router = express.Router();

router.route('/').get(getDeposits).post(createDeposit);

router.get('/track/:password', getDepositByPassword);

router.route('/:id').get(getDeposit).put(updateDeposit).delete(deleteDeposit);

module.exports = router;
