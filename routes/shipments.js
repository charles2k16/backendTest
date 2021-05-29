const express = require('express');
const {
  getShipments,
  createShipment,
  updateShipment,
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
  .put(updateShipment)
  .delete(deleteShipment);

module.exports = router;