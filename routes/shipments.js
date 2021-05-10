const express = require('express');
const {
  getShipments,
} = require('../controllers/shipments');

// const Shipment = require('../models/Shipment');

const router = express.Router();

router
  .route('/')
  .get(getShipments)


module.exports = router;