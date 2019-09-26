var mongoose    = require('mongoose'),
    User        = require('./user'),
    Schema      = mongoose.Schema;

var AppointmentSchema = new mongoose.Schema({
  patient: {
    type: String,
  },
  complaint: {
    type: String,
    required: [true, "Complaint is required"],
    minlength: [10, "Complaint must be at least 10 characters"]
  },
  date: {
    type: Date,
    required: [true, "Date is required"],
    min: [Date.now(), "Date already past"]
  },
  time: {
    type: String,
    required: [true, "Time is required"],
    validate: [/([01][0-9]|2[0-3]):[0-5][0-9]/, "Time must be in 24-hr format"]
  },
  _user: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  }
}, {timestamps: true})

var Appointment = mongoose.model('Appointment', AppointmentSchema);
module.exports = Appointment;
