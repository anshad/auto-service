const mongoose = require('mongoose');

const { Schema } = mongoose;

const Appointment = new Schema(
  {
    vehicleType: {
      type: String,
      required: [true, 'vehicleType is required']
    },
    vehicleModel: {
      type: String,
      required: [true, 'vehicleModel is required']
    },
    regNumber: {
      type: String,
      required: [true, 'regNumber is required']
    },
    note: {
      type: String
    },
    approved: {
      type: Boolean,
      default: false
    },
    sellerId: {
      type: Schema.Types.ObjectId,
      ref: 'Seller',
      required: [true, 'sellerId is required']
    },
    userId: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: [true, 'userId is required']
    },
    openSlotId: {
      type: Schema.Types.ObjectId,
      ref: 'OpenSlots',
      required: [true, 'openSlotId is required']
    }
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model('Appointment', Appointment);
