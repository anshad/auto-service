const express = require('express');
const userController = require('../../controllers/users');
const authController = require('../../controllers/auth');
const sellerController = require('../../controllers/sellers');

const router = express.Router();

router.use('/users', userController);
router.use('/sellers', sellerController);
router.use('/auth', authController);

module.exports = router;
