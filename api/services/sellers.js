const { validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');
const userModel = require('../models/user');
const sellerModel = require('../models/seller');
require('../models/slots');

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
    city,
    street,
    building,
    phonePrimary,
    phoneAlternate,
    openingTime,
    closingTime,
    password
  } = req.body;

  const isEmailExists = await sellerModel.findOne({ email });
  const isUserEmailExists = await userModel.findOne({ email });

  if (isEmailExists || isUserEmailExists) {
    // conflict
    return res.status(409).json({
      errors: [
        {
          message: 'email already exists'
        }
      ]
    });
  }

  const hashedPassword = await bcrypt.hash(password, 8);

  try {
    const seller = await sellerModel.create({
      name,
      email,
      country,
      province,
      city,
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

    try {
      const user = await userModel.create({
        name,
        email,
        password: hashedPassword
      });

      if (!user) {
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
            message: 'There was a problem registering a user.',
            log: error
          }
        ]
      });
    }
  } catch (error) {
    return res.status(500).json({
      errors: [
        {
          message: 'There was a problem registering a seller.',
          log: error
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

  console.log(sellers);

  return res.status(200).json({
    data: sellers
  });
};

module.exports = {
  registerSeller,
  getSellers
};
