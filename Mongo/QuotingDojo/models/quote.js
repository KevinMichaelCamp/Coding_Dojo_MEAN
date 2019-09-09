var mongoose = require('mongoose');

var QuoteSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minlength: 2
  },
  content: {
    type: String,
    required: true,
    minlength: 2
  }
}, {timestamps: true})

var Quote =  mongoose.model('Quote', QuoteSchema);
module.exports = Quote;
