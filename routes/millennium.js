const express = require('express');
const {
  createMillShipment,
  getMillShipment,
  getShipmentByUserId,
  updateShipment,
  deleteShipment,
} = require('../controllers/millenniumShips');

const router = express.Router();

router.route('/').post(createMillShipment);

router.route('/user/:userId').get(getShipmentByUserId);

router.route('/:id').put(updateShipment).delete(deleteShipment);

router.route('/:id').get(getMillShipment);

module.exports = router;
