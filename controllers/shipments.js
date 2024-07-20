const path = require('path');
const Shipment = require('../models/Shipment');

exports.getShipments = async (req, res, next) => {
  const shipments = await Shipment.find();
  console.log(shipments);
  res.status(200).json({
    success: true,
    data: shipments,
  });
};

exports.createShipment = async (req, res, next) => {
  const shipment = await Shipment.create(req.body);

  res.status(200).json({
    success: true,
    data: shipment,
  });
};

exports.getShipmentByTracking = async (req, res, next) => {
  const shipments = await Shipment.find();

  let trackShip = shipments.filter(function (shipm) {
    return shipm.ship_id == req.params.trackindId;
  });

  res.status(200).json({
    success: true,
    data: trackShip,
  });
};

exports.updateShipment = async (req, res, next) => {
  const shipment = await Shipment.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
  });

  if (!shipment) {
    return next(
      new ErrorHandler(`Shipment not found with id of ${req.params.id}`, 404)
    );
  }

  res.status(200).json({ success: true, data: shipment });
};

exports.deleteShipment = async (req, res, next) => {
  try {
    const shipment = await Shipment.findById(req.params.id);

    shipment.remove();

    res.status(200).json({ success: true, data: {} });
  } catch (err) {
    next(err);
  }
};
