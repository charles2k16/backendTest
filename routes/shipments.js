const express = require('express');
const {
  getShipments,
  createShipment,
  deleteShipment
} = require('../controllers/shipments');

// const Shipment = require('../models/Shipment');

const router = express.Router();

router
  .route('/')
  .get(getShipments)
  .post(createShipment);

router
  .route('/:id')
  .delete(deleteShipment);

module.exports = router;