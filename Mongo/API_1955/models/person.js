var mongoose = require('mongoose');

var PersonSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true
  }
}, {timestamps: true})

var Person = mongoose.model('Person', PersonSchema);
module.exports = Person;
