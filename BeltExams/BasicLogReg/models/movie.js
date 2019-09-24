var mongoose    = require('mongoose'),
    User        = require('./user');
let Schema      = mongoose.Schema;

var MovieSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Name is required"],
    minlength: [2, "Name must be at least 2 characters"]
  },
  _user: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  }
}, {timestamps: true})

var Movie = mongoose.model('Movie', MovieSchema);
module.exports = Movie;
