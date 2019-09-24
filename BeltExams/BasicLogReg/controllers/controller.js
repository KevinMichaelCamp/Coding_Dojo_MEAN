var User  = require('../models/user'),
    Movie = require('../models/movie');

module.exports = {

  login: function
  index_user: function(req, res){
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

}
