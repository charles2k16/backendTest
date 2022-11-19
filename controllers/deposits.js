const path = require('path');
const Deposit = require('../models/Deposit');

exports.getDeposits = async (req, res, next) => {
  const dep = await Deposit.find();
  res.status(200).json({
    success: true,
    data: dep,
  });
};

exports.createDeposit = async (req, res, next) => {
  const dep = await Deposit.create(req.body);

  res.status(200).json({
    success: true,
    data: dep,
  });
};

exports.getDepositByPassword = async (req, res, next) => {
  const dep = await Deposit.find();

  let trackShip = dep.filter(function (ship) {
    return ship.password == req.params.password;
  });

  res.status(200).json({
    success: true,
    data: trackShip,
  });
};

exports.updateDeposit = async (req, res, next) => {
  const dep = await Deposit.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
  });

  if (!dep) {
    return next(
      new ErrorHandler(`Access not found with id of ${req.params.id}`, 404)
    );
  }

  res.status(200).json({ success: true, data: dep });
};

exports.deleteDeposit = async (req, res, next) => {
  try {
    const dep = await Deposit.findById(req.params.id);

    dep.remove();

    res.status(200).json({ success: true, data: {} });
  } catch (err) {
    next(err);
  }
};
