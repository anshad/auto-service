const express = require('express');
const slotService = require('../services/slots');
const auth = require('../middlewares/auth');
const validation = require('../middlewares/validation');

const router = express.Router();

/**
 * @api {post} slots/default-slots Add Slots
 * @apiParam {String} time Mandatory slot time.
 * @apiParam {String} sellerId Mandatory id for the seller.
 * @apiName Add Default Slots
 * @apiHeader {String} Authorization User's token.
 * @apiHeader {String} Content-Type Content type as application/json.
 * @apiGroup Slots
 *
 * @apiSuccess {Array} success message
 *
 * @apiSuccessExample Success-Response:
 *    HTTP/1.1 200 OK
 *    {
 *      success: [
 *         {
 *           message: 'Default slot added successfully'
 *         }
 *       ]
 *     }
 *
 * @apiError server There was a problem adding slot.
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 500 Internal Server Error
 *     {
 *       errors: [
 *         {
 *           message: 'There was a problem adding slot.'
 *         }
 *       ]
 *     }
 */
router.post(
  '/default-slots',
  [auth.validate, validation.validateDefaultSlotBody()],
  slotService.addDefaultSlots
);

module.exports = router;
