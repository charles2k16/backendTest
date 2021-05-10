const User = require('../models/User');

// @desc      Get all users
// @route     GET /api/v1/users
// @access    Private/Admin
exports.getUsers = async (req, res, next) => {
  const users = await User.find()
  res.status(200).json({
    success: true,
    data: users
  })
};

// @desc      Get single user
// @route     GET /api/v1/users/:id
// @access    Private/Admin
exports.getUser = async (req, res, next) => {
  const user = await User.findById(req.params.id);

  res.status(200).json({
    success: true,
    data: user
  });
};

// @desc      Create user
// @route     POST /api/v1/users
// @access    Private/Admin
exports.createUser = async (req, res, next) => {
  const user = await User.create(req.body);

  res.status(200).json({
    success: true,
    data: user
  });
};

// @desc      Update user
// @route     PUT /api/v1/users/:id
exports.updateUser = async (req, res, next) => {

  const user = await User.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true
  });

  res.status(200).json({
    success: true,
    data: user
  });
};