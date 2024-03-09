const express = require('express');
const {
  getUser,
  updateUser,
  login,
  createUser,
  getUsers,
} = require('../controllers/users');

const { authLogin } = require('../controllers/auth');

const router = express.Router();

router.route('/').get(getUsers).post(createUser);

router.get('/login/:passcode/:transaction_code', login);
router.route('/:id').get(getUser).put(updateUser);

router.post('/auth/login', authLogin);

module.exports = router;
