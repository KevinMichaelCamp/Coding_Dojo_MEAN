var mongoose = require('mongoose');

var NoteSchema = new mongoose.Schema({
  content: {
    type: String,
    required: [true, "Note is required"],
    minlength: [3, "Note must be at least 3 characters long"]
  }
}, {timestamps: true})

var Note = mongoose.model('Note', NoteSchema);
module.exports = Note;
