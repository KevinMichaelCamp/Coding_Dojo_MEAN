var mongoose    = require('mongoose');

var MovieSchema = new mongoose.Schema({
  username: {
    type: String,
    required: [true, "Name is required"],
    minlength: [2, "Name must be at least 2 characters"]
  },
  title: {
    type: String,
    required: [true, "Title is required"],
    minlength: [2, "Title must be at least 2 characters"]
  },
  year: {
    type: Number,
    required: [true, "Release year required"]
  },
  ratings: [{
    type: Number,
  }]
}, {timestamps: true})

var Movie = mongoose.model('Movie', MovieSchema);
module.exports = Movie;
