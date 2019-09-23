var User = require('../models/user');
var Survey = require('../models/survey');

module.exports = {

  index_users: function(req, res){
    User.find()
      .then(users => res.json(users))
      .catch(err => res.json(err));
  },

  create_user: function(req, res){
    User.create(req.body)
      .then(user => res.json(user))
      .catch(err => res.json(err));
  },

  read_user: function(req, res){
    User.findOne({name: req.params.name})
      .then(user => {
        res.json(user ? user : "No such user in database")
      })
      .catch(err => res.json(err));
  },

  update_user: function(req, res){
    User.findOneAndUpdate({_id: req.params.id}, req.body, {new: true})
      .then(user => {
        res.json(user ? user : "No such user in database")
      })
      .catch(err => res.json(err));
  },

  delete_user: function(req, res){
    User.deleteOne({_id: req.params.id})
    .then(user => {
      res.json(user ? user : "No such user in database")
    })
    .catch(err => res.json(err));
  },

  index_surveys: function(req, res){
    Survey.find()
      .then(surveys => res.json(surveys))
      .catch(err => res.json(err));
  },

  create_survey: function(req, res){
    var survey = new Survey({
      question: req.body.question,
      option_1: req.body.option_1,
      option_2: req.body.option_2,
      option_3: req.body.option_3,
      option_4: req.body.option_4,
      _user: req.params.id
    })
    survey.save()
      .then(newSurvey => {
        User.findOneAndUpdate({_id: req.params.id}, {$addToSet: {surveys: newSurvey}}, {new: true}, function(err, data){
          if (err) {
            res.json(err)
          } else {
            res.json(data)
          }
        })
      })
      .catch(err => res.json(err));
  },

  read_survey: function(req, res){
    Survey.findOne({_id: req.params.id})
      .then(survey => {
        res.json(survey ? survey : "No such survey in database")
      })
      .catch(err => res.json(err));
  },

  update_survey: function(req, res){
    Survey.findOneAndUpdate({_id: req.params.id}, req.body, {new: true})
      .then(survey => {
        res.json(survey ? survey : "No such survey in database")
      })
      .catch(err => res.json(err));
  },

  delete_survey: function(req, res){
    var userID;
    Survey.findOne({_id: req.params.id})
      .then(survey => {
        userID = survey._user;
      })
      .catch(err => res.json(err));
    Survey.deleteOne({_id: req.params.id})
    .then(survey => {
      console.log("Survey deleted from Survey DB", survey);
    })
    .catch(err => res.json(err));
    User.findOneAndUpdate({_id: userID}, {$pull: {surveys: {_id: req.params.id}}}, {new: true})
      .then(user => {
        res.json(user ? user : "No such user in database")
      })
      .catch(err => res.json(err));

  }

}
