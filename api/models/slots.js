const mongoose = require('mongoose');

const { Schema } = mongoose;

const DefaultSlots = new Schema(
  {
    time: {
      type: String,
      required: [true, 'slot time is required']
    },
    seller: { type: Schema.Types.ObjectId, ref: 'Seller' },
    openSlots: [{ type: Schema.Types.ObjectId, ref: 'OpenSlots' }]
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model('DefaultSlots', DefaultSlots);
