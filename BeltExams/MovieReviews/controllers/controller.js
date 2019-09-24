var Movie = require('../models/movie');

module.exports = {

  index: function(req, res){
    Movie.find()
      .then(movies => res.json(movies))
      .catch(err => res.json(err));
  },

  create: function(req, res){
    Movie.create(req.body)
      .then(movie => res.json(movie))
      .catch(err => res.json(err));
  },

  read: function(req, res){
    Movie.findOne({_id: req.params.id})
      .then(movie => {
        res.json(movie ? movie : "No such movie in database")
      })
      .catch(err => res.json(err));
  },

  update: function(req, res) {
    Movie.findOneAndUpdate({_id: req.params.id}, req.body, {new: true})
      .then(movie => {
        res.json(movie ? movie : "No such movie in database")
      })
      .catch(err => res.json(err));
  },

  delete: function(req, res){
    Movie.deleteOne({_id: req.params.id})
    .then(movie => {
      res.json(movie ? movie : "No such movie in database")
    })
    .catch(err => res.json(err));
  }

}
