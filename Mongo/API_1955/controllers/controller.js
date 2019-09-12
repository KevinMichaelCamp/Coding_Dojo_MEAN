var Person = require('../models/person');

module.exports = {

  index: function(req, res){
    Person.find()
      .then(people => res.json(people))
      .catch(err => res.json(err));
  },


  create: function(req, res){
    Person.create(req.params)
      .then(person => res.json(
      .catch(err => res.json(err));
  },


  display: function(req, res){
    Person.findOne(req.params)
    .then(person => {
      res.json(person ? person : "No such person in database")
    })
    .catch(err => res.json(err));
  },


  destroy: function(req, res){
    console.log(req.params);
    Person.remove(req.params)
      .then(result => res.json(result))
      .catch(err => res.json(err));
  }

}
