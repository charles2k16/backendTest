const User = require('../models/User');

// @desc      Get all users
// @route     GET /api/v1/users
// @access    Private/Admin
exports.getUsers = async (req, res, next) => {
  const users = await User.find();
  res.status(200).json({
    success: true,
    data: users,
  });
};

exports.login = async (req, res, next) => {
  const users = await User.find();

  let loginUser = users.filter(function (user) {
    return (
      user.passcode == req.params.passcode &&
      user.transaction_code == req.params.transaction_code
    );
  });

  if (!loginUser) {
    // return staus 404 json error message
    return res.status(404).json({
      success: false,
      error: 'Authentication failed!',
    });
  }

  res.status(200).json({
    success: true,
    data: loginUser,
  });
};

// @desc      Get single user
// @route     GET /api/v1/users/:id
// @access    Private/Admin
exports.getUser = async (req, res, next) => {
  const user = await User.findById(req.params.id);

  if (!user) {
    // return staus 404 json error message
    return res.status(404).json({
      success: false,
      error: 'User not found',
    });
  }

  res.status(200).json({
    success: true,
    data: user,
  });
};

// @desc      Create user
// @route     POST /api/v1/users
// @access    Private/Admin
exports.createUser = async (req, res, next) => {
  // check for dulicate user details by email
  const user = await User.findOne({
    email: req.body.email,
  });

  if (user) {
    // return staus 400 json error message
    return res.status(400).json({
      success: false,
      error: 'User already exists',
    });
  }

  const newUser = await User.create(req.body);

  res.status(201).json({
    success: true,
    data: newUser,
  });
};

// @desc      Update user
// @route     PUT /api/v1/users/:id
exports.updateUser = async (req, res, next) => {
  const user = await User.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
  });

  res.status(200).json({
    success: true,
    data: user,
  });
};
