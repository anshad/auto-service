const mongoose = require('mongoose');

const { Schema } = mongoose;

const Seller = new Schema(
  {
    name: {
      type: String,
      required: [true, 'name is required'],
      lowercase: true
    },
    email: {
      type: String,
      required: [true, 'email is required'],
      unique: true,
      lowercase: true
    },
    country: {
      type: String,
      required: [true, 'country is required']
    },
    province: {
      type: String,
      required: [true, 'state/province is required']
    },
    city: {
      type: String,
      required: [true, 'city is required']
    },
    street: {
      type: String,
      required: [true, 'street is required']
    },
    building: {
      type: String
    },
    profileUrl: {
      type: String
    },
    phonePrimary: {
      type: String,
      required: [true, 'primary phone is required']
    },
    phoneAlternate: {
      type: String
    },
    openingTime: {
      type: String,
      required: [true, 'opening time is required']
    },
    closingTime: {
      type: String,
      required: [true, 'closing time is required']
    }
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model('Seller', Seller);
