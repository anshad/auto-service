const mongoose = require('mongoose');

const { Schema } = mongoose;

const DefaultSlots = new Schema(
  {
    time: {
      type: String,
      required: [true, 'slot time is required']
    }
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model('DefaultSlots', DefaultSlots);
