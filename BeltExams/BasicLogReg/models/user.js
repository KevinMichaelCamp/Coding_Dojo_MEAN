var mongoose = require('mongoose'),
  MovieSchema = require('./movie');

var UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Name is required"],
    minlength: [2, "Name must be at least 2 characters"]
  },
  email: {
    type: String,
    required: [true, "Email is required"],
  },
  movies: [MovieSchema]
}, {
  timestamps: true
})

var User = mongoose.model('User', UserSchema);
module.exports = User;