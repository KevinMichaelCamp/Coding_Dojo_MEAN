var Author = require('../models/author');

module.exports = {

  index_author: function(req, res){
    Author.find({}, null, {sort: {name: 1}})
      .then(authors => res.json(authors))
      .catch(err => res.json(err));
  },

  create_author: function(req, res){
    Author.create(req.body)
      .then(person => res.json(person))
      .catch(err => res.json(err));
  },

  read_author: function(req, res){
    Author.findOne({_id: req.params.id})
      .then(author => {
        res.json(author ? author : "No such author in database")
      })
      .catch(err => res.json(err));
  },

  update_author: function(req, res){
    Author.findOneAndUpdate({_id: req.params.id}, req.body, {new: true})
      .then(result => {
        res.json(result ? result : "No such author in database")
      })
      .catch(err => res.json(err));
  },

  delete_author: function(req, res){
    Author.deleteOne({_id: req.params.id})
    .then(result => {
      res.json(result ? result : "No such author in database")
    })
    .catch(err => res.json(err));
  }


}
