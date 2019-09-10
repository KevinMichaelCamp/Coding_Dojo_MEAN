var mongoose = require('mongoose');

var ChickenSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Name is required"],
    minlength: [2, "Name must be at least 2 characters"]
  },
  age: {
    type: Number,
    required: [true, "Age is required"]
  },
  color: {
    type: String,
    required: [true, "Color is required"],
    minlength: [3, "Color must be at least 3 characters"]
  },
  description: {
    type: String,
    required: [true, "Description is required"],
    minlength: [2, "Description must be at aleast 2 characters"]
  }
}, {timestamps: true})

var Chicken = mongoose.model('Chicken', ChickenSchema);
module.exports = Chicken;
