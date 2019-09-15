var mongoose    = require('mongoose'),
    BookSchema  = require('./book').schema;

var AuthorSchema = new mongoose.Schema({
  first_name: {
    type: String,
    required: [true, "First name is required"],
    minlength: [2, "First name must be at least 2 characters"]
  },
  last_name: {
    type: String,
    required: [true, "Last name is required"],
    minlength: [2, "Last name must be at least 2 characters"]
  },
  country:{
    type: String,
    required: [true, "Country of origin is required"],
    minlength: [3, "Country of origin must be at least 3 characters"]
  },
  birthday: {
    type: Date,
    required: [true, "Birthdate is required"],
    // validate: [/^\d\d\d\d-(0[1-9]|1[0-2])-(0[1-9]|[1-2]\d|3[0-1])$/, "Invalid date format"]
    //validate date is in past
  },
  books: [BookSchema]
}, {timestamps: true})

var Author = mongoose.model('Author', AuthorSchema);
module.exports = Author;
