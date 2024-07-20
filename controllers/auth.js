const User = require('../models/User');

// @desc      Register user
// @route     POST /api/v1/auth/register
// @access    Public
exports.register = async (req, res, next) => {
  const { name, email, passcode } = req.body;

  // Create user
  const user = await User.create({
    name,
    email,
    passcode,
  });

  res.status(201).json({
    success: true,
    data: user,
  });
};

// @desc      Login user
// @route     POST /api/v1/auth/login
// @access    Public
exports.authLogin = async (req, res, next) => {
  const { email, passcode } = req.body;

  // Validate emil & password
  if (!email || !passcode) {
    return res
      .status(400)
      .json({ success: false, error: 'Please provide an email and password' });
  }

  // Check for user
  const user = await User.findOne({ email, passcode }).select('+passcode');

  if (!user) {
    // return status 401 to indicate unauthorized
    return res
      .status(401)
      .json({
        success: false,
        error: 'Invalid credentials',
        message: 'invalid credentials',
      });
  }

  res.status(200).json({
    success: true,
    message: 'User logged in successfully',
    data: user,
  });
};
