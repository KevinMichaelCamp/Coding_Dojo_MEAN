var mongoose    = require('mongoose'),
    User        = require('./user');
let Schema      = mongoose.Schema;

var SurveySchema = new mongoose.Schema({
  question: {
    type: String,
    required: [true, "Question is required"],
    minlength: [8, "Question must be at least 4 characters"]
  },
  option_1: [{
    answer: {
      type: String,
      required: [true, "All 4 options required"],
      minlength:[3, "Options must be at least 4 characters"]
    },
    votes: {
      type: Number,
      default: 0
    }
  }],
  option_2: [{
    answer: {
      type: String,
      required: [true, "All 4 options required"],
      minlength:[3, "Options must be at least 4 characters"]
    },
    votes: {
      type: Number,
      default: 0
    }
  }],
  option_3: [{
    answer: {
      type: String,
      required: [true, "All 4 options required"],
      minlength:[3, "Options must be at least 4 characters"]
    },
    votes: {
      type: Number,
      default: 0
    }
  }],
  option_4: [{
    answer: {
      type: String,
      required: [true, "All 4 options required"],
      minlength:[3, "Options must be at least 4 characters"]
    },
    votes: {
      type: Number,
      default: 0
    }
  }],
  _user: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  }
}, {timestamps: true})

var Survey = mongoose.model('Survey', SurveySchema);
module.exports = Survey;
