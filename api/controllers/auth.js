const express = require('express');
const authService = require('../services/auth');
const validation = require('../middlewares/validation');

const router = express.Router();

/**
 * @api {post} /auth/register Register a user
 * @apiParam {String} name Mandatory full name greater than 3 letters.
 * @apiParam {String} email Mandatory email.
 * @apiParam {String} password Mandatory password 8 to 12 characters long.
 * @apiName Register User
 * @apiGroup Auth
 *
 * @apiSuccess {Array} success message
 *
 * @apiSuccessExample Success-Response:
 *    HTTP/1.1 200 OK
 *    {
 *      success: [
 *         {
 *           message: 'User registered successfully'
 *         }
 *       ]
 *     }
 *
 * @apiError duplicate email already exists.
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 409 Conflict
 *     {
 *       errors: [
 *         {
 *           message: 'email already exists'
 *         }
 *       ]
 *     }
 */
router.post(
  '/register',
  validation.validateRegistrationBody(),
  authService.register
);

/**
 * @api {post} /auth/login Login user
 * @apiParam {String} email Mandatory email.
 * @apiParam {String} password Mandatory password 8 to 12 characters long.
 * @apiName Login User
 * @apiGroup Auth
 *
 * @apiSuccess {String} token auth token
 * @apiSuccess {String} _id user id
 * @apiSuccess {String} name user name
 * @apiSuccess {String} email user email
 *
 * @apiSuccessExample Success-Response:
 *    HTTP/1.1 200 OK
 *    {
 *      data: {
 *        token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVlNDIzZjY1MTY0NDM2YjgzYzk4NjJmYSIsImlhdCI6MTU4MTQyMDQ4NywiZXhwIjoxNTgxNTA2ODg3fQ.VZBFY5EhALN1kEjOyJ4VZIw8Xw9cIn-Ec50O44q-khA",
 *        _id: "5e423f65164436b83c9862fa",
 *        name: "anshad vp",
 *        email: "anshad.musafir@gmail.com"
 *     }
 *   }
 *
 * @apiError invalid email/password is wrong.
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 401 Unauthorized
 *     {
 *       errors: [
 *         {
 *           message: 'email/password is wrong'
 *         }
 *       ]
 *     }
 */
router.post('/login', validation.validateLoginBody(), authService.login);

module.exports = router;
