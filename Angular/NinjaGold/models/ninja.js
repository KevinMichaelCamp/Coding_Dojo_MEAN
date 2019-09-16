var mongoose = require('/mongoose');

var NinjaSchema = new mongoose.Schema({
  name: {
    type: String,=
    required: [true, "First name is required"],
    minlength: [2, "First name must be at least 2 characters"]
  },
  gold: {
    type: Number,
    default: 0;
  }
}, {timestamps: true});

var Ninja = mongoose.model('Ninja', NinjaSchema);
module.exports = Ninja;
