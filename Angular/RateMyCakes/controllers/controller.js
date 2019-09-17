var Cake = require('../models/cake');

module.exports = {

  index: function(req, res){
    Cake.find()
      .then(cakes => res.json(cakes))
      .catch(err => res.json(err));
  },


  create: function(req, res){
    Cake.create(req.body)
      .then(cake => res.json(cake))
      .catch(err => res.json(err));
  },


  read: function(req, res){
    Cake.findOne({_id: req.params.id})
      .then(cake => {
        res.json(cake ? cake : "No such cake in database")
      })
      .catch(err => res.json(err));
  },


  update: function(req, res){
    Cake.findOneAndUpdate({_id: req.params.id}, {$push: {comments: req.body}}, {new: true})
      .then(cake => res.json(cake))
      .catch(err => res.json(err));
  },


  destroy: function(req, res){
    Cake.remove({_id: req.params.id})
      .then(result => res.json(result))
      .catch(err => res.json(err));
  }

}
