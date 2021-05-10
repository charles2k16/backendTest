const path = require('path');
const Shipment = require('../models/Shipment');

exports.getShipments = async (req, res, next) => {
  const shipments = await Shipment.find()
  res.status(200).json({
    success: true,
    data: shipments
  })
};

exports.createShipment = async (req, res, next) => {
  const shipment = await Shipment.create(req.body);

  res.status(200).json({
    success: true,
    data: shipment
  });
};
