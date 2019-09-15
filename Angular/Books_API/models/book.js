var mongoose  = require('mongoose'),
      Author  = require('./author');
let Schema    = mongoose.Schema;
var date      = new Date();
var year      = date.getFullYear();


var BookSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "Title is required"],
    minlength: [2, "Title must be at least 2 characters"]
  },
  year: {
    type : Number,
    required: [true, "Year published is required"],
    min: [1455, "Year published must be after 1455 - first printed book"],
    max: [year, "Year published cannot be future date"]
  },
  _author: {
    type: Schema.Types.ObjectId,
    required: [true, "Author required"],
    ref: 'Author'
  }
}, {timestamps: true})

var Book = mongoose.model('Book', BookSchema);
module.exports = Book;
