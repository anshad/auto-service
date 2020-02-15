const mongoose = require('mongoose');

const { Schema } = mongoose;

const OpenSlots = new Schema(
  {
    date: {
      type: String,
      required: [true, 'slot date is required']
    },
    slot: { type: Schema.Types.ObjectId, ref: 'DefaultSlots' },
    active: { type: Boolean, default: true }
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model('OpenSlots', OpenSlots);
