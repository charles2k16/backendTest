const express = require('express');
const {
  getShipments,
  createShipment
} = require('../controllers/shipments');

// const Shipment = require('../models/Shipment');

const router = express.Router();

router
  .route('/')
  .get(getShipments)
  .post(createShipment);


module.exports = router;