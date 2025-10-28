const express = require('express');
const { sendOTP, verifyOTP, getOTPs } = require('../controllers/otp');

const router = express.Router();

router.post('/send-otp', sendOTP);
router.post('/verify-otp', verifyOTP);
router.get('/', getOTPs);

module.exports = router;
