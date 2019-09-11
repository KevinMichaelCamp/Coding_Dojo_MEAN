var mongoose = require('mongoose');

var UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "name field is required"]
  },
  email: {
    type: String,
    required: [true, "email field is required"]

  },
  password: {
    type: String,
    required: [true, "password field is required"]

  },
}, {timestamps: true });

var User = mongoose.model('User', UserSchema);
module.exports = User;