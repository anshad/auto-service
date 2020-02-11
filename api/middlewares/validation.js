const { body } = require('express-validator');

const validateRegistrationBody = () => [
  body('name')
    .exists()
    .withMessage('name field is required')
    .isLength({ min: 3 })
    .withMessage('name must be greater than 3 letters'),
  body('email')
    .exists()
    .withMessage('email field is required')
    .isEmail()
    .withMessage('invalid email'),
  body('password')
    .exists()
    .withMessage('password field is required')
    .isLength({ min: 8, max: 12 })
    .withMessage('password must be in between 8 to 12 characters long')
];

const validateSellerRegistrationBody = () => [
  body('name')
    .exists()
    .withMessage('name field is required')
    .isLength({ min: 3 })
    .withMessage('name must be greater than 3 letters'),
  body('email')
    .exists()
    .withMessage('email field is required')
    .isEmail()
    .withMessage('invalid email'),
  body('country')
    .exists()
    .withMessage('country field is required'),
  body('province')
    .exists()
    .withMessage('province field is required'),
  body('city')
    .exists()
    .withMessage('city field is required'),
  body('street')
    .exists()
    .withMessage('street field is required'),
  body('phonePrimary')
    .exists()
    .withMessage('primary phone field is required'),
  body('openingTime')
    .exists()
    .withMessage('opening time phone field is required'),
  body('closingTime')
    .exists()
    .withMessage('closing time phone field is required')
];

const validateLoginBody = () => [
  body('email')
    .exists()
    .withMessage('email field is required')
    .isEmail()
    .withMessage('invalid email'),
  body('password')
    .exists()
    .withMessage('password field is required')
    .isLength({ min: 8, max: 12 })
    .withMessage('password must be in between 8 to 12 characters long')
];

module.exports = {
  validateRegistrationBody,
  validateSellerRegistrationBody,
  validateLoginBody
};
