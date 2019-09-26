var   mongoose    = require('mongoose'),
      AppointmentSchema  = require('./appointment');

var UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Name is required"],
    minlength: [2, "Name must be at least 2 characters"]
  },
  appointments: [AppointmentSchema]
}, {timestamps: true})

var User = mongoose.model('User', UserSchema);
module.exports = User;
