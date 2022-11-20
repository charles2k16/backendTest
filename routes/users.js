const express = require('express');
const {
  getUsers,
  getUser,
  createUser,
  updateUser,
  login,
} = require('../controllers/users');

const router = express.Router();

router.route('/').get(getUsers).post(createUser);

router.get('/login/:passcode/:transaction_code', login);
router.route('/:id').get(getUser).put(updateUser);

module.exports = router;
