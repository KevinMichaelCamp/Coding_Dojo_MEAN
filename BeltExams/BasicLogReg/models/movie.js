var mongoose    = require('mongoose'),
    User        = require('./user'),
    Schema      = mongoose.Schema;

var MovieSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "Title is required"],
    minlength: [2, "Title must be at least 2 characters"]
  },
  year: {
    type: Number,
    required: [true, "Release year required"]
  },
  likes: {
    type: Number,
    default: 0
  },
  _user: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  }
}, {timestamps: true})

var Movie = mongoose.model('Movie', MovieSchema);
module.exports = Movie;
