const User = require('../models/user');

module.exports = {

  index: function(req, res){
    User.find()
      .then(users => res.json(users))
      .catch(err => res.json(err));
  },

  read: function(req, res){
    User.findOne({_id: req.params.id})
      .then(user => {
        res.json(user ? user : "No such user in database")
      })
      .catch(err => res.json(err));
  },

  update: function(req, res){
    User.findOneAndUpdate({_id: req.params.id}, req.body, {new: true})
      .then(user => {
        res.json(user ? user : "No such user in database")
      })
      .catch(err => res.json(err));
  },

  delete: function(req, res){
    User.deleteOne({_id: req.params.id})
    .then(user => {
      res.json(user ? user : "No such user in database")
    })
    .catch(err => res.json(err));
  }


}
