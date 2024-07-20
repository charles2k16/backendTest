const express = require('express');
const {
  createMillShipment,
  getMillShipment,
  getShipmentByUserId,
  updateShipment,
  getShipmentByShipId,
} = require('../controllers/millenniumShips');

const router = express.Router();

router.route('/').post(createMillShipment);

router.route('/user/:userId').get(getShipmentByUserId);

router.route('/:shipId').get(getShipmentByShipId);

router.route('/:id').put(updateShipment);

router.route('/:id').get(getMillShipment);

module.exports = router;
