const { validationResult } = require('express-validator');

// const userModel = require('../models/user');
const sellerModel = require('../models/seller');

const registerSeller = async (req, res) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    // unprocessable
    return res.status(422).json({ errors: errors.array() });
  }

  const {
    name,
    email,
    country,
    province,
    street,
    building,
    phonePrimary,
    phoneAlternate,
    openingTime,
    closingTime
  } = req.body;

  const isEmailExists = await sellerModel.findOne({ email });

  if (isEmailExists) {
    // conflict
    return res.status(409).json({
      errors: [
        {
          msg: 'email already exists'
        }
      ]
    });
  }

  try {
    const seller = await sellerModel.create({
      name,
      email,
      country,
      province,
      street,
      building,
      phonePrimary,
      phoneAlternate,
      openingTime,
      closingTime
    });

    if (!seller) {
      throw new Error();
    }

    return res.status(200).json({
      success: [
        {
          message: 'Seller registered successfully'
        }
      ]
    });
  } catch (error) {
    return res.status(500).json({
      errors: [
        {
          message: 'There was a problem registering a seller.'
        }
      ]
    });
  }
};

const getSellers = async (req, res) => {
  const sellers = await sellerModel.find();

  if (!sellers) {
    return res.status(404).json({
      success: false,
      errors: [
        {
          message: 'No sellers found'
        }
      ]
    });
  }

  return res.status(200).json({
    data: sellers
  });
};

module.exports = {
  registerSeller,
  getSellers
};
