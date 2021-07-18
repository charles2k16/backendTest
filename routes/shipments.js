const express = require('express');
const {
  getShipments,
  createShipment,
  updateShipment,
  deleteShipment,
  getShipmentByTracking
} = require('../controllers/shipments');

// const Shipment = require('../models/Shipment');

const router = express.Router();

router
  .route('/')
  .get(getShipments)
  .post(createShipment);

router.get('/track/:trackindId', getShipmentByTracking);

router
  .route('/:id')
  .put(updateShipment)
  .delete(deleteShipment);

module.exports = router;