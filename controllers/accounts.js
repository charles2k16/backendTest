const Account = require('../models/Account');

exports.getAccounts = async (req, res, next) => {
  const account = await Account.find();

  res.status(200).json({
    success: true,
    data: account,
  });
};

exports.createAccount = async (req, res, next) => {
  const account = await Account.create(req.body);

  res.status(200).json({
    success: true,
    data: account,
  });
};

// get single account
exports.getAccount = async (req, res, next) => {
  const account = await Account.findById(req.params.id);

  if (!account) {
    return res.status(404).json({
      success: false,
      error: 'Account not found',
    });
  }

  res.status(200).json({
    success: true,
    data: account,
  });
};

exports.getAccountByUserId = async (req, res, next) => {
  const accounts = await Account.find();

  let userAccount = accounts.filter(function (acc) {
    return acc.user == req.params.userId;
  });

  // console.log(userAccount);

  if (!userAccount) {
    return res.status(200).json({
      success: true,
      data: [],
    });
  }

  res.status(200).json({
    success: true,
    data: userAccount,
  });
};

exports.updateAccount = async (req, res, next) => {
  const account = await Account.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
  });

  if (!account) {
    return next(
      new ErrorHandler(`Account not found with id of ${req.params.id}`, 404)
    );
  }

  res.status(200).json({ success: true, data: account });
};

exports.deleteAccount = async (req, res, next) => {
  try {
    const account = await Account.findById(req.params.id);

    account.remove();

    res.status(200).json({ success: true, data: {} });
  } catch (err) {
    next(err);
  }
};
