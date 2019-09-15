var   mongoose  = require('mongoose');
      Comment   = require('./comment');

var MessageSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Name is required"],
    minlength: [2, "Name must be at least 2 characters"]
  },
  message: {
    type: String,
    required: [true, "Message is required"],
    minlength: [2, "Message must be at least 2 characters"]
  },
  comments: [Comment]
}, {timestamps: true})

var Message = mongoose.model('Message', MessageSchema);
module.exports = Message;
