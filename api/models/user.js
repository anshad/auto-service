const mongoose = require('mongoose');

const { Schema } = mongoose;

const User = new Schema(
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
    password: {
      type: String,
      required: [true, 'password is required']
    }
  },
  {
    timestamps: true
  }
);

// User.set('toJSON', {
//   transform: function(doc, ret, opt) {
//     delete ret['password'];
//     return ret;
//   }
// });
module.exports = mongoose.model('User', User);
