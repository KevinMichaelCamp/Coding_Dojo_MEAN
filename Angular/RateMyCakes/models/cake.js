var mongoose = require('mongoose');

var CakeSchema = new mongoose.Schema({
  baker: {
    type: String,
    required: [true, "Baker name required"]
  },
  imgurl: {
    type: String,
    required: [true, "Image URL name required"]
  },
  comments: [{
    rating: {
      type: Number,
      min: [0, "Rating must be 0-5"],
      max: [5, "Rating must be 0-5"]
    },
    comment: {type: String}
  }]

}, {timestamps: true})

var Cake = mongoose.model('Cake', CakeSchema);
module.exports = Cake;
