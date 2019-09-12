var Task = require('../models/task');

module.exports = {

  index: function(req, res){
    Task.find()
      .then(tasks => res.json(tasks))
      .catch(err => res.json(err));
  },


  create: function(req, res){
    Task.create(req.body)
      .then(task => res.json(task))
      .catch(err => res.json(err));
  },


  read: function(req, res){
    Task.findOne({_id: req.params.id})
      .then(task => {
        res.json(task ? task : "No such task in database")
      })
      .catch(err => res.json(err));
  },


  update: function(req, res){
    Task.findOneAndUpdate(req.params.id, req.body, {new: true})
      .then(task => res.json(task))
      .catch(err => res.json(err));
  },


  destroy: function(req, res){
    Task.remove({_id: req.params.id})
      .then(result => res.json(result))
      .catch(err => res.json(err));
  }

}
