const slotModel = require('../models/slots');
const openSlotModel = require('../models/openSlots');
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
            .populate('OpenSlots')
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
  const slots = await slotModel
    .find({ seller: req.params.sellerId })
    .populate('openSlots');

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

const openSlot = async (req, res) => {
  const { slot, date, seller } = req.body;
  const isSlotOpen = await openSlotModel.findOne({ date, slot });

  if (isSlotOpen) {
    return res.status(409).json({
      errors: [
        {
          message: 'Slot already opened'
        }
      ]
    });
  }

  openSlotModel
    .create({
      date,
      slot
    })
    .then(data => {
      slotModel
        .findById(slot)
        .then(async slotData => {
          slotData.openSlots.push(data._id);
          await slotData.save();

          slotModel
            .find({ seller })
            .populate('openSlots')
            .then(slotData => {
              return res.status(200).json({
                success: [
                  {
                    message: 'Slot opened successfully'
                  }
                ],
                data: slotData
              });
            })
            .catch(err => {
              throw new Error();
            });
        })
        .catch(err => {
          throw new Error();
        });
    })
    .catch(err => {
      throw new Error();
    });
};

const closeSlot = async (req, res) => {};

module.exports = {
  addDefaultSlots,
  getDefaultSlots,
  openSlot,
  closeSlot
};
