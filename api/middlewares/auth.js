const jwt = require('jsonwebtoken');
const config = require('../config/env');

const validate = async (req, res, next) => {
  let token = req.headers['x-access-token'] || req.headers.authorization;

  if (token && token.startsWith('Bearer ')) {
    // Remove Bearer from string
    token = token.slice(7, token.length);
  }

  if (!token) {
    return res.status(401).json({
      errors: [
        {
          message: 'Auth token not provided'
        }
      ]
    });
  }

  jwt.verify(token, config.secret, (err, decoded) => {
    if (err) {
      return res.status(401).json({
        errors: [
          {
            message: 'Invalid auth token'
          }
        ]
      });
    }

    req.decoded = decoded;
    return next();
  });
  // return next();
};

module.exports = {
  validate
};
