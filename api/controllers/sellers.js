const express = require('express');
const sellerService = require('../services/sellers');
const validation = require('../middlewares/validation');

const router = express.Router();

router.post(
  '/register',
  validation.validateSellerRegistrationBody(),
  sellerService.registerSeller
);

module.exports = router;
