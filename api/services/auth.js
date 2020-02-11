const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { validationResult } = require('express-validator');

const config = require('../config/env');
const userModel = require('../models/user');

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
          msg: 'email already exists'
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

    return res.status(201).json({
      success: [
        {
          msg: 'user registered successfully'
        }
      ]
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      errors: [
        {
          msg: 'there was a problem registering a user.'
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

    const isPasswordValid = await bcrypt.compare(
      password,
      isUserExists.password
    );

    if (!isUserExists || !isPasswordValid) {
      return res.status(401).json({
        errors: [
          {
            msg: 'email/password is wrong'
          }
        ]
      });
    }

    const token = jwt.sign({ id: isUserExists._id }, config.secret, {
      expiresIn: 86400
    });

    return res.status(200).json({
      success: [
        {
          msg: 'user login successfully',
          email,
          token
        }
      ]
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      errors: [
        {
          msg: 'there was a problem login a user.'
        }
      ]
    });
  }
};

module.exports = {
  register,
  login
};
