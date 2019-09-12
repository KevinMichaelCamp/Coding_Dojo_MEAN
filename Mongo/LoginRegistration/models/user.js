var mongoose = require('mongoose');

var UserSchema = new mongoose.Schema({
  first_name: {
    type: String,
    required: [true, "First name field is required"],
    minlength: [2, "First name must be at least 2 characters"]
  },
  last_name: {
    type: String,
    required: [true, "Last name field is required"],
    minlength: [2, "Last name must be at least 2 characters"]
  },
  email: {
    type: String,
    required: [true, "Email field is required"]
  },
  birthday: {
    type: Date,
    required: [true, "Birthday field is required"]
  },
  password: {
    type: String,
    required: [true, "Password field is required"]
  }
}, {timestamps: true});

var User = mongoose.model('User', UserSchema);
module.exports = User;
