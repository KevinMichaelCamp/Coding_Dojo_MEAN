var mongoose    = require('mongoose'),
    SurveySchema  = require('./survey');

var UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Name is required"],
    minlength: [3, "Name must be at least 4 characters"]
  },
  surveys: [SurveySchema]
}, {timestamps: true})

var User = mongoose.model('User', UserSchema);
module.exports = User;
