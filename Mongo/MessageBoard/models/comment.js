var mongoose = require('mongoose');
var Message = require('./message');
let Schema = mongoose.Schema;

var CommentSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Name is required"],
    minlength: [2, "Name must be at least 2 characters"]
  },
  comment: {
    type: String,
    required: [true, "Comment is required"],
    minlength: [2, "Comment must be at least 2 characters"]
  },
  _message: {
    type: Schema.Types.ObjectId,
    ref: 'Message'
  }
}, {timestamps: true})

var Comment = mongoose.model('Comment', CommentSchema);
module.exports = Comment;
