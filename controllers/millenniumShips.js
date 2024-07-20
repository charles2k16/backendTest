const Millennium = require('../models/MillenniumShips');

exports.createMillShipment = async (req, res, next) => {
  const mill = await Millennium.create(req.body);

  res.status(200).json({
    success: true,
    data: mill,
  });
};

// get single account
exports.getMillShipment = async (req, res, next) => {
  const mill = await Millennium.findById(req.params.id);

  if (!mill) {
    return res.status(404).json({
      success: false,
      error: 'Shipment not found',
    });
  }

  res.status(200).json({
    success: true,
    data: mill,
  });
};

exports.getShipmentByShipId = async (req, res, next) => {
  const mill = await Millennium.find();

  let userShipment = mill.filter(function (acc) {
    return acc.ship_id == req.params.shipId;
  });

  if (!userShipment) {
    return res.status(200).json({
      success: true,
      data: [],
      message: 'No shipment found',
    });
  }

  res.status(200).json({
    success: true,
    data: userShipment[0],
  });
};

exports.getShipmentByUserId = async (req, res, next) => {
  const mill = await Millennium.find();

  let userShipment = mill.filter(function (acc) {
    return acc.user == req.params.userId;
  });

  if (!userShipment) {
    return res.status(200).json({
      success: true,
      data: [],
      message: 'No shipment found',
    });
  }

  res.status(200).json({
    success: true,
    data: userShipment[0],
  });
};

exports.updateShipment = async (req, res, next) => {
  const mill = await Millennium.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
  });

  if (!mill) {
    return next(
      new ErrorHandler(`Account not found with id of ${req.params.id}`, 404)
    );
  }

  res.status(200).json({ success: true, data: mill });
};

exports.deleteShipment = async (req, res, next) => {
  try {
    const mill = await Millennium.findById(req.params.id);

    mill.remove();

    res.status(200).json({ success: true, data: {} });
  } catch (err) {
    next(err);
  }
};
