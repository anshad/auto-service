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

/**
 * @api {get} slots/default-slots/:sellerId Get Slots
 * @apiParam {String} sellerId Mandatory seller id.
 * @apiName Get Seller's Default Slots
 * @apiHeader {String} Authorization User's token.
 * @apiHeader {String} Content-Type Content type as application/json.
 * @apiGroup Slots
 *
 * @apiSuccess {Array} data seller list
 *
 * @apiSuccessExample Success-Response:
 *    HTTP/1.1 200 OK
 *    {
 *      data: [
 *         {
 *          "_id":"5e47ec9ff461887a08efa626",
 *          "time":"6:00 pm",
 *          "seller":"5e46c304b921534916a656ee",
 *          "createdAt":"2020-02-15T13:05:35.699Z",
 *          "updatedAt":"2020-02-15T13:05:35.699Z",
 *          "__v":0
 *        },{
 *          "_id":"5e47ed47f461887a08efa627",
 *          "time":"9:00 am",
 *          "seller":"5e46c304b921534916a656ee",
 *          "createdAt":"2020-02-15T13:08:23.634Z",
 *          "updatedAt":"2020-02-15T13:08:23.634Z",
 *          "__v":0
 *        }
 *       ]
 *     }
 *
 */
router.get(
  '/default-slots/:sellerId',
  [auth.validate, validation.validateDefaultSlotBody()],
  slotService.getDefaultSlots
);

/**
 * @api {post} slots/open-slots Open Slots
 * @apiParam {String} slot Mandatory default slot id.
 * @apiParam {String} date Mandatory date in 'mm-dd-yyyy' format.
 * @apiParam {String} seller Mandatory seller id.
 * @apiName Open Date for Slots
 * @apiHeader {String} Authorization User's token.
 * @apiHeader {String} Content-Type Content type as application/json.
 * @apiGroup Slots
 *
 */
router.post(
  '/open-slots',
  [auth.validate, validation.validateDefaultSlotBody()],
  slotService.openSlot
);

module.exports = router;
