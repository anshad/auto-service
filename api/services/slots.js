const slotModel = require('../models/slots');
const sellerModel = require('../models/seller');
const { validationResult } = require('express-validator');

const addDefaultSlots = async (req, res) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(422).json({ errors: errors.array() });
  }
  const { time, sellerId } = req.body;

  const isSlotExists = await slotModel.findOne({ time, seller: sellerId });

  if (isSlotExists) {
    return res.status(409).json({
      errors: [
        {
          message: 'Slot already exists'
        }
      ]
    });
  }

  try {
    let seller = await sellerModel.findById(sellerId);
    if (seller) {
      slotModel
        .create({
          time,
          seller: sellerId
        })
        .then(data => {
          slotModel
            .find({ seller: sellerId })
            .then(slots => {
              return res.status(200).json({
                success: [
                  {
                    message: 'Default slot added successfully'
                  }
                ],
                data: slots
              });
            })
            .catch(err => {
              throw new Error();
            });
        })
        .catch(error => {
          throw new Error();
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
  const slots = await slotModel.find({ seller: req.params.sellerId });

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
