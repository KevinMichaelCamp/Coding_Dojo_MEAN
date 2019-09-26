const User        = require('../models/user'),
      Appointment = require('../models/appointment');

module.exports = {

  index: function(req, res){
    Appointment.find()
      .then(appts => res.json(appts))
      .catch(err => res.json(err));
  },

  create: function(req, res){
    var appt = new Appointment({
      patient: req.body.patient,
      complaint: req.body.complaint,
      date: req.body.date,
      time: req.body.time,
      _user: req.params.id
    });
    appt.save()
      .then(newAppt => {
        User.findOneAndUpdate({_id: req.params.id}, {$addToSet: {appointments: newAppt}}, {new: true}, function(err, data){
          if (err) {
            res.json(err)
          } else {
            res.json(data)
          }
        })
      })
      .catch(err => res.json(err))
  },

  read: function(req, res){
    Appointment.findOne({_id: req.params.id})
      .then(appt => {
        res.json(appt ? appt : "No such appointment in database")
      })
      .catch(err => res.json(err));
  },

  update: function(req, res){
    Appointment.findOneAndUpdate({_id: req.params.id}, req.body, {new: true})
      .then(appt => {
        res.json(appt ? appt : "No such appointment in database")
      })
      .catch(err => res.json(err));
  },

  delete: function(req, res){
    Appointment.deleteOne({_id: req.params.id})
    .then(appt => {
      res.json(appt ? appt : "No such appointment in database")
    })
    .catch(err => res.json(err));
  },

  delete_from_user: function(req, res){
    User.find({_id: req.params.uid})
      .then(user => {
        for (let i = 0; i < user[0].appointments.length; i++){
          if (user[0].appointments[i]._id == req.params.mid){
            user[0].appointments.splice(i, 1)
          }
        }
        user[0].save()
        .then((newUser) => {
          User.find({})
          .then((users) => {
            res.json(users)
          })
        })
      })
      .catch(err => res.json(err));
  }
}
