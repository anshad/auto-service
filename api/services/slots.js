const slotModel = require('../models/slots');
const sellerModel = require('../models/seller');
const { validationResult } = require('express-validator');

const addDefaultSlots = async (req, res) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(422).json({ errors: errors.array() });
  }
  const { time, sellerId } = req.body;

  try {
    const seller = await sellerModel
      .findById(sellerId)
      .populate('defaultSlots');
    if (seller) {
      const defaultSlot = await slotModel.create({
        time
      });
      if (!defaultSlot) {
        throw new Error();
      }
      seller.defaultSlots.push(defaultSlot._id);
      seller.save();

      return res.status(200).json({
        success: [
          {
            message: 'Default slot added successfully'
          }
        ]
      });
    } else {
      return res.status(500).json({
        errors: [
          {
            message: 'Seller not found!'
          }
        ]
      });
    }
  } catch (error) {
    return res.status(500).json({
      errors: [
        {
          message: 'There was a problem adding slot.',
          log: error
        }
      ]
    });
  }
};

const getDefaultSlots = async (req, res) => {
  const slots = await slotModel.find();

  if (!slots) {
    return res.status(404).json({
      success: false,
      errors: [
        {
          message: 'No slots found'
        }
      ]
    });
  }

  return res.status(200).json({
    data: slots
  });
};

module.exports = {
  addDefaultSlots,
  getDefaultSlots
};
