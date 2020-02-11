const express = require('express');
const sellerService = require('../services/sellers');
const validation = require('../middlewares/validation');
// const auth = require('../middlewares/auth');

const router = express.Router();

/**
 * @api {post} /sellers/register Register a service provider
 * @apiParam {String} name Mandatory name greater than 3 letters.
 * @apiParam {String} email Mandatory email.
 * @apiParam {String} country Mandatory country.
 * @apiParam {String} province Mandatory province.
 * @apiParam {String} city Mandatory city.
 * @apiParam {String} street Mandatory street.
 * @apiParam {String} [building] Optional building.
 * @apiParam {String} email Mandatory email.
 * @apiParam {String} email Mandatory email.
 * @apiParam {String} phonePrimary Mandatory primary phone number.
 * @apiParam {String} [phoneAlternate] Optional alternate phone number.
 * @apiParam {String} openingTime Mandatory opening time.
 * @apiParam {String} closingTime Mandatory closing time.
 * @apiName RegisterServiceProvider
 * @apiGroup Sellers
 *
 * @apiSuccess {Array} success message
 *
 * @apiSuccessExample Success-Response:
 *    HTTP/1.1 200 OK
 *    {
 *      success: [
 *       {
 *         message: 'Seller registered successfully'
 *       }
 *     ]
 *   }
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
  [validation.validateSellerRegistrationBody()],
  sellerService.registerSeller
);

/**
 * @api {get} /sellers/ Get list of service providers
 * @apiHeader {String} Authorization User's token.
 * @apiHeader {String} Content-Type Content type as application/json.
 * @apiGroup Sellers
 *
 * @apiSuccess {Array} data list of sellers
 *
 * @apiSuccessExample Success-Response:
 *    HTTP/1.1 200 OK
 *    {
 *        "data": [
 *          {
 *            "_id": "5e424d7598565cbac97f0f44",
 *            "name": "motor world",
 *            "email": "motorworldblr@gmail.com",
 *            "country": "India",
 *            "province": "Karnataka",
 *            "street": "Electronic City",
 *            "phone_primary": "8050020094",
 *            "opening_time": "9:00 AM",
 *            "closing_time": "6:00 PM",
 *            "createdAt": "2020-02-11T06:45:09.068Z",
 *            "updatedAt": "2020-02-11T06:45:09.068Z",
 *            "__v": 0
 *          },
 *          {
 *           "_id": "5e424db098565cbac97f0f45",
 *            "name": "motor world yamaha",
 *            "email": "motorworldyamahablr@gmail.com",
 *            "country": "India",
 *            "province": "Karnataka",
 *            "street": "Electronic City",
 *            "phone_primary": "8050020094",
 *            "opening_time": "9:00 AM",
 *            "closing_time": "6:00 PM",
 *            "createdAt": "2020-02-11T06:46:08.799Z",
 *            "updatedAt": "2020-02-11T06:46:08.799Z",
 *            "__v": 0
 *          }
 *        ]
 *      }
 *
 */
router.get('/', [], sellerService.getSellers);

module.exports = router;
