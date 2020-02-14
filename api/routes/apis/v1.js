const express = require('express');
const userController = require('../../controllers/users');
const authController = require('../../controllers/auth');
const sellerController = require('../../controllers/sellers');
const slotController = require('../../controllers/slots');

const router = express.Router();

router.use('/users', userController);
router.use('/sellers', sellerController);
router.use('/slots', slotController);
router.use('/auth', authController);

module.exports = router;
