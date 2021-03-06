const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { validationResult } = require('express-validator');

const config = require('../config/env');
const userModel = require('../models/user');
const sellerModel = require('../models/seller');
require('../models/slots');

const register = async (req, res) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(422).json({ errors: errors.array() });
  }

  const { name, email, password } = req.body;

  const isEmailExists = await userModel.findOne({ email });

  if (isEmailExists) {
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
          message: 'User registered successfully'
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
};

const login = async (req, res) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(422).json({ errors: errors.array() });
  }

  const { email, password } = req.body;

  try {
    const isUserExists = await userModel.findOne({ email });
    let isPasswordValid;
    if (isUserExists) {
      isPasswordValid = await bcrypt.compare(password, isUserExists.password);
    }

    if (!isUserExists || !isPasswordValid) {
      return res.status(401).json({
        errors: [
          {
            message: 'email/password is wrong'
          }
        ]
      });
    }

    const token = jwt.sign({ id: isUserExists._id }, config.secret, {
      expiresIn: 86400
    });

    const result = {
      success: [
        {
          message: 'Successfully logged-in'
        }
      ],
      data: {
        token,
        _id: isUserExists._id,
        name: isUserExists.name,
        email: isUserExists.email
      }
    };

    const isSellerExists = await sellerModel.findOne({ email });
    if (isSellerExists) {
      result.data.seller = isSellerExists;
    }
    return res.status(200).json(result);
  } catch (error) {
    return res.status(500).json({
      errors: [
        {
          message: 'There was a problem login a user.',
          log: error
        }
      ]
    });
  }
};

module.exports = {
  register,
  login
};
