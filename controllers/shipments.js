const path = require('path');
const Shipment = require('../models/Shipment');

exports.getShipments = async (req, res, next) => {
  const shipments = await Shipment.find()
  res.status(200).json({
    success: true,
    data: shipments
  })
};
