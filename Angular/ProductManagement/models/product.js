var mongoose = require('mongoose');

var ProductSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Name is required"],
    minlength: [3, "Name must be at least 4 characters"]
  },
  price: {
    type: Number,
    required: [true, "Price is required"],
    min: [0, "Price must be greater than $0"]
  },
  imgurl: {
    type: String,
  }
}, {
  timestamps: true
})

var Product = mongoose.model('Product', ProductSchema);
module.exports = Product;