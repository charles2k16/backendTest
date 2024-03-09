const otpGenerator = require('otp-generator');
const OTP = require('../models/Otp');
const User = require('../models/User');

exports.sendOTP = async (req, res) => {
  try {
    const { email } = req.body;
    // Check if user is already present
    const checkUserPresent = await User.findOne({ email });
    // If user found with provided email
    if (!checkUserPresent) {
      return res.status(404).json({
        success: false,
        message: 'login failed! user not found with this email address',
      });
    }

    let otp = otpGenerator.generate(6, {
      upperCaseAlphabets: false,
      lowerCaseAlphabets: false,
      specialChars: false,
    });
    let result = await OTP.findOne({ otp: otp });
    while (result) {
      otp = otpGenerator.generate(6, {
        upperCaseAlphabets: false,
      });
      result = await OTP.findOne({ otp: otp });
    }
    const otpPayload = { email, otp };
    const otpBody = await OTP.create(otpPayload);
    res.status(200).json({
      success: true,
      message: 'OTP sent successfully',
    });
  } catch (error) {
    console.log(error.message);
    return res.status(500).json({ success: false, error: 'Server error otp' });
  }
};

exports.verifyOTP = async (req, res) => {
  try {
    const { email, otp } = req.body;
    const otpBody = await OTP.findOne({ email, otp });
    if (!otpBody) {
      return res.status(404).json({
        success: false,
        message: 'Invalid OTP',
      });
    }

    // add user to the response by using the email
    const user = await User.findOne({ email });

    res.status(200).json({
      success: true,
      message: 'OTP verified successfully',
      user,
    });
  } catch (error) {
    console.log(error.message);
    return res
      .status(500)
      .json({ success: false, error: 'Server error verify otp' });
  }
};
