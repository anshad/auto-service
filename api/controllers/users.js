const express = require('express');
const userService = require('../services/users');
const authClientRequest = require('../middlewares/auth');

const router = express.Router();

router.get(
  '/:userId',
  authClientRequest.authClientToken,
  userService.getUserDetails
);

module.exports = router;
