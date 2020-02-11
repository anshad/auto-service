const express = require('express');
const userService = require('../services/users');
const auth = require('../middlewares/auth');

const router = express.Router();

router.get('/:userId', auth.validate, userService.getUserDetails);

module.exports = router;
